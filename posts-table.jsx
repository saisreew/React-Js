import React from "react";

import Input from "./input";

const PostsTable = props => {
  const {
    posts,
    addPost,
    deletePost,

    getpost,
    handleInputField,
    post
  } = props;
  return (
    <div>
      {posts.length > 0 && (
        <div>
          <center>
            <button
              type="submit"
              className="btn btn-info "
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Add
            </button>
          </center>
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Add Data
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
                  <form onSubmit={() => addPost()}>
                    <div className="form-group">
                      <Input
                        inputName="id"
                        value={post.id}
                        type="number"
                        handleInputField={handleInputField}
                        label="EmpID"
                        disabled="true"
                      />
                    </div>

                    <div className="form-group">
                      <Input
                        inputName="title"
                        value={post.title}
                        type="text"
                        handleInputField={handleInputField}
                        label="Title"
                      />
                    </div>

                    <div className="form-group">
                      <Input
                        inputName="body"
                        value={post.body}
                        type="text"
                        handleInputField={handleInputField}
                        label="Body"
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onClick={() => addPost()}
                    >
                      Save
                    </button>
                  </form>
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      <table className="table">
        {posts.length > 0 && (
          <thead>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
            <th>ACTION</th>
          </thead>
        )}
        <tbody>
          {posts.map(p => (
            <tr>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.body}</td>
              <td>
                <button
                  type="submit"
                  className="btn btn-success btn-block"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  onClick={() => getpost(p.id)}
                >
                  UPDATE
                </button>
                <div
                  className="modal fade"
                  id="exampleModalCenter"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">
                          Update Data
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
                        <form>
                          <div className="form-group">
                            <Input
                              inputName="id"
                              value={post.id}
                              type="number"
                              handleInputField={handleInputField}
                              label="EMP ID"
                              disabled="true"
                            />
                          </div>

                          <div className="form-group">
                            <Input
                              inputName="title"
                              value={post.title}
                              type="text"
                              handleInputField={handleInputField}
                              label="Title"
                            />
                          </div>

                          <div className="form-group">
                            <Input
                              inputName="body"
                              value={post.body}
                              type="text"
                              handleInputField={handleInputField}
                              label="Body"
                            />
                          </div>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-dismiss="modal"
                          >
                            Save
                          </button>
                        </form>
                      </div>
                      <div className="modal-footer"></div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <button
                  className="btn btn-block btn-danger"
                  onClick={() => deletePost(p)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;
