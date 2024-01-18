import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import Loader from "./components/Loader";
import Layout from "./components/Layout";
import Work from "./Pages/Work";
import Studio from "./Pages/Studio";
import Home from "./Pages/Home";
import NoMatch from "./Pages/NoMatch";
import Websites from './Pages/Websites';
import ServicesTemplate from "./Pages/templates/ServicesTemplate";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader" className="loading-container">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <Routes>
          {/* Routes nest inside one another. Nested route paths build upon
      parent route paths, and nested route elements render inside
      parent route elements. See the note about <Outlet> below. */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="studio" element={<Studio />} />
            <Route path="work" element={<Work />} />
            <Route path="website" element={<ServicesTemplate />} />
            <Route path="web-application" element={<ServicesTemplate />} />
            <Route path="design-branding" element={<ServicesTemplate />} />
            <Route path="social-networks" element={<ServicesTemplate />} />

            {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      )}
    </AnimatePresence>
  );
}

export default App;
