import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, filter } = useSelector((state) => state.products);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };


const filteredProducts = products.filter((product)=>
product.name.toLowerCase().includes(filter.toLowerCase())
)

  return (
    <div>
      <input
        type="text"
        placeholder="Filter products"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>{filteredProducts.map((product)=>(
         <li key={product.id}>{product.name}</li>
      ))}
      </ul>
    </div>
  );
};

export default ProductList;
