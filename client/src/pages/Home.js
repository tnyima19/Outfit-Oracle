import React, { useState, useEffect } from "react";
import Product from '../components/Product';
import {products} from "../products";


function Home() {
    const [search, setSearch] = useState('');
    const [currProducts, setProducts] = useState(products);

    function inputChangeHandler(event){
        console.log(event.target.value);
        setSearch(event.target.value);
        Filterproducts(event.target.value);
    }


  function Filterproducts(search){
    console.log("searched: ", search);
    if (search === ''){
      let filteredProducts = products;
      setProducts(filteredProducts);
    }else{
    let filteredProducts = currProducts.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    })
    setProducts(filteredProducts);
    console.log(currProducts);
  }
  }

  return (
    <>
    <div className="container-fluid text-center">
      <div className="row justify-content-center">
         {/* <SearchBar  Filterproducts:Filterproducts searchKey:searchKey /> */}
         <input type="text" onChange={inputChangeHandler}></input>
         {/* <button onClick={inputChangeHandler}></button> */}
        <div className="card-group">
        {currProducts.map((entryData) => (
          <div className="col-md-3" key={entryData.id}> 
          <Product {...entryData} key={entryData.id} />
          </div>
        ))}
        
        </div>
      </div>
    </div>
    </>
  );
}
export default Home;
