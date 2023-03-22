import React from 'react'

function New() {
    return ( 
        <div>
            <h1>New Pokemon Proposals!</h1>
            <form action="/pokemon" method="POST">
                <label htmlFor="nme">Name: </label><br />
                <input type="text" id="nme" name="name" /><br /><br />

                <label htmlFor="img">Image: </label><br />
                <input type="text" id="clr" name="img" /><br /><br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default New;