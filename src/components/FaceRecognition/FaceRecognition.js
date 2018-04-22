import React from 'react';
//import '';

const FaceRecognition = ( { imageUrl } ) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2 '>
                <img id='imageinput' src= { imageUrl } alt="face" width='800px' height='auto' />
            </div>
            

        </div>
    );
}

export default FaceRecognition;