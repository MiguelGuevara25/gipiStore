import React from "react";
import CardProduct from "./CardProduct";
import { conjuntosDB } from "@/data/conjuntos/conjuntosDB";

const Products = () => {
  return (
    <div class="p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {conjuntosDB.map((conjunto) => (
          <CardProduct key={conjunto.id} conjunto={conjunto} />
        ))}
      </div>
    </div>
  );
};

export default Products;
