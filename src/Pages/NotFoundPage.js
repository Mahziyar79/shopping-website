import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <div>
        Not Found Pages
        <Link to="/">Back to Home Page</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
