import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { useLoading } from "./hooks/useLoading";
import LoadingScreen from "./components/loading/LoadingScreen";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import HomePage from "./pages/home/HomePage";
import GalleryPage from "./pages/gallery/GalleryPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ContactPage from "./pages/contact/ContactPage";
import CertificationsPage from "./pages/certifications/CertificationsPage";


const App: React.FC = () => {
  const loading = useLoading(1200);

  return (
    <ThemeProvider>
      {loading ? (
        <LoadingScreen />
      ) : (
        <BrowserRouter>
          <Header />
          <main>
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/gallery" element={<GalleryPage />} />
  <Route path="/projects" element={<ProjectsPage />} />
  <Route path="/certifications" element={<CertificationsPage />} />
  <Route path="/contact" element={<ContactPage />} />
</Routes>
          </main>
          <Footer />
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
};

export default App;
