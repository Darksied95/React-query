import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Homepage from './components/Homepage';
import FetchData from './components/FetchData';
import RQFetchData from './components/RQFetchData';



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
    </QueryClientProvider>
  );
}

export default App;
