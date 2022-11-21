import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import BreadcrumbContainer from './BreadcrumbContainer';

const Breadcrumb = ({ crumbs }) => {
  return <BreadcrumbContainer>
    {crumbs.map(({to , text}, index) => {
      return <div key={text}>
        {index > 0 ? <FontAwesomeIcon size="2xs" icon={faAnglesRight} /> : null}
        {to ? <Link to={to}>{text}</Link> : <span>{text}</span>}
      </div>;
    })}
  </BreadcrumbContainer>;
}

Breadcrumb.propTypes = {
  crumbs: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string,
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  })),
};

export default Breadcrumb;