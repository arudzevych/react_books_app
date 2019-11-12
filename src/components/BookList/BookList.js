import React from 'react';
import './BookList.scss';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { getBooksAction } from '../../store/actions/getBooksAction';

class BookList extends React.Component {

    componentDidMount() {
        this.props.dispatch(getBooksAction());
    }

    render() {
        const { books, authors } = this.props;
        return (
            <div>
                {Object.keys(books).length
                    ? <ul className='book-list'>
                        {books.books.map(book =>
                            <li key={book.isbn} className='book-list_book-item'>
                                <Link to={`/book/${book.isbn}`}>
                                    <h5 className='book-list_book-item-title'>{book.title}</h5>
                                </Link>
                                {book.authors.map(authorId =>
                                    <Link to={`author/${authorId}`} key={authorId}>
                                            {Object.keys(authors).length &&
                                                <p className='book-list_book-item-author-name' key={authorId}>
                                                    {authors[authorId].name}
                                                </p>
                                            }
                                    </Link>
                                )}
                            </li>
                        )}
                    </ul>
                    : <LinearProgress />
                }
            </div>
        )
    }
}



const mapStateToProps = state => (
    {
        books: state.books.books,
        authors: state.authors.authors
    }
)

export default connect(mapStateToProps)(BookList);