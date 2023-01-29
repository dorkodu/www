import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import App from "./App";

//? Layouts
const WebsiteLayout = React.lazy(() => import("./layouts/WebsiteLayout"));

//? Pages
const Index = React.lazy(() => import("./pages/Index"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const About = React.lazy(() => import("./pages/About"));
const Work = React.lazy(() => import("./pages/Work"));

const Terms = React.lazy(() => import("./pages/Resources/Terms"));
const Privacy = React.lazy(() => import("./pages/Resources/Privacy"));
const Cookies = React.lazy(() => import("./pages/Resources/Cookies"));

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Default Layout */}
          <Route path="/" element={<WebsiteLayout />}>
            {/* Pages */}
            <Route index path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />

            {/* Resources */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />

            <Route path="/404" element={<NotFound />} />
          </Route>

          {/* Error routes & catch all */}
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
