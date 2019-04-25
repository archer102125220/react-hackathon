const products = (state = [], action) => {
  // Reducers
  // 依據 Actions 所定義的 type 進行資料的儲存
  switch (action.type) {
    case 'ADD_Product':
      return [
        ...state,
        {
          product: action.product,
        }
      ]
    default:
      return state;
  }
}

export default products;