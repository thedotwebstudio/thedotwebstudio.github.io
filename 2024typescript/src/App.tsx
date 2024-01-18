import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Work from "./Pages/Work";
import Studio from "./Pages/Studio";
import Home from "./Pages/Home";
import NoMatch from "./Pages/NoMatch";

function App() {
  return (
    <Routes>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="studio" element={<Studio />} />
        <Route path="work" element={<Work />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;

