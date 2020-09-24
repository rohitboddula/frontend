import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../CSS/shop/ProductDetails.css';

class Productdetails extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      item: null,
      quantity: 1,
      isLoading: false,
      done: false
    };
  }
  componentDidMount() {
    fetch(`http://localhost:5000/api/products/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(json => {
        // setTimeout(() => {
        this.setState({ item: json });
        // }, 3000)
      })
      .catch(err => console.log(err));
  }
  addToCart = () => {
    if (localStorage.user && !localStorage.user.isAdmin) {
      this.setState({ isLoading: true });
      const user = JSON.parse(localStorage.getItem('user'));
      const id = user.id;
      let quantity = parseInt(this.state.quantity);
      console.log(user.cart );
      const sameProduct = user.cart.find(item => item.id == this.state.item.id);
      if (sameProduct) {
        quantity += parseInt(sameProduct.quantity);

        sameProduct.quantity = quantity;
        localStorage.setItem('user', JSON.stringify(user));
      }
      const body = {
        productId: `${this.state.item.id}`,
        quantity: `${quantity}`
      };
      fetch(`http://localhost:5000/api/users/${id}/cart`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
        .then(res => {
          setTimeout(
            () => this.setState({ isLoading: false, done: true }),
            1000
          );
          setTimeout(() => this.setState({ done: false }), 2000);
        })
        .catch(err => console.log(err));
    } else {
      window.location = '/login';
    }
  };

  handleQntChange = e => {
    const value = e.target.value;
    this.setState({ quantity: value });
  };

  render() {
    if (!this.state.item) {
      return <p>Loading...</p>;
    }
    const {
      title,
      desc,
      images,
      price,
      //nutritionFacts,
      stock
    } = this.state.item;
    const imagesArr = images.split(',');
    // const nutFacts = nutritionFacts.split(',');
    return (
      <>
        <main className="product--details">
          <div className="product--details--section">
            <div className="product--details--img--main">
              <img src={imagesArr[0]} alt="" />
            </div>
            <div className="product--details--text">
              <h1 className="product--details--text--title">{title}</h1>
              <h5 className="product--details--text--price">${price}</h5>
              <p className="product--details--description">{desc}</p>
              <span className="product--details--span">QUANTITY:</span>

              <input
                type="number"
                min="1"
                max={stock}
                placeholder="1"
                className="product--details--input"
                onChange={e => this.handleQntChange(e)}
              />

              {this.props.editable ? (
                <Link
                  className="edit--button"
                  to={`/admin/products/${this.props.item.id}/edit`}
                >
                  EDIT
                </Link>
              ) : (
                <button className="addToCart--button" onClick={this.addToCart}>
                  {this.state.isLoading ? (
                    <FontAwesomeIcon icon="spinner" spin />
                  ) : this.state.done ? (
                    <FontAwesomeIcon icon="check" />
                  ) : (
                    'ADD TO CART'
                  )}
                </button>
              )}

              <div className="product--details--text--icons" />
            </div>
          </div>
          
        </main>
      </>
    );
    // })
  }
}

export default Productdetails;
