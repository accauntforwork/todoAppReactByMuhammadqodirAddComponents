import React from "react";

function Category({ category, currentCategory, handleCategoryClick }) {
  return (
    <li
      className={`cursor-pointer ${
        currentCategory === category ? "text-[#EA5959]" : ""
      }`}
      onClick={() => handleCategoryClick(category)}
    >
      {category}
    </li>
  );
}

export default Category;
