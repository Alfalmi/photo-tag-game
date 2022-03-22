import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import allLevelData from "./allLevelData";
// components
import Navbar from "./components/Navbar";
// pages
import Leaderboard from "./pages/Leaderboard";
import Home from "./pages/Home";
import Game from "./pages/Game";

// contexts
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [inGame, setInGame] = useState(false);
  const [inLeaderboard, setInLeaderboard] = useState(false);
  const [inHome, setInHome] = useState(false);
 
  const [level, setLevel] = useState(0);
  const [levelData, setLevelData] = useState(allLevelData);
  const [characters, setCharacters] = useState([]);
  const [username, setUsername] = useState("");
  const handleUpdateUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <Router basename="/photo_tagging_app">
      <Navbar
        inGame={inGame}
        setInGame={setInGame}
        characters={characters}
        inLeaderboard={inLeaderboard}
        inHome={inHome}
        
      />
      <div className="container">
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home}>
              <Home
                setLevel={setLevel}
                levelData={levelData}
                setInGame={setInGame}
                setInLeaderboard={setInLeaderboard}
                setInHome={setInHome}
                
              />
            </Route>
            <Route exact path="/game" component={Game}>
              <Game
                level={level}
                username={username}
                updateUsername={handleUpdateUsername}
                levelData={levelData}
                characters={characters}
                setCharacters={setCharacters}
                setInLeaderboard={setInLeaderboard}
                setInHome={setInHome}
                
              />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard
                setLevel={setLevel}
                level={level}
                levelData={levelData}
                setInGame={setInGame}
                setInLeaderboard={setInLeaderboard}
                setInHome={setInHome}
                
              />
            </Route>
           
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
