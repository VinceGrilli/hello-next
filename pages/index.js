import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-Nextjs" />
      <PostLink id="learn-Nextjs" />
      <PostLink id="deploy-nextjs" />
    </ul>
  </Layout>
);

export default Blog;
