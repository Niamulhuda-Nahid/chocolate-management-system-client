import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddChocolate from './components/AddChocolate.jsx';
import UpdateChocolate from './components/UpdateChocolate.jsx';
import DropdownTest from './components/DropdownTest.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch(`http://localhost:5000/chocolates`)
  },
  {
    path: '/chocolates',
    element: <AddChocolate></AddChocolate>
  },
  {
    path: '/chocolates/:id',
    element: <UpdateChocolate></UpdateChocolate>,
    loader: ({ params }) => fetch(`http://localhost:5000/chocolates/${params.id}`)
  },
  {
    path: '/dropdown',
    element: <DropdownTest/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
