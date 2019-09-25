import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

export default function Main() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  const dispatch = useDispatch();

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

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
          <CartButton onPress={() => handleAddProduct(item.id)}>
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
