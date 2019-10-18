import React from 'react';
import './homepage.scss';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.style';


export const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
)



export default HomePage;