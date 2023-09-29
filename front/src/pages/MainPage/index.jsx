import React, { useEffect } from "react";
import s from "./index.module.css";
import CategoriesContainer from "../../components/CategoriesContainer";
import { Link } from "react-router-dom";
import ProductsContainer from "../../components/ProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../requests/products_req";
import FormItem from "../../components/FormItem";

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch]);

  const products = useSelector((state) => state.allProducts);

  const first_four_products = products
    .filter((el) => el.discont_price !== null)
    .slice(0, 4);

    const btn_text = 'GET A DISCOUNT'

  // console.log(first_four_products);
  //пишем логику и передаем пропсом

  return (
    <div>
      <div className={s.sale_container}>
        <div className={s.image_sale_block}>
          <img src="/mainPage/sale_block.png" alt="" className={s.image_sale}/>
          <div className={s.text}>
            <h2>New season</h2>
            <h1>Gardening</h1>
            <Link to={"/sales"} className={s.links}>
              <div className={s.sale_btn}>Sale</div>
            </Link>
          </div>
        </div>
      </div>

      <div className={s.catalog_container}>
        <div className={s.btn_container}>
          <h2 className={s.block_name}>Catalog</h2>
          <Link to="/categories" className={s.category_link}>
            <div className={s.btn_cat}>
              <img src="/mainPage/1x/button.png" alt="" className={s.btn_image}/>
              <p>All categories</p>
            </div>
          </Link>
        </div>
        <CategoriesContainer limit={4} />
      </div>

      <div className={s.dwarf_wrapper}>
        <img src="/mainPage/5_percent.png" alt="" className={s.percent_img}/>
        
        <div className={s.discount_descr}>
          <h1>5% off</h1>
          <h2>on the first order</h2>
          <FormItem text={btn_text} btn_style={'main_page_btn'} input_style={'input_main_page'}/>
        </div>
      </div>

      <div className={s.gen_sale_container}>
        <h1 className={s.block_name}>Sale</h1>
        <div>
          <ProductsContainer
            products={first_four_products}
            productsStyle={true}
          />
        </div>
      </div>
    </div>
  );
}
