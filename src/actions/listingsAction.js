import {
  GET_LISTINGS,
  // HANDLE_ADDRESS_LISTINGS,
  HANDLE_HOME_TYPE_LISTINGS
} from "./types"

export const getListings = () => {
  return {
    type: GET_LISTINGS
  }
}

// export const handleAddressListings = (address) => {
//   return {
//     type: HANDLE_ADDRESS_LISTINGS,
//     address
//   }
// }

export const handleHomeTypeListings = (homeType) => {
  return {
    type: HANDLE_HOME_TYPE_LISTINGS,
    homeType
  }
}