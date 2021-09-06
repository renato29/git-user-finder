import { useContext } from "react";
import { GithubContext } from "../providers/GithubProvider";

const useGithub =()=>{ 

    const { githuState } = useContext(GithubContext);

    return(githuState);
}

export default useGithub
