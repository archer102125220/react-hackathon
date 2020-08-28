const cars = (cars = [], action) => {
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
        (cars.id === action.id)
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

export default cars;