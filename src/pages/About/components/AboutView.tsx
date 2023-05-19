import React, {useContext} from 'react';
import {
    AboutDescription,
    AboutHeader,
    AboutMain,
    AboutPageBody,
    AboutPageGallery,
    DescriptionItem
} from "./AboutPage.css";
import firstImage from "../../../images/volga.jpg";
import secondImage from "../../../images/large.jpg";
import thirdImage from "../../../images/7c4cf9c5ae562ff196deb78fcdfb990f.jpg";
import {useTranslation} from "react-i18next";
import {ThemeContext} from "../../../Context/ThemeProvider";


interface IProps {
    descriptionText: Array<string>
}

const AboutViewComponent = ({descriptionText}: IProps ) => {

    const {theme} = useContext(ThemeContext)

    const { t } = useTranslation();

    return (
        <AboutMain>
            <AboutHeader color={theme === "light" ? "black" : "white"}>
                {t("firstSprint")}
            </AboutHeader>
            <AboutPageBody color={theme === "light" ? "black" : "#c9c9c9"}>
                <AboutDescription>
                    {descriptionText.map((description) => (
                        <DescriptionItem>{t(description)}</DescriptionItem>
                    ))}
                </AboutDescription>
                <AboutPageGallery>
                    <img style={{ width: "300px", height: "200px" }} src={firstImage} />
                    <img style={{ width: "300px", height: "200px" }} src={secondImage} />
                    <img style={{ width: "600px", height: "300px" }} src={thirdImage} />
                </AboutPageGallery>
            </AboutPageBody>
        </AboutMain>
    );
};

export const AboutView = React.memo(AboutViewComponent);