import React, { Fragment } from 'react';
import './Authors.scss';
import { Link } from 'react-router-dom';

class Authors extends React.Component {

    render() {
        const { authors } = this.props;
        return (
            <Fragment>
                <ul className='author-list'>
                    {Object.values(authors).map(author =>
                        <Link to={`author/${author.id}`}>
                            <li key={author.id} className='author-list_author-name'>
                                {author.name}
                            </li>
                        </Link>
                    )}                    
                </ul>
            </Fragment>
        )
    }
}

export default Authors;