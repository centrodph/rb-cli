import React, { Component } from "react";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import { connect } from "react-redux";
import { SEARCH_TYPES } from "../constants";
import { createTopic } from "../actions/topic";

const INIT_STATE = {
  interest: "",
  type: 1,
  error: ""
};

class TopicForm extends Component {
  state = { ...INIT_STATE };

  onSubmitHandler = event => {
    event.preventDefault();
    console.log();
    if (this.state.interest.length > 4 && this.state.type != null) {
      this.props.createTopic(this.state);
      this.setState({ ...INIT_STATE });
    } else {
      NotificationManager.error("Form", "Error en validaiones", 2000);
    }
  };

  onChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    return (
      <div className="component-topic-form">
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-field">
            <label>Interest</label>
            <input
              type="text"
              value={this.state.interest}
              onChange={e => this.onChange("interest", e.target.value)}
            />
          </div>
          <div className="form-field">
            <label>Type</label>
            <select
              value={this.state.type}
              onChange={e => this.onChange("type", e.target.value)}
            >
              {SEARCH_TYPES.map(op => (
                <option key={op.id} value={op.id}>
                  {" "}
                  {op.text}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <button disabled={this.props.creating} type="submit">
              Agregar
            </button>
          </div>
        </form>
        <NotificationContainer />
      </div>
    );
  }
}
const mapStateToProps = ({ topics }) => {
  return {
    creating: topics.creating
  };
};
export default connect(mapStateToProps, { createTopic })(TopicForm);
