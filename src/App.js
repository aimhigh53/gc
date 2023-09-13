import React from "react";
import "./App.css";

import Main from "./views/Main/index";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Frame from "./views/Main/test";
import NavBar from "./components/navBar/NavBar";

const queryClient = new QueryClient();

function App() {
  return (
    // Recoil root for state management
    <RecoilRoot>
      {/* Query client provider for react-query */}
      <QueryClientProvider client={queryClient}>
        {/* Router for handling routing */}
        <HashRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Main />} />
            {/*<Route path="/community" element={<Home />} />*/}
            {/*<Route path="/teams" element={<Home />} />*/}
            {/*<Route path="/hispeople" element={<Home />} />*/}
            {/*<Route path="/gchome" element={<Home />} />*/}

            {/* Add other routes here */}
          </Routes>
        </HashRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
