import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../requests/products_req";
import ProductsContainer from "../../components/ProductsContainer";
import s from './index.module.css'
import FilterForm from "../../components/FilterForms/FilterForm";
import SortForm from "../../components/FilterForms/SortForm";

export default function AllSales() {
  const allProducts = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllProducts), [dispatch]);

  const allSalesProducts = allProducts.filter((el) => el.discont_price);

  // console.log(allSalesProducts);

  return (
    <div>
      <div className={s.sort_container}>
        <FilterForm />
        <SortForm />
      </div>
      <ProductsContainer products={allSalesProducts} productsStyle={true} />
    </div>
  );
}
