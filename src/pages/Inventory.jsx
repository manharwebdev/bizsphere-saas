import { useState } from 'react'; // <--- 1. Import this
import Table from "../components/common/Table";
import { Trash2, Edit } from 'lucide-react'; // Import icons

const Inventory = () => {
  // 2. Wrap the data in useState
  // 'products' is the current list.
  // 'setProducts' is the function we use to update it.
  const [products, setProducts] = useState([
    { id: 1, name: "Macbook Pro 16", category: "Electronics", price: 2399, stock: 12 },
    { id: 2, name: "Logitech MX Master", category: "Accessories", price: 99, stock: 45 },
    { id: 3, name: "Dell Monitor 4K", category: "Electronics", price: 450, stock: 0 },
    { id: 4, name: "Ergo Chair", category: "Furniture", price: 899, stock: 5 },
  ]);

  const tableHeaders = ["Product Name", "Category", "Price", "Stock Status", "Action"];

  // ... rest of the code