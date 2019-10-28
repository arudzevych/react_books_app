import React from 'react';
import './BookList.scss';
// import LinearProgress from '@material-ui/core/LinearProgress';
import { Link } from 'react-router-dom';

class BookList extends React.Component {

    render() {
        const { books, authors } = this.props;
        return (
            <ul className='book-list'>
                {books.map(book =>
                    <li key={book.isbn} className='book-list_book-item'>
                        <Link to={`/book/${book.isbn}`}>
                            <h5 className='book-list_book-item-title'>{book.title}</h5>
                        </Link>
                        {book.authors.map(authorId =>
                            <Link to={`author/${authorId}`}>
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
        )
    }
}

export default BookList;