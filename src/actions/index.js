// Actions
// 功能如同 controller, 將每個動作自訂一種 type 名稱，
// 其餘參數則自行添增。

//定義products的再呼叫addProduct時的對應代號(type)，以及其傳入的物件(對應檔案路徑./reducers/index.js)
export const addProduct = product => ({
  type: 'ADD_Product',
  payload: product,
});

//定義cars的再呼叫addCar時的對應代號(type)，以及其傳入的物件(對應檔案路徑./reducers/index.js)
export const addCar = cars => {
  return ({
    type: 'ADD_CAR',
    payload: cars,
  });
};

//定義cars的再呼叫removeCar時的對應代號(type)，以及其傳入的物件(對應檔案路徑./reducers/index.js)
export const removeCar = id => ({
  type: 'REMOVE_Car',
  payload: id,
});