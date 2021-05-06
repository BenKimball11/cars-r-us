const database = {
  paintColor: [
    { id: 1, color: "Silver", price: 500 },
    { id: 2, color: "Midnight Blue", price: 710 },
    { id: 3, color: "Firebrick Red", price: 965 },
    { id: 4, color: "Spring Green", price: 965 },
  ],

  interior: [
    { id: 1, type: "Beige Fabric", price: 500 },
    { id: 2, type: "Charcoal Fabric", price: 710 },
    { id: 3, type: "White Leather", price: 965 },
    { id: 4, type: "Black Leather", price: 965 },
  ],

  technology: [
    { id: 1, package: "Basic Package", price: 500 },
    { id: 2, package: "Navigation Package", price: 710 },
    { id: 3, package: "Visibility Package", price: 965 },
    { id: 4, package: "Ultra Package", price: 965 },
  ],

  wheels: [
    { id: 1, type: "17-inch Pair Radial", price: 500 },
    { id: 2, type: "17-inch Pair Radial Black", price: 710 },
    { id: 3, type: "18-inch Pair Spoke Silver", price: 965 },
    { id: 4, type: "18-inch Pair Spoke Black", price: 965 },
  ],
};



export const getOrders = () => {
    return [...database.orders]
}

export const getPaintColor = () => {
    return [...database.paintColor]
}

export const getTechnology = () => {
    return [...database.technology]
}

export const getWheels = () => {
    return [...database.wheels]
}


export const setPaintColor = (id) => {   
    database.orderBuilder.paintColorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

