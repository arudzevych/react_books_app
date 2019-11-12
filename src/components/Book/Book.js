import React, { Fragment } from 'react';
import './Book.scss';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fab from '@material-ui/core/Fab';
import Home from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { getBooksAction } from '../../store/actions/getBooksAction';
import { getAuthorsAction } from '../../store/actions/getAuthorsAction';

class Book extends React.Component {

    componentDidMount() {
        if (!Object.keys(this.props.books).length) {
            this.props.dispatch(getBooksAction());
            this.props.dispatch(getAuthorsAction());
        }
    }

    render() {
        const { books, authors } = this.props;
        const bookId = this.props.match.params.bookId;
        let currentBook;
        if (Object.keys(books).length) {
            currentBook = books.books.filter(book => book.isbn === bookId);
            console.log(currentBook);
        }
        
        return (
            <Fragment>
                {currentBook
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
                                        {Object.keys(authors).length
                                            ? <li key={authorId} className='book-page-info_book-authors_author-name'>
                                                {authors[authorId].name}
                                            </li>
                                            : null
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

const mapStateToProps = state => (
    {
        books: state.books.books,
        authors: state.authors.authors
    }
)

export default connect(mapStateToProps)(Book);