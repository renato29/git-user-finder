import React from 'react';
import RepoItems from '../repositoriesItems/RepoItems';
import * as S from './style';

const Repos = () => {
    return (
        <S.WrapperTabs
            selectedTabClassName='is-selected'
            selectedTabPanelClassName='is-selected' >

            <S.WrapperTabList> 
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starreds</S.WrapperTab>
            </S.WrapperTabList>

            <S.WrapperTabPanel>
                <RepoItems 
                name= "Curso_Blockchain"
                linkToRepo="https://github.com/renato29/Curso_Blockchain"
                fullName="renato29/Curso_Blockchain"
                desciption="Indtroductory course to cryptocurrencies and applications of Blockchain technologies. "/>
            </S.WrapperTabPanel>

            <S.WrapperTabPanel>
            <RepoItems 
                name= "Netflix-Clone"
                linkToRepo="https://github.com/renato29/Netflix-Clone"
                fullName="renato29/Netflix-Clone"
                desciption="A Netflix clone built using React. It fetches the data from TMDB (The Movie Database) API. Deployed with Firebase. If available, displays the movie trailers which is fetched from Youtube."
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    )
}

export default Repos
