import React from "react";
import "./App.css";

import Home from "./views/home";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();
function App() {
  return (
    // Recoil root for state management
    <RecoilRoot>
      {/* Query client provider for react-query */}
      <QueryClientProvider client={queryClient}>
        {/* Router for handling routing */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<Home />} />
            <Route path="/teams" element={<Home />} />
            <Route path="/hispeople" element={<Home />} />
            <Route path="/gchome" element={<Home />} />

            {/* Add other routes here */}
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
