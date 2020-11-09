import React, { useEffect } from 'react';
import './App.css';
import Login from './components/login/Login';
import Player from './components/player/Player';
import { getTokenFromUrl } from './service/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './contexts/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token);
      spotify.getMe()
        .then(user => {
          dispatch({ type: 'SET_USER', user })
        })
        .catch(error => console.log(error));
      spotify.getUserPlaylists()
        .then(playlists => {
          dispatch({ type: 'SET_PLAYLISTS', playlists })
        })
        .catch(error => console.log(error));

      spotify.getPlaylist('0GB9chRwz1EI9MkT3BjfbO')
        .then((playlist) => {
          dispatch({ type: 'SET_DISCOVER_WEEKLY', playlist })
        })
        .catch(error => console.log(error));
    }
  }, [dispatch]);

  return (
    <div className="App">
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
}

export default App;
