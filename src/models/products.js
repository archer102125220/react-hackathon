export default {

  namespace: 'products',

  effects: (products = [], action) => {
    const productsReducers = {
      ADD_Product: () => {
        return [
          ...products,
          {
            product: action.payload,
          }
        ];
      },
      default_function: () => {
        return products;
      }
    };
    // Reducers
    // 依據 Actions 所定義的 type 進行資料的儲存
    return (productsReducers[action.type] || productsReducers.default_function)();
  }
}
export const reducers = {
  addProduct: product => {

    return ({
      type: 'ADD_Product',
      payload: product,
    });
  }
};