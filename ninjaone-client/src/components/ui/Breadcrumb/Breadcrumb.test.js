import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

test('renders Breadcrumb component', () => {
  const crumbs = [
    {
      to: '/',
      text: 'Home'
    },
    {
      to: '/section',
      text: 'Section'
    },
    {
      to: '/section/sub-section',
      text: 'Sub-Section'
    },
    {
      text: 'Current sub-sub-section'
    }
  ];

  const component = renderer.create(<BrowserRouter>
    <Breadcrumb crumbs={crumbs} />
  </BrowserRouter>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
