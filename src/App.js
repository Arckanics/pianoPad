import './App.css';
import Layout from 'components/UI/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'components/Home';
import About from 'components/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
