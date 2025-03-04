export default function Characters(props) {
    const { characters, setCharacters } = props;
    console.log(characters);
    const resetCharacters = () => {
        setCharacters(null);
    }


    return (

        <div className="characters">
            <h1>Lista de personajes</h1>
            <button className="btn-back-home" onClick={resetCharacters}>Volver al inicio</button>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>{character.status === "Alive" ? (
                                <>
                                    <span className="alive" />
                                    Alive
                                </>
                            ) : (
                                <>
                                    <span className="dead" />
                                    dead
                                </>
                            )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey"> Especies: </span>
                                <span>{character.species}</span>
                            </p>
                            <p>
                                <span className="text-grey">Origen: </span>
                                <span>{character.origin.name}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

