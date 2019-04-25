const cars = (state = [], action) => {
    // Reducers
    // 依據 Actions 所定義的 type 進行資料的儲存
    switch (action.type) {
      case 'ADD_CAR':
        return [
          {
            cars: action.cars,
          }
        ]
      case 'REMOVE_CAR':
        return state.map(cars =>
          (cars.id === action.id)
            ? undefined
            : cars
        ).filter(cars => cars !== undefined)
      default:
        return state;
    }
  }
  
  export default cars;