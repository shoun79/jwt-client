import { RouterProvider } from 'react-router-dom'

import router from './routes/Routes'
import Spinner from './pages/Shared/Spinner/Spinner';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeProvider';

function App() {
  //const loading = false;
  const { theme, loading } = useContext(ThemeContext);

  return (
    <div className={theme ? 'night' : 'light'}>
      {
        loading ? <Spinner /> : <>
          <RouterProvider router={router}></RouterProvider>
          <Toaster ></Toaster>

        </>
      }
    </div>
  )
}

export default App
