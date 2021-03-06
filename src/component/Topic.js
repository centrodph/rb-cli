import React, { Component } from "react";
import { connect } from "react-redux";
import { SEARCH_TYPES } from "../constants";
import { updateTopic, removeTopic } from "../actions/topic";
import { wsSuscribe } from "../actions/suscription";
import { suscribeTwitter } from "../actions/twitter";
import GpField from "./form/GpField";
import GpSelect from "./form/GpSelect";

class Topic extends Component {
  onSuscribe = () => {
    //addCallback ws
    this.props.wsSuscribe(this.props.topic.interest);
    //addListener
    this.props.suscribeTwitter(this.props.topic);
  };

  onRemove = () => {
    this.props.removeTopic(this.props.topic);
  };

  onChange = event => {
    this.props.updateTopic({
      ...this.props.topic,
      ...event
    });
  };

  onChangeInterest = event => {
    if (event.type === true) {
      event.type = 1;
    } else {
      event.type = 2;
    }
    return this.onChange(event);
  };

  render() {
    const { topic: { id, interest, type }, editing, removing } = this.props;
    const findTyped = SEARCH_TYPES.find(item => item.id === type);
    return (
      <div
        className={`component-topic ${editing ? "block" : ""}  ${
          removing ? "removing" : ""
        }`}
      >
        <div className="topic-id">{id}</div>
        <div className="topic-interest">
          <GpField
            value={interest}
            propName="interest"
            change={this.onChange}
          />
        </div>
        <div className="topic-type">
          {findTyped && (
            <GpSelect
              value={type === 1}
              propName="type"
              textTrue="Interest"
              textFalse="User"
              change={this.onChangeInterest}
            />
          )}
        </div>
        <div className="topic-actions">
          <button onClick={this.onRemove}>Remove</button>
          <button onClick={this.onSuscribe}>Suscribe</button>
        </div>
      </div>
    );
  }
}
export default connect(null, {
  updateTopic,
  removeTopic,
  wsSuscribe,
  suscribeTwitter
})(Topic);
