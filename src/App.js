import React from 'react';
import Layout from './components/layout/Layout';
import NoSearch from './components/noSearch/NoSearch';
import Profile from './components/profile/Profile'
import Repos from './components/repositories/Repos';
import useGithub from './hooks/GithubHooks';

function App() {
  const { githubState } = useGithub(() => { })
  return (
    <Layout>
      {githubState.hasUser ? (
        <> {githubState.loading ?
          (
            <p>Loading...</p>
          ) : (
            <><Profile />
              <Repos /></>
          )}
        </>
      ) : (<NoSearch />)}

    </Layout>


  );
}

export default App;
