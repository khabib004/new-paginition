import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Layout from "./components/layout";
import Loading from "./components/loading/Loading";

const HomePage = lazy( () => import( "./pages/HomePage" ) );
const AboutPage = lazy( () => import( "./pages/AboutPage" ) );
const ContactPage = lazy( () => import( "./pages/ContactPage" ) );
const PostsPage = lazy( () => import( "./pages/PostsPage" ) );
const PortfoliosPage = lazy( () => import( "./pages/PortfoliosPage" ) );
const PortfolioPage = lazy( () => import( "./pages/PortfolioPage" ) );
const LifeCyclePage = lazy( () => import( "./pages/LifeCyclePage" ) );
const PostPage = lazy( () => import( "./pages/PostPage" ) );
const Notfound = lazy( () => import( "./pages/Notfound" ) );

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="posts/:postId" element={<PostPage />} />
            <Route path="lifecycle" element={<LifeCyclePage />} />
            <Route path="portfolios">
              <Route index element={<PortfoliosPage />} />
              <Route path=":portfolioId" element={<PortfolioPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
