import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

import App from "@/App";
import CenterLoader from "@shared/components/loaders/CenterLoader";

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
const Notes = Page("Notes");
const Note = Page("Note");
const Story = Page("Story");
const NotFound = Page("404");

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={Home} />

      <Route path="/story" element={Story} />
      <Route path="/portfolio" element={Portfolio} />

      <Route path="/notes" element={Notes} />

      <Route
        path="/note/:slug"
        element={Note}
        loader={async ({ params }) => {
          return fetch(`/data/notes/${params.slug}.json`);
        }}
      />

      {/* if note id is NOT specified -> show all notes */}
      <Route path="/note" element={<Navigate to="/notes" />} />

      <Route path="/404" element={NotFound} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Route>
  )
);

export default Router;
