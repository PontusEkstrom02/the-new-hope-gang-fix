import React from 'react'
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import Notfound from './pages/Notfound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
  </>
  );
}

export default App;
