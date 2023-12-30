const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
  
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
        //   filters: { ...state.filters, maxPrice, price: maxPrice },
        };
  
      case "SET_GRID_VIEW":
        return {
          ...state,
          grid_view: true,
        };
  
      case "SET_LIST_VIEW":
        return {
          ...state,
          grid_view: false,
        };

      case "GET_SORT_VALUE":
        return {
          ...state,
          sorting_value: action.payload,
        };

      case "SORTING_PRODUCTS":
        let newSortData;
        let tempSortProduct = [...action.payload];
        if(state.sorting_value === "a-z") {
          newSortData = tempSortProduct.sort((a,b) =>
            a.title.localeCompare(b.title)
          );
        }
        if(state.sorting_value === "z-a") {
          newSortData = tempSortProduct.sort((a,b) =>
            b.title.localeCompare(a.title)
          );
        }
        if(state.sorting_value === "lowest") {
          const sortingProducts = (a,b) => {
            return a.price - b.price;
          }
          newSortData = tempSortProduct.sort(sortingProducts);
        }
        if(state.sorting_value === "highest") {
          const sortingProducts = (a,b) => {
            return b.price - a.price;
          }
          newSortData = tempSortProduct.sort(sortingProducts);
        }

        return {
          ...state,
          filter_products: newSortData,
        }
  
      default:
        return state;
    }
  };
  
  export default filterReducer;