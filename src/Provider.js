import React from 'react'
import GithubProvider from './providers/GithubProvider'
import { ResetCSS } from './styles/ResetCSS'
import App from './App'
const Provider = () => {
    return (
        <main>
        <GithubProvider>
        <ResetCSS />
        <App />
        </GithubProvider>
        </main>
    )
}

export default Provider;

