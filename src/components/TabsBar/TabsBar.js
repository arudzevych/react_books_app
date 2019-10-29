import React, { Fragment } from 'react';
// import './TabsBar.scss';
import Authors from '../Authors';
import BookList from '../BookList';
import TabPaper from './TabPaper';
import Search from '../Search';
import { AppBar, Toolbar, Tabs, Tab, } from '@material-ui/core';
import axios from '../../axios.config';
import LinearProgress from '@material-ui/core/LinearProgress';

class TabsBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            books: [],
            authors: {}            
        }
    }

    componentDidMount() {
        axios
            .get('/books.json')
            .then(res => {
                const data = res.data;
                this.setState({books: data.books});
            })
        axios
            .get('/authors.json')
            .then(res => {
                this.setState({authors: res.data});
        });

    }

    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    }

    render() {
        const {value} = this.state;
        const { books, authors } = this.state;
        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <Tabs value={value} onChange={this.handleChange} aria-label="app-navigation">
                            <Tab label="Books" />
                            <Tab label="Authors" />
                        </Tabs>
                        <Search books={books} authors={authors} />
                    </Toolbar>
                </AppBar>
                {books.length 
                    ? <TabPaper value={value} index={0}>
                        <BookList books={books} authors={authors} />
                    </TabPaper>  
                    : <LinearProgress />
                    }
                {Object.keys(authors).length
                    ? <TabPaper value={value} index={1}>
                        <Authors books={books} authors={authors} />
                    </TabPaper>
                    : <LinearProgress />
                }
            </Fragment>
        )
    }
}

export default TabsBar;