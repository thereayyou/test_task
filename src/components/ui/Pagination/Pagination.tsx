import React, {useContext} from 'react';
import {Buttons, ButtonsList, PaginationMain} from "./Pagination.css";
import {ThemeContext} from "../../../Context/ThemeProvider";
import {CustomButton} from "../Button";
import {useTranslation} from "react-i18next";

type FilteredParticipants = {
    currentPage: number
    setCurrentPage: (number: number) => void
    numberOfPages: number
    numbers: Array<number>
}

export const Pagination = ({currentPage, setCurrentPage, numberOfPages, numbers}: FilteredParticipants) => {

    const {t} = useTranslation()

    function prePage () {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changeCurrentPage (id: number) {
        setCurrentPage(id)
    }

    function nextPage () {
        if(currentPage !== numberOfPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const {theme} = useContext(ThemeContext)

    return (
        <PaginationMain>
            <CustomButton text={t("previousPage")} color="#0070f3" onClick={prePage}/>
            <ButtonsList>
            {
                numbers.map((number: number) => {
                    return <Buttons color={theme === "light" ? "#0070f3" : "#c9c9c9"} key={number} onClick={() => changeCurrentPage(number)}>{number}</Buttons>
                })
            }
            </ButtonsList>
            <CustomButton text={t("nextPage")} color="#0070f3" onClick={nextPage}/>
        </PaginationMain>
    );
};

