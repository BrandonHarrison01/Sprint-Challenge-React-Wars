import React from 'react';
import styled from 'styled-components';

function Character(props) {

    const Cards = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-top: 40px;
    `

    const CharacterCard = styled.div`
        border: 1px solid black;
        background-color: rgba(32, 32, 32, 0.75);
        width: 40%;
        height: 250px;
        margin-bottom: 40px;
    `

    return(
        <Cards>
            {props.characters.map(character => 
                <CharacterCard key={character.name}>
                    <h2>Name: {character.name}</h2>
                    <h3>Height: {character.height}</h3>
                    <h3>Mass: {character.mass}</h3>
                    <h3>Hair Color: {character.hair_color}</h3>
                    <h3>Skin Color: {character.skin_color}</h3>
                </CharacterCard>  
            )}
        </Cards>
    )
}

export default Character