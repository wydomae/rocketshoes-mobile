import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartIcon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import {
  ProductList,
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  CartButton,
  AddToCart,
  CartIconContainer,
  CartAmount,
} from './styles';

class Main extends Component {
  static navigationOptions = {
    title: 'Main',
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList
        horizontal
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ProductContainer>
            <ProductImage source={{ uri: item.image }} />
            <ProductName>{item.title}</ProductName>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <CartButton onPress={() => this.handleAddProduct(item.id)}>
              <CartIconContainer>
                <CartIcon name="add-shopping-cart" size={20} color="#FFF" />
                <CartAmount>{amount[item.id] || 0}</CartAmount>
              </CartIconContainer>
              <AddToCart>Add to Cart</AddToCart>
            </CartButton>
          </ProductContainer>
        )}
      />
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
