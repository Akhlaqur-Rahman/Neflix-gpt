import { db } from "./firebase";
import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";

// users/{uid}/mylist/{movieId}

export const addMovieToMyList = async (uid, movie) => {
  if (!uid || !movie?.id) return;

  const ref = doc(db, "users", uid, "mylist", String(movie.id));

  await setDoc(ref, {
    id: movie.id,
    title: movie.title || movie.name || "",
    poster_path: movie.poster_path || "",
    overview: movie.overview || "",
    vote_average: movie.vote_average || 0,
    release_date: movie.release_date || "",
    addedAt: Date.now(),
  });
};

export const removeMovieFromMyList = async (uid, movieId) => {
  if (!uid || !movieId) return;
  const ref = doc(db, "users", uid, "mylist", String(movieId));
  await deleteDoc(ref);
};

export const fetchMyList = async (uid) => {
  if (!uid) return [];

  const colRef = collection(db, "users", uid, "mylist");
  const snap = await getDocs(colRef);

  const movies = snap.docs.map((d) => d.data());

  // ✅ sort latest first
  movies.sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));

  return movies;
};
