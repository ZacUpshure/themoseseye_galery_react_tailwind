import logo from './logo.svg';
import './App.css';
// import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './Pages/Home';
import ImageView from './Pages/ImageView';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image/:id" element={<ImageView />} /> 
          {/* <Route path="/photography" element={<Photography />} />
          <Route path="/videography" element={<Videography />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout/:id" element={<Checkout />} /> */}
          {/* Define more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
