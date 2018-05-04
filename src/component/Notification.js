import React, { Component } from "react";
import { connect } from "react-redux";

/**
 * It will show the notification from the main user.
 */
class Notification extends Component {
  render() {
    const { tweetts: { messages } } = this.props;
    return (
      <div className="component-notification">
        <h3>Notifications</h3>
        {messages.map((tw, index) => {
          return (
            <div key={index}>
              <h4>{tw.interest}</h4>
              <p>{tw.message.body}</p>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = ({ tweetts }) => {
  return {
    tweetts
  };
};
export default connect(mapStateToProps)(Notification);
