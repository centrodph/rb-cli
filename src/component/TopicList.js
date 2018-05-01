import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopics } from '../actions/topic';

class TopicList extends Component {

    componentDidMount() {
        this.props.getTopics();
    }
    render() {
        const { loading, list } = this.props.topics;
        if (loading === true) return "Loading...";
        return (
            <div className="component-topic-list">
                list
            </div>
        );
    }
}

const mapStateToProps = ({ topics }) => {
    return {
        topics
    }
}
export default connect(mapStateToProps, { getTopics })(TopicList);