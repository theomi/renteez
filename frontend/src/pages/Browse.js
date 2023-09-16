import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import Card from '../components/Card';

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h2 className="title-second">Search for an offer</h2>
      <SearchForm />
      <hr />
      <h2 className="title-second">Latest offers</h2>
      <div className="offers">

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  );
}

export default BlogList;