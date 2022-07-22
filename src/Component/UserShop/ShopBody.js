import React, { Component } from 'react'
import HeaderMain from '../Header'
import './Shop.css'
export class ShopBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header_link:'Walk'
    }
  }
  render() {
    return (
      <div className="home_content">
        <HeaderMain />
        <div className='shop_content'>
          <div className='box_seller'>
            <div className='box_like'>
              <div className='child_box_like'>
                <i class='bx bx-store-alt'></i>
                <h5>Product</h5>
              </div>
              <div className='child_box_like'>
              <i class='bx bx-user-plus'></i>
                <h5>Following</h5>
              </div>
              <div className='child_box_like'>
              <i class='bx bx-message-square-dots'></i>
                <h5>Chat Response Rate</h5>
              </div>
            </div>
            <div className='box_like'>
            <div className='child_box_like'>
            <i class='bx bx-group' ></i>
                <h5>Followers</h5>
              </div>
              <div className='child_box_like'>
              <i class='bx bx-star' ></i>
                <h5>Evaluate</h5>
              </div>
              <div className='child_box_like'>
              <i class='bx bx-user-check' ></i>
                <h5>Participation</h5>
              </div>
            </div>
            <div className='box_user_sell'>
              <div className='ava_shop_on'>
                  <div className='avatar_shop'></div>
                  <div className='name_on_shop'>
                    <h5>Nguyen Thanh An</h5>
                    <p>Online 2 minutes ago</p>
                  </div>
              </div>
              <div className='follow_chat'>
                <div className='fc_box'>
                <i class='bx bx-plus'></i>
                <h5>FOLLOW</h5>
                </div>
                <div className='fc_box'>
                <i class='bx bx-chat' ></i>
                <h5>CHAT</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='header_link_shop'>
            <div className='walk' onClick={() => this.setState({header_link:'walk'})}>
              <h5>Walk</h5>
            </div>
            <div className='walk' onClick={() => this.setState({header_link:'ALL_PRODUCTS'})}>
              <h5>ALL PRODUCTS</h5>
            </div>
            <div className='walk'onClick={() => this.setState({header_link:'T_Shirt'})}>
              <h5>T-Shirt</h5>
            </div>
            <div className='all_product'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShopBody