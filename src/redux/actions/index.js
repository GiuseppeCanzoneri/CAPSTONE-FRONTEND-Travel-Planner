// export const GET_DESTINATION = "GET_DESTINATION";
export const GET_USER_LOGGED = "GET_USER_LOGGED";
export const LOGOUT_USER = "LOGOUT_USER";
// export const GET_DETTAGLIO = "GET_DETTAGLIO";
// export const GET_PREFERITI = "GET_PREFERITI";

// export const getDestination = url => {
//   const token = localStorage.getItem("token");

//   return async dispatch => {
//     try {
//       let resp = await fetch(url, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       if (resp.ok) {
//         let destinations = await resp.json();
//         destinations.content.sort(() => Math.random() - 0.5);

//         dispatch({ type: GET_DESTINATION, payload: destinations.content });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const getUserLoggedAction = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const url = "http://localhost:3001/users/me";
  return async dispatch => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let data = await resp.json();

        dispatch({ type: GET_USER_LOGGED, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const logoutUserAction = () => {
  return { type: LOGOUT_USER };
};
// export const getDettagioAction = url => {
//   const token = localStorage.getItem("token");

//   return async dispatch => {
//     try {
//       let resp = await fetch(url, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       if (resp.ok) {
//         let film = await resp.json();

//         dispatch({ type: GET_DETTAGLIO, payload: film });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const getPreferitiAction = () => {
//   const token = localStorage.getItem("token");
//   const url = "http://localhost:3001/users/me/preferiti";
//   return async dispatch => {
//     try {
//       let resp = await fetch(url, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       if (resp.ok) {
//         let data = await resp.json();

//         dispatch({ type: GET_PREFERITI, payload: data });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
