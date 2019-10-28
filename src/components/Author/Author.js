import React, { Fragment } from 'react';
import './Author.scss';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from '../../axios.config';
import { Link } from 'react-router-dom';

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
                        <h3 className='author-page_author-name'>{author.name}</h3>
                        <div className='author-page-info'>
                            <p className='author-page-info_about'>ABOUT</p>
                            <p className='author-page-info_description'>{author.description}</p>   
                            <ul className='author-page-info_books'>BOOKS:
                                {author.books.map(book =>
                                    <Link to={`/book/${book.id}`}>
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