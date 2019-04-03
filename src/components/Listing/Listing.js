import React, { Component } from 'react'
import "../Listing/Listing.css"

class Listing extends Component {
  state = {
    isFavorite: false
  }

  addToFavoriteListings = () => {
    this.setState({
      isFavorite: true
    })
  }

  render() {
    const { listing } = this.props
    const { isFavorite } = this.state

    const favoriteIcon = isFavorite ? "fas fa-heart" : "far fa-heart"

    return (
      <div className="listing">
        <img className="listing__image" src={listing.image} alt={listing.address} />
        <div className="listing__content">
          <h2 className="listing__address">{listing.address}</h2>
          <div>
            <span className="listing__feature"><i className="fas fa-bed listing__feature-icon"></i>{listing.rooms}</span>
            <span className="listing__feature"><i className="fas fa-bath listing__feature-icon"></i>{listing.baths}</span>
            <span className="listing__feature"><i className="far fa-square listing__feature-icon"></i>{listing.floorSpace} ft</span>
          </div>
          <p className="listing__location">{listing.city}</p>
          <div className="listing__price-wrapper">
            <p className="listing__price">${listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            <button className="listing__favorite-btn" onClick={this.addToFavoriteListings} disabled={isFavorite} ><i className={favoriteIcon}></i></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Listing
