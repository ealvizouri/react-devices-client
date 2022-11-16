import { createBrowserRouter } from 'react-router-dom';
import DevicesPage from '../pages/device/Devices';
import DeviceCreatePage from '../pages/device/DeviceCreate';
import DeviceUpdatePage from '../pages/device/DeviceUpdate';
import NotFoundPage from '../pages/error/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DevicesPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/device',
    element: <DeviceCreatePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/device/:id',
    element: <DeviceUpdatePage />,
    errorElement: <NotFoundPage />
  },
]);

export default router;