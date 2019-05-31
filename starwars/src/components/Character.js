import React from 'react'

function Character() {
    return(
        <div>
            <h3>{this.state.starwarsChars.name}</h3>
            <p>
                <strong>Height</strong>   
                {this.state.starwarsChars.height}
            </p>
            <p>
                <strong>Mass</strong>
                {this.state.starwarsChars.mass}
            </p>
            <p>
                <strong>Hair Color</strong>
                {this.state.starwarsChars.hair_color}
            </p>
            <p>
                <strong>Skin Color</strong>
                {this.state.starwarsChars.skin_color}
            </p>
            <p>
                <strong>Eye Color</strong>
                {this.state.starwarsChars.eye_color}
            </p>
            <p>
                <strong>Birth Year</strong>
                {this.state.starwarsChars.birth_year}
            </p>
            <p>
                <strong>Gender</strong>
                {this.state.starwarsChars.gender}
            </p>
            <p>
                <strong>Homeworld</strong>
                {this.state.starwarsChars.homeworld}
            </p>
            <p>
                <strong>Films</strong>
                {this.state.starwarsChars.films}
            </p>
            <p>
                <strong>Species</strong>
                {this.state.starwarsChars.species}
            </p>
            <p>
                <strong>Vehicles</strong>
                {this.state.starwarsChars.vehicles}
            </p>
            <p>
                <strong>Starships</strong>
                {this.state.starwarsChars.starships}
            </p>
            <p>
                <strong>Created</strong>
                {this.state.starwarsChars.created}
            </p>
            <p>
                <strong>Edited</strong>
                {this.state.starwarsChars.edited}
            </p>
            <p>
                <strong>Url</strong>
                {this.state.starwarsChars.url}
            </p>
        </div>
    )
}

export default Character