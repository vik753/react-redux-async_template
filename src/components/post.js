import { Card } from "react-bootstrap";

const Post = ({ post }) => {
  return (
    <Card bg="Light" key={post.id} text="dark" className="mb-2">
      <Card.Header>{post.title}</Card.Header>
      <Card.Body>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
