import { useState } from "react";
import { useParams } from "react-router-dom";
import { ListNews } from "../../services/newsServices";
import { useEffect } from "react";
import { usePage } from "../../hooks/useContext";
import { Category } from "../../services/categoriesServices";

const useDetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataListProduct, setDataListProduct] = useState([]);
  const { alias } = useParams();
  const getDataProduct = async () => {
    try {
      setIsLoading(false);
      if (alias) {
        const res = await Category.getCategory(alias);
        const id = res?.data?.result?.id;
        if (id) {
          getListProduct(id);
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
    }
  };

  const getListProduct = async (id) => {
    try {
      const res = await ListNews.getNews(id, "includeChildCate=true");
      setDataListProduct(res?.data?.result);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getDataProduct();
  }, [alias]);

  return { dataListProduct, isLoading };
};

export default useDetailPage;
