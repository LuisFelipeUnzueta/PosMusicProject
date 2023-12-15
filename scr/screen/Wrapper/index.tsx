import { useContext, useEffect } from "react";
import Home from "../Home";
import Login from "../Login";
import UserContext from "../../context/user";

export default function Wrapper() {

    const userData = useContext(UserContext);
    return (
        userData.user != null ? <Home /> : <Login />
    )
}