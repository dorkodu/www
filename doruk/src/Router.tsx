import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

import App from "@/App";
import CenterLoader from "@shared/components/loaders/CenterLoader";
import { wait } from "@shared/components/hooks";

function Page(View: React.LazyExoticComponent<() => JSX.Element>) {
  return (
    <Suspense fallback={<CenterLoader />}>
      <View />
    </Suspense>
  );
}

// Views & Lazy-loaded
const Home = React.lazy(wait(() => import("./pages/Home")));
const Story = React.lazy(wait(() => import("./pages/Story")));
const NotFound = React.lazy(wait(() => import("./pages/404")));

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={Page(Home)} />
      <Route path="/story" element={Page(Story)} />

      <Route path="/404" element={Page(NotFound)} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Route>
  )
);

export default Router;
