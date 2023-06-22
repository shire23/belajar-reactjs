import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getDetailProduct } from "../services/product.service";

const DetailProductPage = () => {
  const { id } = useParams();
  const { product, setProduct } = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  console.log(product);
  return (
    <div>
      <div> Detail Product : {id}</div>
    </div>
  );
};

export default DetailProductPage;
