import React from 'react';
import { useParams } from 'react-router';
import Post from './Post';

const PostPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Post id={id} />
    </>
  );
};

export default PostPage;
