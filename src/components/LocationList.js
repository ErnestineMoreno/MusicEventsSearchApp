import React from 'react';

function LocationList() {
   return (
        <form className='form-horizontal'>
            <input placeholder='Search By Location' type='text' name='searchString' required />
        <button type='submit'>Go!</button>    
        </form>      

  ) 
}

export default LocationList;