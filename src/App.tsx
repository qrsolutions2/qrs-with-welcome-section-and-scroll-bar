import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import HowItWorks from './components/HowItWorks';
import SectorShowcase from './components/SectorShowcase';
import SubscriptionPlans from './components/SubscriptionPlans';
import Dashboard from './components/Dashboard';
import Extras from './components/Extras';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Welcome />
        <HowItWorks id="how-it-works" />
        <SectorShowcase id="sectors" />
        <SubscriptionPlans id="plans" />
        <Dashboard id="dashboard" />
        <Extras id="extras" />
        <FAQ id="faq" />
        <ContactForm id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default App;