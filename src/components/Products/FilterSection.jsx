import React from 'react';
import './styles.css';
import { useFilterContext } from '../context/FilterContext';
// import { FaCheck } from 'react-icons/fa';

const FilterSection = () => {

  const { 
    updateFilterValue,
    filters: { text, category, maxPrice, minPrice, price },
    all_products,
    clearFilters,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    newVal = ["all", ...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueData(all_products, "category");
  
  return (
    <section className='filter-section'>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name='text'
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {
            categoryOnlyData.map((curElem, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={curElem}
                  onClick={updateFilterValue}
                  className={curElem === category ? "active" : ""}
                >
                  {curElem}
                </button>)
            })
          }
        </div>
      </div>
      <div className="filter_price">
        <h3>Price</h3>
        <p>${price}</p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>
      <div className="filter-clear">
        <button className='btn' onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </section>
  )
}

export default FilterSection
