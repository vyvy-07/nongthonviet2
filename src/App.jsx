import { Route, Routes } from "react-router-dom";
import { PATH } from "./constants/path";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
const HomePage = lazy(() => import("./pages/HomePage"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Error404 = lazy(() => import("./pages/Error404"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));

function App() {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={PATH.DETAIL_PAGE} element={<DetailPage />} />
          <Route path={PATH.NEWS_DETAIL} element={<NewsDetail />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Suspense>
  );
}

export default App;
