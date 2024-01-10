import React, {useState} from 'react';
import {AiOutlineSearch} from 'react-icons/ai'

const SearchButton: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Perform the search operation with the search term
        console.log("Search term:", searchTerm);
        // Add your search logic here
    };

    return (
        <div style={{width:'100%',display: 'flex', flexDirection: 'row', height: '50%', marginTop:18}}>
            <div style={{position:'relative'}}>

                <input
                    style={{width:'100%',borderRadius:6,textAlign: "start", color: 'black', padding: '10px'}}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="ne alsan?"
                />
                <div style={{position:'absolute', top:'15%', right: 0}}>
                    <AiOutlineSearch size={28}/>
                </div>

            </div>
            <button onClick={handleSearch}></button>
        </div>
    );
};

export default SearchButton;