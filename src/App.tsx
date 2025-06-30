import TestContactForm1 from './components/TestContactForm1';
import TestContactForm from './components/TestContactForm';
import AttractiveNameTest7 from './components/AttractiveNameTest7';
import ImageLibraryTest1 from './components/ImageLibraryTest1';
import ImageLibraryTest from './components/ImageLibraryTest';
import ClaudeSonnetTest from './components/ClaudeSonnetTest';
import TestDashboard from './components/TestDashboard';
import ImageIntegrationTest from './components/ImageIntegrationTest';
import ImprovedFluxTest from './components/ImprovedFluxTest';
import FixedFormTest from './components/FixedFormTest';
import SmitheryTest from './components/SmitheryTest';
import SmitheryEcommerce from './components/SmitheryEcommerce';
import FluxSaaSWebsite from './components/FluxSaaSWebsite';
import TabsTestWebsite from './components/TabsTestWebsite';
import AIMarketingprofessional from './components/AIMarketingprofessional';
import ImprovedHybrid from './components/ImprovedHybrid';
import HybridEnhanced from './components/HybridEnhanced';
import EnhancedOriginal from './components/EnhancedOriginal';
import ClaudeStyled from './components/ClaudeStyled';
import FixedCardSaaS from './components/FixedCardSaaS';
import ProfessionalCardSaaS from './components/ProfessionalCardSaaS';
import CardBasedSaaS from './components/CardBasedSaaS';
import ModernSaaSWebsite from './components/ModernSaaSWebsite';
import EnhancedAIMarketing from './components/EnhancedAIMarketing';
import ProfessionalAIMarketing from './components/ProfessionalAIMarketing';
import AIMarketingComplete from './components/AIMarketingComplete';
import SmartMarketing from './components/SmartMarketing';
import MarketingWebsite from './components/MarketingWebsite';
import Marketing from './components/Marketing';
import ProfilePage from './components/ProfilePage';
import Dashboard from './components/Dashboard';
import TestMarketing from './components/TestMarketing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<div className="p-8 text-center"><h1 className="text-2xl">Welcome! Navigate to /dashboard to see your component.</h1></div>} />
          <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/marketing" element={<Marketing />} />
                  <Route path="/marketingwebsite" element={<MarketingWebsite />} />
                  <Route path="/smartmarketing" element={<SmartMarketing />} />
             <Route path="/testmarketing" element={<TestMarketing />} /> 
                  <Route path="/aimarketingcomplete" element={<AIMarketingComplete />} />
                  <Route path="/professionalaimarketing" element={<ProfessionalAIMarketing />} />
                  <Route path="/enhancedaimarketing" element={<EnhancedAIMarketing />} />
                  <Route path="/modernsaaswebsite" element={<ModernSaaSWebsite />} />
                  <Route path="/cardbasedsaas" element={<CardBasedSaaS />} />
                  <Route path="/professionalcardsaas" element={<ProfessionalCardSaaS />} />
                  <Route path="/fixedcardsaas" element={<FixedCardSaaS />} />
                  <Route path="/claudestyled" element={<ClaudeStyled />} />
                  <Route path="/claudestyled" element={<ClaudeStyled />} />
                  <Route path="/enhancedoriginal" element={<EnhancedOriginal />} />
                  <Route path="/hybridenhanced" element={<HybridEnhanced />} />
                  <Route path="/improvedhybrid" element={<ImprovedHybrid />} />
                  <Route path="/improvedhybrid" element={<ImprovedHybrid />} />
                  <Route path="/aimarketingprofessional" element={<AIMarketingprofessional />} />
                  <Route path="/aimarketingprofessional" element={<AIMarketingprofessional />} />
                  <Route path="/tabstestwebsite" element={<TabsTestWebsite />} />
                  <Route path="/fluxsaaswebsite" element={<FluxSaaSWebsite />} />
                  <Route path="/fluxsaaswebsite" element={<FluxSaaSWebsite />} />
                  <Route path="/smitheryecommerce" element={<SmitheryEcommerce />} />
                  <Route path="/smitherytest" element={<SmitheryTest />} />
                  <Route path="/smitherytest" element={<SmitheryTest />} />
                  <Route path="/smitherytest" element={<SmitheryTest />} />
                  <Route path="/fixedformtest" element={<FixedFormTest />} />
                  <Route path="/improvedfluxtest" element={<ImprovedFluxTest />} />
                  <Route path="/imageintegrationtest" element={<ImageIntegrationTest />} />
                  <Route path="/testdashboard" element={<TestDashboard />} />
                  <Route path="/claudesonnettest" element={<ClaudeSonnetTest />} />
                  <Route path="/imagelibrarytest" element={<ImageLibraryTest />} />
                  <Route path="/imagelibrarytest1" element={<ImageLibraryTest1 />} />
                  <Route path="/attractivenametest7" element={<AttractiveNameTest7 />} />
                  <Route path="/testcontactform" element={<TestContactForm />} />
                  <Route path="/testcontactform1" element={<TestContactForm1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
