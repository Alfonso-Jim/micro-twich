import React from "react";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
    // this.props.deleteStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <h3>Delete a Stream</h3>
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delte this stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

export default connect(null, { fetchStream })(StreamDelete);
