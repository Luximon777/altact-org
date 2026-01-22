import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import PresentationSection from "./components/PresentationSection";
import MissionSection from "./components/MissionSection";
import ActionsSection from "./components/ActionsSection";
import GovernanceSection from "./components/GovernanceSection";
import MethodologySection from "./components/MethodologySection";
import ImpactSection from "./components/ImpactSection";
import MembershipSection from "./components/MembershipSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import MentionsLegales from "./components/MentionsLegales";
import PolitiqueConfidentialite from "./components/PolitiqueConfidentialite";
import ProfilMethodologique from "./components/ProfilMethodologique";
import { Toaster } from "./components/ui/sonner";

function HomePage() {
  return React.createElement(React.Fragment, null,
    React.createElement(Navigation, null),
    React.createElement(HeroSection, null),
    React.createElement(PresentationSection, null),
    React.createElement(MissionSection, null),
    React.createElement(ActionsSection, null),
    React.createElement(GovernanceSection, null),
    React.createElement(MethodologySection, null),
    React.createElement(ImpactSection, null),
    React.createElement(MembershipSection, null),
    React.createElement(ContactSection, null),
    React.createElement(Footer, null)
  );
}

function App() {
  return React.createElement(HashRouter, null,
    React.createElement("div", { className: "App" },
      React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(HomePage, null) }),
        React.createElement(Route, { path: "/mentions-legales", element: React.createElement(MentionsLegales, null) }),
        React.createElement(Route, { path: "/confidentialite", element: React.createElement(PolitiqueConfidentialite, null) }),
        React.createElement(Route, { path: "/profil-methodologique", element: React.createElement(ProfilMethodologique, null) })
      ),
      React.createElement(Toaster, null)
    )
  );
}

export default App;
