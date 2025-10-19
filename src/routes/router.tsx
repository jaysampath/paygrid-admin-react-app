import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Dashboard } from '../pages/Dashboard';
import { MasterDistributor } from '../pages/MasterDistributor';
import { SuperDistributor } from '../pages/SuperDistributor';
import { Retailers } from '../pages/Retailers';
import { Transactions } from '../pages/Transactions';
import { Refunds } from '../pages/Refunds';
import { Reports } from '../pages/Reports';
import { Settings } from '../pages/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'master-distributor',
        element: <MasterDistributor />
      },
      {
        path: 'super-distributor',
        element: <SuperDistributor />
      },
      {
        path: 'retailers',
        element: <Retailers />
      },
      {
        path: 'transactions',
        element: <Transactions />
      },
      {
        path: 'refunds',
        element: <Refunds />
      },
      {
        path: 'reports',
        element: <Reports />
      },
      {
        path: 'settings',
        element: <Settings />
      }
    ]
  }
]);