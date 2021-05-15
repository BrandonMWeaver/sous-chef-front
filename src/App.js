import { useState } from 'react';

import About from './components/About';
import Home from './components/Home';
import LoadingScreen from './components/LoadingScreen';
import NavigationBar from './components/NavigationBar';
import Recipes from './components/Recipes';
import SignInFormBox from './components/SignInFormBox';

import './App.css';

import MockData from './mock/MockData';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const [currentUserLoaded, setCurrentUserLoaded] = useState(false);

  const getCurrentUser = () => {
    fetch("http://localhost:3000/sessions", {
      credentials: "include"
    })
    .then(r => r.json())
    .then(o => {
      console.log(o);
      setCurrentUser(o);
      setCurrentUserLoaded(true);
    });
  }

  const signInCurrentUser = user => {
    setCurrentUser(user);
  }

  const signOutCurrentUser = o => {
    setCurrentUser(o);
  }

  if (!currentUser && !currentUserLoaded)
    getCurrentUser();

  return (
    <div className="App">
      <NavigationBar />
      <Home featured={MockData.recipes[3]} />
      <Recipes recipes={MockData.recipes.slice(0, 4)} />
      <About featured={MockData.recipes[3]} />
      {currentUserLoaded ?
        <SignInFormBox currentUser={currentUser} signInCurrentUser={signInCurrentUser} signOutCurrentUser={signOutCurrentUser} />
        :
        <LoadingScreen />
      }
    </div>
  );
}

export default App;
