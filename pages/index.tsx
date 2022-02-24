import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <div className="flex">
        {posts.map((post) => (
          <div key={post.title} className="card w-1/4 m-2">
            <figure>
              <img src="https://picsum.photos/id/1005/400/250" />
            </figure>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <div className="card-body m-0 px-0">
                <h2 className="card-title">{post.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title', 'tags']);

  return {
    props: { posts },
  };
};

export default Index;
