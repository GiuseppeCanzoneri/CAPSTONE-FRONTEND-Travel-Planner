export const GET_DESTINATION = "GET_DESTINATION";
export const GET_USER_LOGGED = "GET_USER_LOGGED";
export const LOGOUT_USER = "LOGOUT_USER";
export const GET_ITINERARY = "GET_ITINERARY";
export const GET_PREFERITI = "GET_PREFERITI";
export const GET_DESTINAZIONE_DA_MODIFICARE = "GET_DESTINAZIONE_DA_MODIFICARE";

export const getDestinationModify = destination => ({ type: GET_DESTINAZIONE_DA_MODIFICARE, payload: destination });

export const getDestination = url => {
  const token = localStorage.getItem("token");

  return async dispatch => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let destinations = await resp.json();
        destinations.content.sort(() => Math.random() - 0.5);

        dispatch({ type: GET_DESTINATION, payload: destinations.content });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

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

export const getItinerary = url => {
  const token = localStorage.getItem("token");

  return async dispatch => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let destination = await resp.json();

        dispatch({ type: GET_ITINERARY, payload: destination });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPreferiti = () => {
  const token = localStorage.getItem("token");
  const url = "http://localhost:3001/users/me/preferiti";
  return async dispatch => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let data = await resp.json();

        dispatch({ type: GET_PREFERITI, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
