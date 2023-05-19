import React, {useEffect} from 'react';
import {AboutView} from "../components/AboutView";
import {descriptionText} from "../const";
import {useDispatch} from "react-redux";

let user = {
    id: "1",
    name: "Robin",
    middleName: "Wieruch",
    surname: "Qweqwe",
    email: "kostromenkovae@yandex.ru"
};

let visited = false;

const getUser = () => Promise.resolve({ ...user });

export const AboutController = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        if(!localStorage.getItem("access_token") || !visited ) {
            (async function () {
                const user = await getUser();
                dispatch({type: "ADD_USER", payload: user})
                visited = true
            }());
        }
    }, [])

    return (
        <AboutView descriptionText={descriptionText}/>
    );
};