import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App: React.FC = () => {
   return (
      <div id="root" className="font-medium bg-gray-BBC2C0">
         <Router basename="/portfolio">
            <Routes />
         </Router>
      </div>
   );
};

export default App;
