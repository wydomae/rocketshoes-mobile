import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import Logo from '../../assets/images/logo.svg';

import { Container, Cart, CartCounter } from './styles';

function Header({ cartSize, navigation }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Logo source={Logo} width={185} />
      </TouchableOpacity>
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={30} color="#FFF" />
        <CartCounter>{cartSize}</CartCounter>
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
