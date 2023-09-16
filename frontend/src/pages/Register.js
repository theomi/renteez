import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import Card from '../components/Card';

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h2 className="form-title">Register</h2>
      <RegisterForm/>
     
    </div>
  );
}

export default BlogList;