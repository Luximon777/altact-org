import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import ActionsSection from "./components/ActionsSection";
import GovernanceSection from "./components/GovernanceSection";
import MethodologySection from "./components/MethodologySection";
import ImpactSection from "./components/ImpactSection";
import MembershipSection from "./components/MembershipSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ActionsSection />
      <GovernanceSection />
      <MethodologySection />
      <ImpactSection />
      <MembershipSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
