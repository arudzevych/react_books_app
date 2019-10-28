import React, { Fragment } from 'react';
import SearchStyles from './SearchStyles';
import { InputBase } from '@material-ui/core';
import {  makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(SearchStyles);

function Search() {
        const classes = useStyles();
        return (
            <Fragment>
                <div className={classes.search}>
                    <InputBase
                    placeholder="Search"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Fragment>
        )
}

export default Search;