import { useState, useEffect } from "react";

function Card() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching products:", error));
    // console.log(data)
  }, []);
  console.log(product);
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      {product.map((item) => (
        <div
          key={item.id}
          className="w-48 bg-white border border-gray-100 rounded-xl overflow-hidden"
        >
          <div className="bg-gray-50 h-36 flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="h-20 object-contain"
            />
          </div>

          <div className="p-3">
            <p className="text-sm font-semibold text-gray-900 mb-1 truncate">
              {item.title}
            </p>
            <p className="text-xs text-gray-400 mb-3 truncate">
              {item.category}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900">
                ${item.price}
              </span>
              <button className="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-md hover:opacity-80 transition-opacity">
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
