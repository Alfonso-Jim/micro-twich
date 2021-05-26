import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    <div>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </div>
  );

  return (
    <div>
      <h3>Delete a Stream</h3>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delte this stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
