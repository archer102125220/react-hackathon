export default {

  namespace: 'cars',

  effects: (cars = [], action) => {
    const carsReducers = {
      ADD_CAR: () => {
        return [
          {
            cars: action.payload,
          }
        ];
      },
      REMOVE_CAR: () => {
        return cars.map(cars =>
          (cars.id === action.payload)
            ? undefined
            : cars
        ).filter(cars => cars !== undefined)
      },
      default_function: () => {
        return cars;
      }
    };
    // Reducers
    // 依據 Actions 所定義的 type 進行資料的儲存
    return (carsReducers[action.type] || carsReducers.default_function)();
  }
}

export const reducers = {
  addCar: cars => {
    return ({
      type: 'ADD_CAR',
      payload: cars,
    });
  },
  removeCar: id => ({
    type: 'REMOVE_Car',
    payload: id,
  })
};