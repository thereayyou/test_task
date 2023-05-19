import React, {useContext} from 'react';
import {NotFoundContainer, NotFoundDescription, NotFoundMain} from "./PageNotFound.css";
import {CustomButton} from "../../../components/ui/Button";
import {ThemeContext} from "../../../Context/ThemeProvider";
import {useNavigate} from "react-router-dom";

const PageNotFoundComponent = () => {

    const {theme} = useContext(ThemeContext)

    const navigate = useNavigate()

    return (
        <NotFoundMain color={theme === "light" ? "black" : "white"}>
            <NotFoundContainer>
                <h1>Ошибка 404</h1>
                <NotFoundDescription color={theme === "light" ? "black" : "#c9c9c9"}>
                    Кажется что-то пошло не так! Страница, которую вы запрашиваете, не
                    существует. Возможно она устарела, была удалена, или был введен
                    неверный адрес в адресной строке
                </NotFoundDescription>
                <CustomButton text="Перейти на главную" color="#0070f3" onClick={() => navigate('/about')}/>
            </NotFoundContainer>
        </NotFoundMain>
    );
};

export const PageNotFoundView = React.memo(PageNotFoundComponent)

