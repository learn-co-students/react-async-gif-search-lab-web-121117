import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'
// the App component should render out the GifListContainer component

const App = () => {
  return (
    <div>
        <NavBar />
        <GifListContainer />
    </div>
  )
}

export default App
