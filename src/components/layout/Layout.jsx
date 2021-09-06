import React from 'react';
import useGithub from '../../hooks/GithubHooks';
import Header from '../header/Header';
import * as S from './Style';

const Layout=({children})=> {
    return (
        <S.WrapperLayout>
           <Header /> 
            {children}
        </S.WrapperLayout>
    )
}

export default Layout;