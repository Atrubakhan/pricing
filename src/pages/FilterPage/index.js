import React, { useState } from "react";
import { productsData } from "../../assets/constant";
import "./style.css";

export const FilterPage = () => {
  const [filter, setFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [availableFilter, setAvailableFilter] = useState("All");

  const filteredProducts = productsData.filter((product) => {
    // Filter by name
    if (filter && !product.name.toLowerCase().includes(filter.toLowerCase())) {
      return false;
    }
    // Filter by category
    if (categoryFilter !== "All" && product.category !== categoryFilter) {
      return false;
    }
    // Filter by availability
    if (availableFilter === "Available" && !product.available) {
      return false;
    } else if (availableFilter === "Not Available" && product.available) {
      return false;
    }

    return true;
  });

  return (
    <div className="filter-container">
      <h1>Product List</h1>
      <div className="search-fields">
        <input
          type="text"
          placeholder="Search by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="Home & Kitchen">Home & Kitchen</option>
          <option value="Toys & Games">Toys & Games</option>
        </select>
        <select
          value={availableFilter}
          onChange={(e) => setAvailableFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>
      </div>
      <table className="table-container">
        <thead>
          <tr>
            <th className="table-data">Name</th>
            <th className="table-data">Category</th>
            <th className="table-data">Price</th>
            <th className="table-data">Available</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td className="table-data">{product.name}</td>
              <td className="table-data">{product.category}</td>
              <td className="table-data">${product.price.toFixed(2)}</td>
              <td className="table-data">{product.available ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
