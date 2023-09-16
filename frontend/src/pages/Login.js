import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Card from '../components/Card';

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h2 className="form-title">Login to your account</h2>
      <LoginForm/>
     
    </div>
  );
}

export default BlogList;