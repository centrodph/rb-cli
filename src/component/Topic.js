import React, { Component } from 'react';
import { SEARCH_TYPES } from '../constants';

class Topic extends Component {

    render() {
        const { id, interest, type } = this.props.topic;
        const findTyped = SEARCH_TYPES.find(item => item.key === type);
        return (
            <div className="component-topic">
                <div className="topic-id">{id}</div>
                <div className="topic-interest">{interest}</div>
                <div className="topic-type">{findTyped && findTyped.type}</div>
                <div className="topic-actions">
                    <button>Remove</button>
                </div>
            </div>
        );
    }
}
export default Topic;