import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import Logo from '../../assets/images/logo.svg';

import { Container, Cart, CartCounter } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

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
