import { useEffect } from "react";
import Jumbo from "./Jumbo";
import { useDispatch } from "react-redux";
import { getDestination, getUserLoggedAction } from "../redux/actions";
import ListDestination from "./ListDestination";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserLoggedAction());
    dispatch(getDestination("http://localhost:3001/destinations"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Jumbo />
      <ListDestination />
    </>
  );
};

export default HomePage;
