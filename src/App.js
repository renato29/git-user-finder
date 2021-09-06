import React from 'react';
import Layout from './components/layout/Layout';
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
      ) : (<h3>Type a Github user nickname and click Search</h3>)}

    </Layout>


  );
}

export default App;
