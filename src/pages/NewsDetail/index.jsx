import Comments from "../../components/Comments";
import Headermidle from "../../components/HeaderMidle/Headermidle";
import Newest from "../../components/Newest/Newest";
import useDebounce from "../../hooks/useDebounce";
import ContentDetail from "./ContentDetail";
import useNewsDetail from "./useNewsDetail";

const NewsDetail = () => {
  // const { slug } = useNewsDetail();
  const { isLoading, dataNewsDetail, dataNewsRelate, dataFeatured } =
    useNewsDetail();
  // if (!!isLoading) {
  //   console.log("isLoading", isLoading);
  //   return <Loading />;
  // }
  useDebounce(isLoading, 400);
  return (
    <div>
      {/* {dataFeatured && ( */}
      <>
        <Headermidle heading={false} nav={false} />
        <main>
          <ContentDetail {...dataNewsDetail} data={dataNewsRelate} />
          <Comments {...dataNewsDetail} />
          <Newest label="Mới nhất" data={dataFeatured} />
        </main>
      </>
      {/* )} */}
    </div>
  );
};

export default NewsDetail;
