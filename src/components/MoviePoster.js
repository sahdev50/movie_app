import React from 'react';
import ImageCard from './ImageCard';

const MoviePoster = ({ results }) => {
     
    if (results) {
        const posters = results.map((result) => {
            return (
                <ImageCard key={result.imdbID} image={result.Poster} name={result.Title} />
            )
        });

        return (
            <div className='row justify-content-around'>
                {posters}
            </div>
        );

    }
    else {
        return (
            <div className='container' style={{
                color:'tomato'
            }} role="alert">
                please enter valid movie name...
            </div>
        )
    }
    
//             return (
//                 <div className='card row'>
//                     <img className='card-img-top img-fluid' src={result.Poster} alt='img' />
//                 </div>
// //                 <div class="card" style="width: 18rem;">
// //   <img class="card-img-top" src="..." alt="Card image cap">
// //   <div class="card-body">
// //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// //   </div>
// // </div>
//             );
//         })
    

   
}

export default MoviePoster;