import imgRickAndMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const charactersApi = await api.json();


    setCharacters(charactersApi.results);
    console.log(charactersApi);
  };
  console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick and Morty</h1>

        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imgRickAndMorty} alt="rick-morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">Iniciar Busqueda</button>
          </>
        )}

      </header>
    </div>
  );
}

export default App;
