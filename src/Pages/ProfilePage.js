import { useAuth } from "../Context/AuthProvider";
import Layout from "../Layout/Layout";

const ProfilePage = () => {
  const auth = useAuth();
  return <Layout>{auth ? <p>Profile</p> : <p>Please Login First</p>}</Layout>;
};

export default ProfilePage;
