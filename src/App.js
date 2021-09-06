import React from 'react';
import Layout from './components/layout/Layout';
import Profile from './components/profile/Profile'
import Repos from './components/repositories/Repos';
import { ResetCSS } from './styles/ResetCSS';
import GithubProvider from '../src/providers/GithubProvider'

function App() {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout> 
          <Profile />
          <Repos />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
