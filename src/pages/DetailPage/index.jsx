import BoxsItem from "../../components/BoxsItem";
import Headermidle from "../../components/HeaderMidle/Headermidle";
import Loading from "../../components/Loading";
import ScBanner from "./ScBanner";
import ScListBlog from "./ScListBlog";
import useDetailPage from "./useDetailPage";

const DetailPage = () => {
  const { dataListProduct, isLoading } = useDetailPage() || {};
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <>
      <Headermidle heading={false} nav={false} />
      <main>
        <ScBanner data={dataListProduct} />
        <ScListBlog data={dataListProduct} />
      </main>
    </>
  );
};

export default DetailPage;
