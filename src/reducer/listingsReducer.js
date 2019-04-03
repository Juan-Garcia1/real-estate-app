import {
  GET_LISTINGS,
  // HANDLE_ADDRESS_LISTINGS,
  HANDLE_HOME_TYPE_LISTINGS
} from "../actions/types"
import listings from "../data/listingsData"

const initialState = {
  listings,
  filter: listings,
  // address: "",
  homeType: ""
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LISTINGS:
      return {
        ...state,
      }
    // case HANDLE_ADDRESS_LISTINGS:
    //   const { address } = action
    //   return {
    //     ...state,
    //     address,
    //     filter: state.listings.filter(l => l.address.toLowerCase().includes(address.toLowerCase()))
    //   }
    case HANDLE_HOME_TYPE_LISTINGS:
      const { homeType } = action
      return {
        ...state,
        homeType,
        filter: state.listings.filter(l => l.homeType.toLowerCase().includes(homeType.toLowerCase()))
      }
    default:
      return state
  }
}