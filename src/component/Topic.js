import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SEARCH_TYPES } from '../constants';
import { updateTopic, removeTopic } from '../actions/topic';
import GpField from './form/GpField';
import GpSelect from './form/GpSelect';



class Topic extends Component {

    onRemove = () => {
        this.props.removeTopic(this.props.topic);
    }

    onChange = (event) => {
        this.props.updateTopic(
            {
                ...this.props.topic,
                ...event
            }
        );
    }

    onChangeInterest = (event) => {
        if (event.type === true) {
            event.type = 1;
        } else {
            event.type = 2;
        }
        return this.onChange(event);
    }

    render() {
        const { topic: { id, interest, type }, block } = this.props;
        const findTyped = SEARCH_TYPES.find(item => item.id === type);
        return (
            <div className={`component-topic ${block ? 'block' : ''}`}>
                <div className="topic-id">{id}</div>
                <div className="topic-interest">
                    <GpField value={interest} propName="interest" change={this.onChange} />
                </div>
                <div className="topic-type">
                    {findTyped &&
                        <GpSelect
                            value={type == 1}
                            propName="type"
                            textTrue="Interest"
                            textFalse="User"
                            change={this.onChangeInterest}
                        />
                    }
                </div>
                <div className="topic-actions">
                    <button onClick={this.onRemove}>Remove</button>
                </div>
            </div>
        );
    }
}
export default connect(null, { updateTopic, removeTopic })(Topic);