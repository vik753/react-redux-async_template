import { useState } from "react";
import { Form, Button, Collapse } from "react-bootstrap";
import { connect } from "react-redux";
import { addSyncPost } from "./../redux/postActions";

const AddForm = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [open, setOpen] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setOpen(true);
      return;
    } else {
      setOpen(false);
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
        <Collapse in={open}>
          <Form.Text
            className={` ${title.trim() ? "text-muted" : "text-danger"} `}
            name="title"
          >
            Title is required.
          </Form.Text>
        </Collapse>
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
