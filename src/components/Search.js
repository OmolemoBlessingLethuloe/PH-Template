import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import './Search.css';


const Search = ({hidebuttons}) => {
  return (
    <div>
        <form className="search">
          <div className="search-input">
            <SearchIcon className="search-icon"/>
            <input/>
            <MicIcon/>
          </div>
          {
           !hidebuttons && 
          <div className="search-buttons">
            <button className="googleSearch" type="submit">Google Search</button>
            <button className="feelingLucky" type="submit">I am feeling lucky</button>
          </div>
          }

        </form>
    </div>
  )
}

export default Search