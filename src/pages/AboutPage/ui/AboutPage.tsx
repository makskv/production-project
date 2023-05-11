import React from 'react';
import {useTranslation} from "react-i18next";

interface Props {

}

const AboutPage = ({}: Props) => {
    const {t} = useTranslation('about')
    return (
        <div>
            {t('aboutPage')}
        </div>
    );
};

export default AboutPage;
