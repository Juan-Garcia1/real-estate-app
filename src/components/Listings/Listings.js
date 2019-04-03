import React, { Component } from 'react'
import { connect } from "react-redux";
import Listing from "../Listing/Listing"

import "./Listings.css"

class Listings extends Component {
  render() {
    const { filter } = this.props.listings

    return (
      <div className="listings">
        {
          filter.map(listing => <Listing key={listing.id} listing={listing} />)
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listings: state.listings,
  }
}

export default connect(mapStateToProps)(Listings);
