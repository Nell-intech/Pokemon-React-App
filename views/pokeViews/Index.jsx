import React from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
    
    function Index (props) {

    return (
        <div className="container">
            <h1 style={myStyle}> Pokemon Index app</h1>
            <ul>
                {props.pokemons.map((pokemon, i) =>
                <li key={i}>
                
                     <a href={`/pokemon/${pokemon._id}`}><p> {pokemon.name} </p></a> 
                    {/* clicked link shouls go to show rooute and in shw route poke index number should display */}

                      
                </li>
                )} 
                <br />
                <br />
                {/* //pokemon see to put the pokemon data into database */}
            </ul>
            <a href="/pokemon/new">Add...</a> 
        </div>
    )
    }

export default Index
    