import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Kloudlens from './pages/Kloudlens';
import KloudControl from './pages/KloudControl';
import KloudGuard from './pages/KloudGuard';
import KloudOps from './pages/KloudOps';
import Solutions from './pages/Solutions';
import CapabilitiesPage from './pages/Capabilities';
import Customers from './pages/Customers';
import Company from './pages/Company';
import Resources from './pages/Resources';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/kloudlens" element={<Kloudlens />} />
          <Route path="/kloudcontrol" element={<KloudControl />} />
          <Route path="/kloudguard" element={<KloudGuard />} />
          <Route path="/kloudops" element={<KloudOps />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/company" element={<Company />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/blog/:id" element={<BlogDetail />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
