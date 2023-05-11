import React from 'react';
import {useTranslation} from "react-i18next";

interface Props {

}

const MainPage = ({}: Props) => {
    const {t} = useTranslation('main')

    return (
        <div>
            {t('mainPage')}
        </div>
    );
};

export default MainPage;
