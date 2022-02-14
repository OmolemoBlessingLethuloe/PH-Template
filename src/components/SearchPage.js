import React from 'react';
import logo from '../images/googlelogo.png'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import AppIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';
import './SearchPage.css';

const SearchPage = () => {
    return (
        <div className="search-page">
            <div className="search-page-header">
                <Link to="/">
                    <img className='googleLogo' src={logo} alt="googleLogo" />
                </Link>
                <div className="search-page-header-body">
                    <Search hidebuttons />                        
                    <div className="search-page-options">
                        <div className="search-page-options-left">
                            <div className="search-page-option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="search-page-option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="search-page-option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="search-page-option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="search-page-option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="search-page-option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="search-page-options-right">
                            <div className="search-page-option">
                                <Link to="/settings"><SettingsIcon /></Link>
                            </div>
                            <div className="search-page-option">
                                <Link to="/apps"><AppIcon /></Link>
                            </div>
                            <div className="search-page-option">
                                <Link to="/avatar"><Avatar /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage