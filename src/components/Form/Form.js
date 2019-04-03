import React, { Component } from 'react'

import { connect } from "react-redux"
import {
  // handleAddressListings,
  handleHomeTypeListings
} from '../../actions/listingsAction';

import "./Form.css"

class Form extends Component {

  render() {
    const {
      // address,
      listings,
      homeType
    } = this.props.listings

    const homeTypes = Array.from(new Set(listings.map(l => l.homeType)))
    const homeTypeOption = homeTypes.map((type, i) => (<option key={i} value={type}>{type}</option>))

    return (
      <form>
        <select name="city" value={homeType} onChange={(e) => this.props.handleHomeTypeListings(e.target.value)}>
          <option value="">Home Type</option>
          {homeTypeOption}
        </select>
        {/* <input name="address" type="text" value={address} onChange={(e) => this.props.handleAddressListings(e.target.value)} placeholder="Street Address..." /> */}
        {/* <button>Search</button> */}
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    listings: state.listings,
  }
}

export default connect(mapStateToProps, {
  // handleAddressListings,
  handleHomeTypeListings
})(Form)
