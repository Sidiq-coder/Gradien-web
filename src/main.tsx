
  import { createRoot } from "react-dom/client";
  import { StrictMode } from "react";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import App from "./App";
  import { ArticlesPage } from "./pages/Articles";
  import { ShopPage } from "./pages/Shop";
  import "./index.css";

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
  