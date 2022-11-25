import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import "./App.css";

function App() {
  return (
    <div className="App">
    <Navigation/> 
      <PublicRoutes/>
      <PrivateRoutes/>
    </div>
  );
}

export default App;
