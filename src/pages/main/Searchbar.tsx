import React from 'react';
import s from './Components.css'
import SearchIcon from '@mui/icons-material/Search';
export function Searchbar({ placeholder, data }) {
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder}/>
                <div className="searchIcon">
                    <SearchIcon/>
                </div>
            </div>
            <div className="dataResults">
                {data.map((value, key) => {
                    return <div>
                        {value.Name}
                    </div>
                })}
            </div>
            <div className={s.searchInputs}></div>
        </div>
    )
}
