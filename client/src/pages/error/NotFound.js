import { Link } from 'react-router-dom';

const NotFound = () => <div>
  <h3>404</h3>
  <p>Not Found</p>
  <Link to={'/'}>Return to Dashboard</Link>
</div>;

export default NotFound;