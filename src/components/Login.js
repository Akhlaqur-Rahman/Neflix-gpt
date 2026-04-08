// import React from 'react'
// import Header from './Header';

// const Login = () => {
//   return 
//     <div>
//       <Header />
//       <div className='absoulute'>
//         <img
//         src="https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/IN-en-20260105-TRIFECTA-perspective_5ec818ea-11f4-4bff-a409-8f36e9f9a1e2_small.jpg"
//         alt="logo"
//         />
//       </div>
//       <form className='relative p-12 bg-black'>
//         <input type="text" placeholder="Email Address" className="p-2 m-2" />
//          <input type="password" placeholder="Password" className="p-2 m-2" />
//          <button>Sign In</button>
//       </form>
//     </div>
  
// };

// export default Login;


// import { useState, useRef } from "react";
// import Header from "./Header";
// import { checkValidData } from "../utils/validate";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";
// import { BG_URL, USER_AVATAR } from "../utils/constants";

// const Login = () => {
//   const [isSignInForm, setIsSignInForm] = useState(true);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const dispatch = useDispatch();

//   const name = useRef(null);
//   const email = useRef(null);
//   const password = useRef(null);

//   const handleButtonClick = () => {
//     const message = checkValidData(email.current.value, password.current.value);
//     setErrorMessage(message);
//     if (message) return;

//     if (!isSignInForm) {
//       // Sign Up Logic
//       createUserWithEmailAndPassword(
//         auth,
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           const user = userCredential.user;
//           updateProfile(user, {
//             displayName: name.current.value,
//             photoURL: USER_AVATAR,
//           })
//             .then(() => {
//               const { uid, email, displayName, photoURL } = auth.currentUser;
//               dispatch(
//                 addUser({
//                   uid: uid,
//                   email: email,
//                   displayName: displayName,
//                   photoURL: photoURL,
//                 })
//               );
//             })
//             .catch((error) => {
//               setErrorMessage(error.message);
//             });
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setErrorMessage(errorCode + "-" + errorMessage);
//         });
//     } else {
//       // Sign In Logic
//       signInWithEmailAndPassword(
//         auth,
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           // Signed in
//           const user = userCredential.user;
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setErrorMessage(errorCode + "-" + errorMessage);
//         });
//     }
//   };

//   const toggleSignInForm = () => {
//     setIsSignInForm(!isSignInForm);
//   };
//   return (
//     <div>
//       <Header />
//       <div className="absolute">
//         <img className="h-screen object-cover" src={BG_URL} alt="logo" />
//       </div>
//       <form
//         onSubmit={(e) => e.preventDefault()}
//         className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
//       >
//         <h1 className="font-bold text-3xl py-4">
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </h1>

//         {!isSignInForm && (
//           <input
//             ref={name}
//             type="text"
//             placeholder="Full Name"
//             className="p-4 my-4 w-full bg-gray-700"
//           />
//         )}
//         <input
//           ref={email}
//           type="text"
//           placeholder="Email Address"
//           className="p-4 my-4 w-full bg-gray-700"
//         />
//         <input
//           ref={password}
//           type="password"
//           placeholder="Password"
//           className="p-4 my-4 w-full bg-gray-700"
//         />
//         <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
//         <button
//           className="p-4 my-6 bg-red-700 w-full rounded-lg"
//           onClick={handleButtonClick}
//         >
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </button>
//         <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
//           {isSignInForm
//             ? "New to Netflix? Sign Up Now"
//             : "Already registered? Sign In Now."}
//         </p>
//       </form>
//     </div>
//   );
// };
// export default Login;




import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(({ user }) => {
          return updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          });
        })
        .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({ uid, email, displayName, photoURL }));
        })
        .catch((error) => setErrorMessage(error.message));
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).catch((error) =>
        setErrorMessage(error.code + " - " + error.message)
      );
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />

      {/* Background */}
      <img
        src={BG_URL}
        alt="background"
        className="absolute inset-0 h-full w-full object-cover -z-20"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Login Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative z-10 w-full md:w-3/12 mx-auto mt-32 p-12 bg-black bg-opacity-80 rounded-lg text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded"
        />

        {errorMessage && (
          <p className="text-red-500 text-sm py-2">{errorMessage}</p>
        )}

        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg font-semibold"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-4 cursor-pointer text-sm text-gray-300"
          onClick={() => setIsSignInForm(!isSignInForm)}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
