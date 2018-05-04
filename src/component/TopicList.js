import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopics } from '../actions/topic';
import Topic from './Topic';

class TopicList extends Component {

    componentDidMount() {
        this.props.getTopics();
    }
    render() {
        const { loading, list, editing } = this.props.topics;
        if (loading === true) return "Loading...";
        return (
            <div className="component-topic-list">
                {list.map(topic => <Topic key={topic.id} topic={topic} block={topic.id === editing} />)}
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