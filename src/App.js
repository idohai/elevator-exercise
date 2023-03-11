import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ElevatorSystem from './components/ElevatorSystem'

import LandingPage from './pages/LandingPage'
import BuildingPage from './pages/BuildingPage'

const router = createBrowserRouter([
  { path: '/', element: <LandingPage/>},
  { path: '/building', element: <BuildingPage />}
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
