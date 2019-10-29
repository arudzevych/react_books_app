import React, { Fragment } from 'react';
import './Authors.scss';
import { Link } from 'react-router-dom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: 'panel1'
        }
    }

    handleChange = panel => (event, newExpanded) => {
      this.setState({expanded: newExpanded ? panel : false});
    };

    render() {
        const { authors } = this.props;
        const { expanded } = this.state;
        return (
            <Fragment>
                <ul className='author-list'>
                    {Object.values(authors).map(author =>
                        <ExpansionPanel square expanded={expanded === author.id} 
                            onChange={this.handleChange(author.id)}
                            key={author.id}
                            className='author-list_panel'
                        >
                            <ExpansionPanelSummary
                                aria-controls={author.id} 
                                id={author.id}
                                className='author-list_panel_summary'
                            >
                                <h3 className='author-list_panel_summary-author_name'>{author.name}</h3>
                            </ExpansionPanelSummary>
                            <Link to={`author/${author.id}`}>
                                <ExpansionPanelDetails className='author-list_panel_details'>
                                    <p className='author-list_panel_details-info'>Author's page</p>
                                </ExpansionPanelDetails>
                            </Link>
                            {author.books.map(book =>
                                <Link to={`book/${book.id}`}>
                                    <ExpansionPanelDetails key={book.id} className='author-list_panel_details'>
                                        <p className='author-list_panel_details-info'>{book.title}</p>
                                    </ExpansionPanelDetails>
                                </Link>
                            )}
                        </ExpansionPanel>
                    )}                    
                </ul>
            </Fragment>
        )
    }
}

export default Authors;