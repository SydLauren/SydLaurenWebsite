import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/breadcrumbs';
import posts from './blogs/posts.json'
import { VERSION } from '../constants';
import blogStyles from './blog.module.scss';

const BlogPost = () => {
  const { postId } = useParams();
  return (
    <section>
      <Breadcrumbs crumbs={[
        {
          to: `/${VERSION}`,
          label: 'Home',
        },
        {
          to: `/${VERSION}/blogs`,
          label: 'Blogs',
        },
      ]}/>
      <div className={blogStyles.blog}>
        <h1>{posts[postId].title}</h1>
        <p dangerouslySetInnerHTML={{ __html: posts[postId].body }} />
      </div>
    </section>
  );
};

export default BlogPost;
