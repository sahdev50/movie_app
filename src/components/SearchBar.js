import React, {useState} from 'react';

const SearchBar = ({ onsubmit }) => {

    const [text, setText] = useState('');
    const onFormSubmit = (e) => {
        e.preventDefault();
        onsubmit(text);
    }

    return (
        <React.Fragment>
            <form className='form-group row mt-3' onSubmit={onFormSubmit}>
            <label htmlFor='search' className='col-sm-2 col-form-label' style={{
                    fontWeight: 'bold',
                    color:'#777'
            }}>
                Search Movies
            </label>
            <div className='col-sm-10'>
                    <input
                        type='text'
                        className='form-control bg-dark'
                        id='search'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        style={{
                            outline: 'none',
                            border: 'none',
                            color:'#999'
                        }}
                        placeholder='Any movie . . .' />
            </div>
           
        </form>
         <hr style={{
            backgroundColor:'grey'
        }}
        />
        </React.Fragment>
        
    );
}

export default SearchBar;