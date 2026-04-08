import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMyList } from "../utils/myListFirestore";
import { clearMyListMovies, setMyListMovies } from "../utils/myListSlice";

const useMyListSync = (user) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      if (!user?.uid) {
        dispatch(clearMyListMovies());
        return;
      }

      const movies = await fetchMyList(user.uid);
      dispatch(setMyListMovies(movies));
    };

    load();
  }, [user, dispatch]);
};

export default useMyListSync;
