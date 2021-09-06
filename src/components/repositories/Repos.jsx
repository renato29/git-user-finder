import React , {useState, useEffect}from 'react';
import useGithub from '../../hooks/GithubHooks';
import RepoItems from '../repositoriesItems/RepoItems';
import * as S from './style';

const Repos = () => {
    const {githubState, getUserRepos , getUserStarred } = useGithub();
    const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) { 
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearchRepos(githubState.repositories);
    }, [githubState.user.login ])

    return (
        <>
        { hasUserForSearchRepos ? (
        <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected">
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>

            <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.repositories.map((item) => (
                <RepoItems
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.starred.map((item) => (
                <RepoItems
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs> 
        ):(<><h1>No user</h1></>)}
        
        </>
    );
};

export default Repos
