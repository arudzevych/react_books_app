import React, { Fragment } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import './SearchDropDown.scss';

// const useStyles = makeStyles(theme => ({
//   wrapper: {
//     position: 'relative',
//   },
//   paper: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     left: 0,
//     border: '1px solid',
//     padding: theme.spacing(1),
//     backgroundColor: theme.palette.background.paper,
//     color: '#000',
//   },
// }));

function SearchDropDown({ books, authors, searchQuery }) {
    // const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClickAway = () => {
        setOpen(false);
    };

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);

    const filteredAuthors = Object.values(authors).filter(author =>
        author.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);

    const getUniqueCategories = (books) => {
        let uniqueCategories = [];
        books.forEach(book => {
            book.categories.forEach(category => {
                    if (uniqueCategories.indexOf(category) === -1) {
                    uniqueCategories.push(category);  
                }
            })
        })
        console.log(uniqueCategories);
        return uniqueCategories;
    };

    const categories = getUniqueCategories(books);

    const filteredCategories = categories.filter(category => 
        category.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);

    return (
        <Fragment>  
            <ClickAwayListener onClickAway={handleClickAway}>
                <div className='search-menu'>
                    {open
                        ? <div className='search-menu_paper'>
                            <ul className='search-menu_paper_book-list'>BOOKS
                                {filteredBooks.map(book => 
                                    <Link to={`/book/${book.isbn}`} key={book.isbn}>
                                        <li key={book.isbn} className='search-menu_paper_book-list_book-title'>
                                            {book.title}
                                        </li>
                                    </Link>
                                )}
                            </ul>
                            <Divider />
                            <ul className='search-menu_paper_author-list'>AUTHORS
                                {filteredAuthors.map(author =>
                                    <Link to={`/author/${author.id}`} key={author.id}>
                                        <li key={author.name} className='search-menu_paper_author-list_author-name'>
                                            {author.name}
                                        </li>
                                    </Link>
                                )}
                            </ul>
                            <Divider />
                            <ul className='search-menu_paper_category-list'>CATEGORIES
                                {filteredCategories.map(category =>
                                    <Link to={`/category/${category}`} key={category}>
                                        <li key={category} className='search-menu_paper_category-list_category-name'>
                                            {category}
                                        </li>
                                    </Link>
                                )}
                            </ul>
                        </div>
                        : null
                    }
                </div>
            </ClickAwayListener>
        </Fragment>
    );
}

export default SearchDropDown;