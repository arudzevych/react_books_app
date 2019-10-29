import React, { Fragment } from 'react';
import './Categories.scss';
import axios from '../../axios.config';
// import LinearProgress from '@material-ui/core/LinearProgress';
import Fab from '@material-ui/core/Fab';
import Home from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
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
    }

    render() {
        const { books } = this.state;
        const categoryId = this.props.match.params.categoryId;
        const filteredBooks = books.filter(book => 
            book.categories.indexOf(categoryId) !== -1
        );
        console.log(filteredBooks);
        return (
            <Fragment>
                <div className='categories-page'>
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
            </Fragment>
        )
    }
}

export default Categories;