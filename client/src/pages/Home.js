import React, { useState, useEffect } from "react";
import Card from '../components/Card';
import {products} from "../products";

function Home() {
  return (
    <>
    <div className="container-fluid text-center">
      <div className="row justify-content-center">
        <div class="card-group">
        {products.map((entryData) => (
          <Card {...entryData} key={entryData.id} />
        ))}
        </div>
      </div>
    </div>
    </>
  );
}
export default Home;
