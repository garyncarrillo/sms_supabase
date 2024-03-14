import { BrowserRouter } from 'react-router-dom';
import  { MyRoutes } from "./routers/routes";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
