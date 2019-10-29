import React, { Fragment } from 'react';
import SearchStyles from './SearchStyles';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import SearchDropDown from './SearchDropDown';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
        }
    }

    updateSearchQuery = ({target: {value}}) => {
        this.setState({searchQuery: value});
    }

    render() {
        const { books, authors, classes } = this.props;
        const { searchQuery } = this.state;
        return (
        <Fragment>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={this.updateSearchQuery}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                />
                {searchQuery &&
                    <SearchDropDown books={books} authors={authors} searchQuery={searchQuery} />
                } 
            </div>
        </Fragment>
    )
    }
    
}

export default withStyles(SearchStyles)(Search);