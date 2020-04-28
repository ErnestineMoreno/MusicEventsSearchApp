import React from 'react';

function ArtistList() {
    return (
        <form className='form-horizontal'>
            <input placeholder='Search By Artist Name' type='text' name='searchString' required />
        <button type='submit'>Go!</button>    

        </form>      

  ) 
}

export default ArtistList;