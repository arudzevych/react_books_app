import React, { Fragment } from 'react';
import './Author.scss';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import Home from '@material-ui/icons/Home';
import { getAuthorsAction } from '../../store/actions/getAuthorsAction';

class Author extends React.Component {

    componentDidMount() {
        if (!Object.keys(this.props.authors).length) {
            this.props.dispatch(getAuthorsAction());
        }
    }

    render() {
        const { authors } = this.props;
        const authorId = this.props.match.params.authorId;
        const author = authors[authorId];
        console.log(author);
        console.log(authorId);
        return (
            <Fragment>
                {author
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

const mapStateToProps = state => ({
    authors: state.authors.authors
})

export default connect(mapStateToProps)(Author);