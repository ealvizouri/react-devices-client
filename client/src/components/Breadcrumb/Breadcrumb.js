import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import BreadcrumbContainer from './BreadcrumbContainer';

const Breadcrumb = ({ crumbs }) => {
  return <BreadcrumbContainer>
    {crumbs.map(({to , text}) => {
      if (to) return <>
        <Link to={to}>{text}</Link>
        <FontAwesomeIcon size="2xs" icon={faAnglesRight} />
      </>;
      else return <span>{text}</span>
    })}
  </BreadcrumbContainer>;
}

export default Breadcrumb;