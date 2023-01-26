import React from 'react';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Policy from './pages/Policy/Policy';
import Terms from './pages/Terms/Terms';

const App: React.FC = () => <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />}/>
              </Routes>
              <Routes>
                  <Route path="/terms" element={<Terms />}/>
              </Routes>
              <Routes>
                  <Route path="/policy" element={<Policy />}/>
              </Routes>
            </BrowserRouter>

export default App;
