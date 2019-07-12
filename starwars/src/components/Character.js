import React from 'react';

function Character(props) {
    return(
        <div>
            {props.characters.map(character => 
                <div key={character.name}>
                    <h3>{character.name}</h3>
                    <h3>{character.height}</h3>
                    <h3>{character.mass}</h3>
                    <h3>{character.hair_color}</h3>
                    <h3>{character.skin_color}</h3>
                </div>  
            )}
        </div>
    )
}

export default Character