import React from 'react'

function Character(props) {
    return(
        <div>
            <h3>{props.character.name}</h3>
            <p>
                <strong>Height</strong>   
                {props.character.height}
            </p>
            <p>
                <strong>Mass</strong>
                {props.character.mass}
            </p>
            <p>
                <strong>Hair Color</strong>
                {props.character.hair_color}
            </p>
            <p>
                <strong>Skin Color</strong>
                {props.character.skin_color}
            </p>
            <p>
                <strong>Eye Color</strong>
                {props.character.eye_color}
            </p>
            <p>
                <strong>Birth Year</strong>
                {props.character.birth_year}
            </p>
            <p>
                <strong>Gender</strong>
                {props.character.gender}
            </p>
            <p>
                <strong>Homeworld</strong>
                {props.character.homeworld}
            </p>
            <p>
                <strong>Films</strong>
                {props.character.films}
            </p>
            <p>
                <strong>Species</strong>
                {props.character.species}
            </p>
            <p>
                <strong>Vehicles</strong>
                {props.character.vehicles}
            </p>
            <p>
                <strong>Starships</strong>
                {props.character.starships}
            </p>
            <p>
                <strong>Created</strong>
                {props.character.created}
            </p>
            <p>
                <strong>Edited</strong>
                {props.character.edited}
            </p>
            <p>
                <strong>Url</strong>
                {props.character.url}
            </p>
       </div>
    )
}

export default Character