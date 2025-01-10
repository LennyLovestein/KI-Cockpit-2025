import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./components/home";
import Features from "./components/pages/Features";
import PricingPage from "./components/pages/PricingPage";
import BlogPage from "./components/pages/BlogPage";
import Changelog from "./components/pages/Changelog";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Careers from "./components/pages/Careers";
import Documentation from "./components/pages/Documentation";
import Help from "./components/pages/Help";
import Privacy from "./components/pages/Privacy";
import Terms from "./components/pages/Terms";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/help" element={<Help />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Route>
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
