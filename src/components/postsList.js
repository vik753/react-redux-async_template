import { Container, Row, Col, Button, Collapse, Form } from "react-bootstrap";
import { connect } from "react-redux";
import Post from "./post";
import { fetchAsyncPosts } from "../redux/postActions";
import SpinnerComponent from "./spinner";

let PostsList = ({ syncPosts, asyncPosts, fetchPosts, spinnerState }) => {
  let syncList = [];
  let asyncList = [];

  const emptyPost = {
    id: "01",
    title: "No posts yet..",
    body: "You should create some posts.",
  };

  if (!syncPosts.length) {
    syncList = [<Post key={emptyPost.id} post={emptyPost} />];
  } else {
    syncList = syncPosts.map((post) => <Post key={post.id} post={post} />);
  }

  if (!asyncPosts.length) {
    asyncList = [<Post key={emptyPost.id} post={emptyPost} />];
  } else {
    asyncList = asyncPosts.map((post) => <Post key={post.id} post={post} />);
  }

  const getPostsClickHandler = (e) => {
    e.preventDefault();
    fetchPosts();
  };

  return (
    <Container>
      <Row className="flex justify-content-center mb-2">
        <Button variant="info" onClick={getPostsClickHandler}>
          Get posts
        </Button>
      </Row>
      <Row>
        <Col>
          <h2>SyncPosts</h2>
          {syncList}
        </Col>
        <Col>
          <h2>AsyncPosts</h2>
          <Collapse in={!spinnerState}>
            <Form.Text>{asyncList}</Form.Text>
          </Collapse>
          <Collapse in={spinnerState} className="text-center">
            <Form.Text>
              <SpinnerComponent />
            </Form.Text>
          </Collapse>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.postState.syncPosts,
    asyncPosts: state.postState.asyncPosts,
    spinnerState: state.alertState.showSpinner,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchAsyncPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
