import React from "react";
import "../../css/allproducts.css";
import edibleoils from "../../data/grocery/edibleoils-data.json";
import Navigation from "./../Homepage-components/Navigation";
import Product from "./../Product";
function Edibleoils() {
  function createproduct(product) {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 eachproduct">
        <Product
          key={product.id}
          image={product.image}
          productName={product.productName}
          quantity={product.quantity}
          price={product.price}
        />
      </div>
    );
  }
  return (
    <div className="allprod">
      <Navigation />
      <h1 style={{ marginTop: "1rem" }}>Edible oils</h1>
      <div className="row">{edibleoils.map(createproduct)}</div>
    </div>
  );
}

export default Edibleoils;