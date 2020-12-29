import React from 'react';
import Tilt from 'react-tilt'
import './ImageCard.css';
// import NewComponent from './NewComponent';

const ImageCard = ({image, name}) => {
    return (
        
        
        <div className='card2 col-lg-4 col-md-6 col-sm-6'>
            <Tilt className="Tilt" options={{ max: 18, speed: 200, scale:1 }}>
                    <div className='content box Tilt-inner'>
                        <h4>{name}</h4>
                        <img className='card-img singleImage' src={image} alt='related pic'/>
                    </div>
            </Tilt>
        </div>
        
        
            
        
        // <div class="card">
        //     <img class="card-img-top" src="..." alt="Card image cap">
        //     <div class="card-body">
        //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //     </div>
        // </div>
    );
}

export default ImageCard;
