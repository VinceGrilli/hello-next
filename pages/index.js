import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Another 3rd Post cause whatever" />
    </ul>
  </Layout>
);

export default Blog;
