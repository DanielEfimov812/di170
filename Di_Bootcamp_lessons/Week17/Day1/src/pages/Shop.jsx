import React from "react";
import { Link, useSearchParams } from "react-router";

const products = [
  { id: 123, name: "iPhone", price: 999 },
  { id: 234, name: "iPad", price: 888 },
];

export default function Shop() {
    const [qurey] = useSearchParams()
    console.log(qurey);
    
    console.log(qurey.get('name'), qurey.get('price'));
    
  return (
    <>
      <h2>Shop</h2>
      {products &&
        products.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <Link to={`/product/${item.id}`}>Buy Now</Link>
            </div>
          );
        })}
    </>
  );
}
