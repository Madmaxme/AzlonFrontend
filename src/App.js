import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/ProperLayout/Layout";
import Home from "./components/Pages/Home/Home";

import "./index.css";

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
