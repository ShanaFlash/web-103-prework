import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShowCreators, {showCreatorsLoader} from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import Header from './components/Header';
import supabase from './client';
import { addCreatorAction } from './pages/AddCreator';
import { viewCreatorLoader } from './pages/ViewCreator';
import { editCreatorAction } from './pages/EditCreator';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      children: [
        {
          path: '/',
          element: <ShowCreators />,
          loader: showCreatorsLoader
        },
        {
          path: '/new',
          element: <AddCreator />,
          action: addCreatorAction
        },
        {
          path: '/:id',
          element: <ViewCreator />,
          loader: viewCreatorLoader
        }
        ,{
          path: '/edit/:id',
          element: <EditCreator />,
          action: editCreatorAction,
          loader: viewCreatorLoader

        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;