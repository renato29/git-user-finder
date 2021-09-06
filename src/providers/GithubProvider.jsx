import React, { createContext, useState } from 'react'
import api from '../api/api';


export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});

const GithubProvider = ({ children }) => {

    const [githubState, setGithubState] = useState({
        loading: false,
        user: {
            login: undefined,
            nome: "Renato",
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gist: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],

    });


    const getUser = (username) => {
        api.get(`users/${username}`).then(({ data: { user } }) => {
            setGithubState((prevState) => ({
                ...prevState,
                user: {
                    id: data.id,
                    avatar: data.avatar_url,
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    blog: data.blog,
                    company: data.company,
                    location: data.location,
                    followers: data.followers,
                    following: data.following,
                    public_gists: data.public_gists,
                    public_repos: data.public_repos,
                },
            }));
        })
    }



    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),

    }

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    );

    
    
    export default GithubProvider;