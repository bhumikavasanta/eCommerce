import React from 'react';
import './styles.css';

const FilterSection = () => {
  return (
    <section className='filter-section'>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name='text'
            // value={text}
            // onChange={updateFilterValue}
          />
        </form>
      </div>
    </section>
  )
}

export default FilterSection
