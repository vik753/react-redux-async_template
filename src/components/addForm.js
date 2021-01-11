import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addSyncPost } from "./../redux/postActions";

const AddForm = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return;
    }
    const post = { title, body };
    addPost(post);
    setTitle(() => "");
    setBody(() => "");
  };

  const titleInputHandler = (e) => {
    e.preventDefault();
    setTitle(() => e.target.value.trim());
  };

  const bodyInputHandler = (e) => {
    e.preventDefault();
    setBody(() => e.target.value.trim());
  };

  return (
    <Form className="mt-3" onSubmit={formSubmitHandler}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onInput={titleInputHandler}
        />
        <Form.Text
          className={` ${title.trim() ? "text-muted" : "text-danger"} `}
          name="title"
        >
          Title is required.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Body text</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter body text"
          value={body}
          onInput={bodyInputHandler}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (payload) => dispatch(addSyncPost(payload)),
  };
};

export default connect(null, mapDispatchToProps)(AddForm);
