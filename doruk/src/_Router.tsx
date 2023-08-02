import CenterLoader from "@/components/loaders/CenterLoader";
import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "./App";
import { wait } from "./components/hooks";

// Lazy routes \\
const LazyHome = React.lazy(wait(() => import("./pages/index")));
const LazyNotFound = React.lazy(wait(() => import("./pages/404")));
// Lazy routes \\

const Home = (
  <Suspense fallback={<CenterLoader />}>
    <LazyHome />
  </Suspense>
);
const NotFound = (
  <Suspense fallback={<CenterLoader />}>
    <LazyNotFound />
  </Suspense>
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={Home} />

      <Route path="/404" element={NotFound} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Route>
  )
);
