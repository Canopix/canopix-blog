import React from "react"

const Sidebar = ({ categories }) => {
  return (
    <div className="text-white w-1/3 mt-4">
      <h4>Categories</h4>
      {categories.map(cat => (
        <h5 className="m-1">
          <a className="text-yellow-500 Nunito-200" href={`/category/${cat}`}>{cat}</a>
        </h5>
      ))}
    </div>
  )
}

export default Sidebar
