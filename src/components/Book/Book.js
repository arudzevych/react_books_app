import React, { Fragment } from 'react';
import './Book.scss';
import axios from '../../axios.config';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fab from '@material-ui/core/Fab';
import Home from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: {}
        }
    }

    componentDidMount() {
        axios
            .get('/books.json')
            .then(res => {
                const data = res.data;
                console.log('res', res)
                this.setState({books: data.books});
                console.log('books', this.state.books);
            })
        axios
            .get('/authors.json')
            .then(res => {
                const data = res.data;
                this.setState({authors: data});
                console.log('authors ', this.state.authors);
        });

    }

    render() {
        const { books, authors } = this.state;
        const bookId = this.props.match.params.bookId;
        const currentBook = books.filter(book => book.isbn === bookId);
        return (
            <Fragment>
                {books.length
                    ? <div className='book-page'>
                        <div className='book-page_header'>
                            <Link to='/'>
                                <Fab className='book-page_header_home-btn' size='small'><Home/></Fab>
                            </Link>
                            <h3 className='book-page_header_book-title'>{currentBook[0].title}</h3>
                        </div>
                        <div className='book-page-info'>
                            <ul className='book-page-info_book-authors'>AUTHORS
                                {currentBook[0].authors.map(authorId =>
                                    <Link to={`/author/${authorId}`} key={authorId}>
                                        {Object.keys(authors).length &&
                                            <li key={authorId} className='book-page-info_book-authors_author-name'>
                                                {authors[authorId].name}
                                            </li>
                                        }
                                    </Link>
                                )}
                            </ul>
                            <ul className='book-page-info_categories'>CATEGORIES 
                                {currentBook[0].categories.map(category => 
                                    <Link to={`/categories/${category}`} key={category}>
                                        <li key={category} className='book-page-info_categories-name'>
                                            {category}
                                        </li>
                                    </Link>
                                )}
                            </ul>
                            <p className='book-page-info_description'>BOOK DESCRIPTION</p>
                            <p className='book-page-info_description-text'>{currentBook[0].longDescription}</p>
                        </div>
                    </div>
                    : <LinearProgress />
                }
                
            </Fragment>
        )
    }
}

export default Book;