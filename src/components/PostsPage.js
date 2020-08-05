import React from 'react';
import Post from './Post';

const PostsPage = () => {
  const testArr = [0, 1, 2, 3, 4, 5, 6];

  return (
    <>
      {testArr.map((post, i) => (
        <Post key={i} id={i} />
      ))}
    </>
  );
};

export default PostsPage;
