import { atom } from 'recoil'
import { newArrivalsData, menData, womenData, accessoriesData, beautyData, salesData } from './dummyData'



// —————————————————————————————————————————————————————————————————————————————
// New Arrivals

export const newArrivals_is_active = atom({
  key: "newArrivals_state",
  default: false,
})

export const newArrivals_Data = atom({
  key: "newArrivalsData_state",
  default: newArrivalsData,
})

// —————————————————————————————————————————————————————————————————————————————
// Mens

export const mens_is_active = atom({
  key: "mens_state",
  default: false,
})

export const mens_Data = atom({
  key: "mensData_state",
  default: menData,
})

// —————————————————————————————————————————————————————————————————————————————
// Women

export const women_is_active = atom({
  key: "women_state",
  default: false,
})

export const women_Data = atom({
  key: "womenData_state",
  default: womenData,
})


// —————————————————————————————————————————————————————————————————————————————
// Accessories

export const accessories_is_active = atom({
  key: "accessories_state",
  default: false,
})

export const accessories_Data = atom({
  key: "accessoriesData_state",
  default: accessoriesData,
})


// —————————————————————————————————————————————————————————————————————————————
// Beauty

export const beauty_is_active = atom({
  key: "beauty_state",
  default: false,
})

export const beauty_Data = atom({
  key: "beautyData_state",
  default: beautyData,
})

// —————————————————————————————————————————————————————————————————————————————
// Sale

export const sales_is_active = atom({
  key: "sales_state",
  default: false,
})

export const sales_Data = atom({
  key: "salesData_state",
  default: salesData
})