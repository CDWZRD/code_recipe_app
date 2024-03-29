import CatBasedPost from "./components/categoryList/CatBasedPost";
import DetailsPage from "./components/detailsPage/DetailsPage";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <>
          <NavBar />
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/details/:slug" element={<DetailsPage />} />
                  <Route path="/category/:id" element={<CatBasedPost />} />
              </Routes>
          </BrowserRouter>
          <Footer />
      </>
  );
}

export default App;
