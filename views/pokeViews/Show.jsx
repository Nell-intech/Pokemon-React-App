import React from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
   
    function Show (props) {
        
    return (
        <div className="container">
            <h1 style={myStyle}> Gotta Catch 'Em All </h1>
            <h2>{props.pokemon.name}</h2>
            <img src={`${props.pokemon.img}.jpg`} alt="PokeImg" />

            <br />
            <br />
            <a href="/pokemon" style={myStyle}>Back</a>
            
        </div>

    )
    }

export default Show

