import React from 'react'
import useGithub from '../hooks/GithubHooks';
import * as S from './styled';

const Profile = () => {
    const { githubState } = useGithub();
    return (
        <S.Wrapper>
            <S.WrapperImg src={githubState.user.avatar} alt="Avatar of user"/>
                <S.WrapperInfoUser>
                 <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUserName>
                        <h3> Username: </h3>
                        <a href="/" 
                        target='_blank' 
                        rel='noreferrer'> </a>
                    </S.WrapperUserName>
                    </div>
                </S.WrapperInfoUser>
                <div>
                    <S.WrapperStatusCounter>

                        <div>
                            <h4>Followers</h4>
                            {/* <span>{githubState.user.followers}</span> */}
                        </div>
                        <div>
                            <h4>Followings</h4>
                            {/* <span>{githubState.user.followings}</span> */}
                        </div>
                        <div>
                            <h4>Gists</h4>
                            {/* <span>{githubState.user.public_gist}</span> */}
                        </div>
                        <div>
                            <h4>Repos</h4>
                            {/* <span>{githubState.user.public_repos}</span> */}
                        </div>

                    </S.WrapperStatusCounter>
                </div>
            
        </S.Wrapper>
    )
}

export default Profile;
