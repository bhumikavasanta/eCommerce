import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
import './styles.css';
import PageNavigation from "../Header/PageNavigation";
import Images from "./Images";
import { TbTruckDelivery, TbReplace } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import Stars from "./Stars";
import AddToCart from "./AddToCart";

const API = "https://fakestoreapi.com/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    title,
    price,
    description,
    category,
    rating,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
    console.log(rating);
  }, []);

  return (
    <>
      {
        isSingleLoading ? (
          <div className="page_loading">Loading.....</div>
        ) : (
          <section>
            <PageNavigation title={title}/>
            <div className="container">
              <div className="grid grid-two-column">
                <div className="product_images">
                  <Images image={image} />
                </div>
                <div className="product-data">
                  <h2>
                    {title}
                  </h2>
                  <Stars stars={rating?.rate} reviews={rating?.count} />
                  <p className="product-data-price product-data-real-price">
                    $ {price}
                  </p>
                  <p>
                    {description}
                  </p>
                  <div className="product-data-warranty">
                    <div className="product-warranty-data">
                      <TbTruckDelivery className="warranty-icon" />
                      <p>Free Delivery</p>
                    </div>
                    <div className="product-warranty-data">
                      <TbReplace className="warranty-icon" />
                      <p>14 Days Replacement</p>
                    </div>
                    <div className="product-warranty-data">
                      <TbTruckDelivery className="warranty-icon" />
                      <p>Myntra Delivered</p>
                    </div>
                    <div className="product-warranty-data">
                      <MdSecurity className="warranty-icon" />
                      <p>1 Year Warranty</p>
                    </div>
                  </div>
                  {/* <hr /> */}
                  <AddToCart product={singleProduct} />
                </div>
              </div>
            </div>
          </section>
        )
      }
    </>
  );
};

export default SingleProduct;