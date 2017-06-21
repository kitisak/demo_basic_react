import React, { Component } from 'react'
import Navigation from './Navigation'
import { getVodkas } from '../apis/MyApi'

class Vodka extends Component {

  constructor() {
    super()
    this.state = { products: [] }
  }

  listOfVodka() {
    getVodkas().then((products) => {
      console.log(products)
      this.setState( { products } )
    })
  }

  componentDidMount() {
    this.listOfVodka()
  }

  render() {

    const { products }  = this.state;

    return (
      <div>
        <Navigation/>
        <h3>All Vodka</h3>
        <hr/>
        <ul>
          { products.map((product, index) => (
              <li key={index}>{ product.strDrink }</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Vodka
