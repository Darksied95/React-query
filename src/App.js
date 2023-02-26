import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import FetchData from './components/FetchData';
import RQFetchData from './components/RQFetchData';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'



const queryClient = new QueryClient()
function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <div className="App">
        <nav>
          <ul>
            <Link to={'/'}>
              <li>
                Homepage
              </li>
            </Link>
            <Link to={'/fetchdata'}>
              <li>
                FetchData
              </li>
            </Link>
            <Link to={'/rqfetchdata'}>
              <li>
                RQFetchData
              </li>
            </Link>
          </ul>
        </nav>
        <div className='main'>
          <Routes>
            <Route path='fetchdata' element={<FetchData />} />
            <Route path='rqfetchdata' element={<RQFetchData />} />
            <Route path='*' element={<Homepage />} />
          </Routes>
        </div>
      </div>
      <ReactQueryDevtools position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
