import React, { Fragment } from 'react';
import './Categories.scss';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fab from '@material-ui/core/Fab';
import Home from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { getBooksAction } from '../../store/actions/getBooksAction';

class Categories extends React.Component {

    componentDidMount() {
        if (!Object.keys(this.props.books).length) {
            this.props.dispatch(getBooksAction())    
        }
    }

    render() {
        const { books } = this.props;
        const categoryId = this.props.match.params.categoryId;
        let filteredBooks;
        if (Object.keys(books).length) {
            filteredBooks = books.books.filter(book => 
                book.categories.indexOf(categoryId) !== -1
            );    
        }
        return (
            <Fragment>
                {filteredBooks
                    ? <div className='categories-page'>
                        <div className='categories-page_header'>
                            <Link to='/'>
                                <Fab className='categories-page_header_home-btn' size='small'><Home/></Fab>
                            </Link>  
                            <h3 className='categories-page_header_category-name'>{categoryId}</h3>
                        </div>
                        <div className='categories-page-info'>
                            <ul className='categories-page-info_book-list'>BOOKS
                                {filteredBooks.map(book => 
                                    <Link to={`/book/${book.isbn}`} key={book.isbn}>
                                        <li key={book.isbn} className='categories-page-info_book-list_book-title'>
                                            {book.title}
                                        </li> 
                                    </Link>
                                )}
                            </ul>
                            
                        </div>
                    </div>
                    : <LinearProgress/>
                }
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books.books
})

export default connect(mapStateToProps)(Categories);