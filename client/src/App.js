import React, { Suspense, lazy } from 'react';
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/Home/Home.js';
import { NavBar } from './components/NavBar/NavBar';
// import Auth from './components/Auth/Auth.js';

const Home = lazy(() => import('./components/Home/Home.js'));
const Auth =lazy(() => import('./components/Auth/Auth.js'));
function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/auth" exact element={<Auth />} />
          </Routes>
        </Suspense>
      </Container>
    </BrowserRouter>
  );
}

export default App;