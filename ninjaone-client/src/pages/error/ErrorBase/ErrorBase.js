import { Link } from 'react-router-dom';
import ErrorBaseContainer from './ErrorBaseContainer';

const ErrorBase = ({ code, title }) => <ErrorBaseContainer>
  <h3>{code}</h3>
  <p>{title}</p>
  <Link to={'/'}>Go to Dashboard</Link>
</ErrorBaseContainer>;

export default ErrorBase;