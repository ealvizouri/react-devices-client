import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import BreadcrumbContainer from './BreadcrumbContainer';

const Breadcrumb = ({ crumbs }) => {
  return <BreadcrumbContainer>
    {crumbs.map(({to , text}) => {
      if (to) return <div key={text}>
        <Link to={to}>{text}</Link>
        <FontAwesomeIcon size="2xs" icon={faAnglesRight} />
      </div>;
      else return <span key={text}>{text}</span>
    })}
  </BreadcrumbContainer>;
}

export default Breadcrumb;