import React, { Component, PropTypes } from 'react';
import AboutPage from '../components/AboutPage';
import { connect } from 'react-redux';
import { fetchPageIfNeeded } from '../actions';
import { bindActionCreators } from 'redux';
import { DEFAULT_PAGE } from '../reducers/pages';

const PAGE_NAME = 'about';

// Smart component
class AboutPageContainer extends Component {
    componentWillMount() {
        const { fetchPageIfNeeded } = this.props;
        console.log(this.props)

        fetchPageIfNeeded(PAGE_NAME);
    }

    render() {
        const { page, router } = this.props;

        return (<AboutPage page={page} router={router}/>);
    }
}

function mapStateToProps(state, ownProps) {
    const page = state.pages[PAGE_NAME] || state.pages[DEFAULT_PAGE];
    console.log('state', state)
    return {
        page: page,
        // ...ownProps
    };
}
// We need to connect it to Redux store
export default connect(
    mapStateToProps,
    { fetchPageIfNeeded }
)(AboutPageContainer);
