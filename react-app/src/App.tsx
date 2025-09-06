import './index.css'; // Import global styles
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
// import JobsPage from './pages/JobsPage';
import ExamplesPage from './pages/ExamplesPage';
import CompanyPage from './pages/CompanyPage';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* <Route path="/jobs" element={<JobsPage />} /> */}
          <Route path="/examples" element={<ExamplesPage />} />
          <Route path="/company" element={<CompanyPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;