import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="spfx-landing-container">
      <header className="hero-section">
        <h1 className="hero-title">Your AI-Powered SharePoint Webpart Studio</h1>
        <p className="hero-description">Unlock the future of SharePoint development with our cutting-edge SPFx template. Simply describe your desired webpart to this AI, and watch it come to life with intelligent code generation, ready for instant deployment.</p>
      </header>

      <section className="features-section">
        <div className="feature-card">
          <h3 className="card-title">Ready-to-Use SPFx Template</h3>
          <p className="card-description">Jumpstart your projects with a pre-configured SharePoint Framework template, designed for seamless integration and performance.</p>
        </div>
        <div className="feature-card">
          <h3 className="card-title">AI-Driven Webpart Generation</h3>
          <p className="card-description">Simply describe your desired webpart to this AI, and watch it come to life with intelligent code generation.</p>
        </div>
        <div className="feature-card">
          <h3 className="card-title">Prompt-Based Development</h3>
          <p className="card-description">No more manual coding. Generate complex SharePoint webparts effortlessly, just by providing clear, concise prompts.</p>
        </div>
        <div className="feature-card">
          <h3 className="card-title">Seamless .sppkg Deployment</h3>
          <p className="card-description">Once your webpart is perfected, easily generate the .sppkg file for quick and secure deployment to your SharePoint environment.</p>
        </div>
      </section>

      <section className="call-to-action-section">
        <h2 className="cta-heading">Ready to Transform Your SharePoint Experience?</h2>
        <p className="cta-description">Engage with me now by providing your prompts to begin crafting your next powerful SharePoint webpart. No manual coding required.</p>
      </section>
    </div>
  );
};

export default App;
