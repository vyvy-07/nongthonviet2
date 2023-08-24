import { useState } from "react";
import { useParams } from "react-router-dom";
import { ListNews } from "../../services/newsServices";
import { useEffect } from "react";
import { usePage } from "../../hooks/useContext";

const useDetailPage = () => {
  const { listId } = usePage();
  console.log("listId", listId);
  const [dataListDetail, setDataListDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { alias } = useParams();
  const getDataProduct = async () => {
    try {
      setIsLoading(false);
      if (alias && listId) {
        listId?.filter((item) => {
          if (item?.name === alias) {
            getListData(item?.id);
          }
        });

        // const dataProduct = data?.data?.result;
        // console.log("dataProduct", dataProduct);
        // if (dataProduct) {
        //   const newDataProduct = dataProduct?.map(
        //     (item) => item?.category?.categoryAlias === alias
        //   );
        //   console.log("newDataProduct", newDataProduct);
        //   // setDataListDetail(dataProduct);
        // }
      }
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
    }
  };
  const getListData = (id) => {
    const data = ListNews.getListNews(id);
    console.log("data", data);
  };
  useEffect(() => {
    getDataProduct();
  }, [alias]);

  return { dataListDetail };
};

export default useDetailPage;
