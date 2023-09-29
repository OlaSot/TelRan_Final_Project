import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../requests/products_req";
import ProductsContainer from "../../components/ProductsContainer";
import s from "./index.module.css";
import SortForm from "../../components/FilterForms/SortForm";
import FilterForm from "../../components/FilterForms/FilterForm";
import DiscountForm from "../../components/FilterForms/DiscountForm";

export default function AllProductsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);

  

  console.log(allProducts);

  return (
    <div className={s.container}>
      <div className={s.sort_container}>
        <FilterForm />
        <DiscountForm />
        <SortForm />
      </div>
      <h1>Name</h1>
      <ProductsContainer products={allProducts} />
    </div>
  );
}


