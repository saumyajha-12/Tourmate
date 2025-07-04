import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className="header-toolbar">
        <Typography variant="h4" className="header-title">
          MyTourGuide
        </Typography>
        <div className="header-search">
          <IconButton className="search-icon" aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search..."
            className="search-input"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
