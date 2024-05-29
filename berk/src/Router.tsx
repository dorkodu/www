import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

import App from "@/App";
import CenterLoader from "@/components/loaders/CenterLoader";

/**
 * Page: Make any app view a lazy-loaded static page
 * (helper function to wrap any view in suspense)
 */
function Page(name: string) {
  const View = React.lazy(() => import(`./pages/${name}.tsx`));

  return (
    <Suspense fallback={<CenterLoader />}>
      <View />
    </Suspense>
  );
}

// Views & Lazy-loaded
const Home = Page("Home");
const Portfolio = Page("Portfolio");
const NotFound = Page("404");

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={Home} />

      <Route path="/portfolio" element={Portfolio} />

      <Route path="/404" element={NotFound} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Route>
  )
);

export default Router;
