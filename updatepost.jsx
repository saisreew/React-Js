import React from "react";
import Input from "./input";

const UpdatePost = props => {
  const { post, updatePost } = props;
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Post Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={updatePost} className="w-75 mx-auto  pt-0">
                {/*
                <Input
                  inputName="userId"
                  value={post.userId}
                  type="number"
                  handleInputField={props.handleInputField}
                  label="UserId"
                  disabled="true"
                  />*/}

                <Input
                  inputName="id"
                  value={props.id}
                  type="number"
                  handleInputField={props.handleInputField}
                  label="Id"
                  disabled="true"
                />
                <Input
                  inputName="title"
                  value={props.title}
                  type="text"
                  handleInputField={props.handleInputField}
                  label="Title"
                />
                <Input
                  inputName="body"
                  value={props.body}
                  type="text"
                  handleInputField={props.handleInputField}
                  label="Body"
                />

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit "
                    data-dismiss="modal"
                    className="btn btn-primary"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
