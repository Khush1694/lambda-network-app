import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Post = props => {
  const { id } = props;
  return (
    <>
      <h3>
        <Link to={`/post/${id}`}>Post {id} tile</Link>
      </h3>
      <h5>2020-08-05, 11:15 PM</h5>
      <p>Post body where someone wrote some text for a post</p>
    </>
  );
};

export default Post;
