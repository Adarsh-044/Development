// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { Link } from "react-router-dom";

// const App = () => {
//   return (
//     <StrictMode>
//       <div>
//         <h1>Adopt Me!</h1>
//         <SearchParams />
//       </div>
//     </StrictMode>
//   );
// };

// -----------------------------------------------------

// npm install react-router-dom@6.4.1
// It is used to render between 2 files.
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

// ----------------------------------------------
// npm install @tanstack/react-query@4.10.1
// It is used for the caching layer for async data stores

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {/* It would wrap our app with the provider necessary to power react-query and use caching layer */}
        <header>
          <Link>Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
