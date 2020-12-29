import React, { useState } from 'react';
import axios from 'axios';
// import ErrorBoundary from 'react-error-boundary';

import SearchBar from './SearchBar';
import MoviePoster from './MoviePoster';
import './App.css';

const App = () => {

    const [results, setResults] = useState([]);

    
        const onFormSubmit = async (term) => {
            const { data } = await axios.get('http://www.omdbapi.com', {
                params: {
                    s: term,
                    apikey: '39679f07'
                }
            }).catch((e) => {
                console.log(e);
            });
            setResults(data.Search);
    }
    // const OurFallbackComponent = ({ error, componentStack, resetErrorBoundary }) => {
    //     return (
    //       <div>
    //         <h1>An error occurred: {error.message}</h1>
    //         <button onClick={resetErrorBoundary}>Try again</button>
    //       </div>
    //     );
    //   };

    
    return (
        
        <div>
            <div className='container'>
                {/* <ErrorBoundary
                    fallbackRender =  {({error, resetErrorBoundary, componentStack}) => (
                        <div>
                        <h1>An error occurred: {error.message}</h1>
                        <button onClick={resetErrorBoundary}>Try again</button>
                      </div>
                    )}
                > */}
                    <SearchBar onsubmit={onFormSubmit} />
                {/* </ErrorBoundary> */}
            </div>
            <div className='container-fluid'>
                <MoviePoster results={results} />
            </div>
        </div>
    );
}

export default App;