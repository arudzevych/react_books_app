import React, { Fragment } from 'react';
import './Author.scss';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from '../../axios.config';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import Home from '@material-ui/icons/Home';

class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: {}
        }
    }

    componentDidMount() {
        axios.get('/authors.json')
            .then(res => {
                this.setState({authors: res.data});
            })

    }

    render() {
        const { authors } = this.state;
        const authorId = this.props.match.params.authorId;
        const author = authors[authorId];
        return (
            <Fragment>
                {Object.keys(authors).length
                    ? <div className='author-page'>
                        <div className='author-page_header'>
                            <Link to='/'>
                                <Fab className='author-page_header_home-btn' size='small'><Home/></Fab>
                            </Link>    
                            <h3 className='author-page_header_author-name'>{author.name}</h3>
                        </div>
                        <div className='author-page-info'>
                            <p className='author-page-info_about'>ABOUT AUTHOR</p>
                            <p className='author-page-info_description'>{author.description}</p>   
                            <ul className='author-page-info_books'>BOOKS
                                {author.books.map(book =>
                                    <Link to={`/book/${book.id}`} key={book.id}>
                                        <li key={book.id} className='author-page-info_books_book-title'>
                                                {book.title}
                                        </li>
                                    </Link>
                                )}                
                            </ul>
                        </div>
                    </div>
                    : <LinearProgress />
                }
            </Fragment>
        )
    }
}

export default Author;