import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  CartButton,
  ProductList,
  ProductDetails,
  CartDetails,
  EmptyCart,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  SubTotalContainer,
  ProductAmount,
  AmountContainer,
  SubTotal,
  TotalContainer,
  TotalText,
  TotalPrice,
  CheckoutButton,
  CheckoutText,
  CartInfo,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );
  const length = useSelector(state => state.cart.length);

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <CartInfo>
        {length ? (
          <CartDetails>
            <ProductList
              data={cart}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <>
                  <ProductDetails>
                    <ProductImage source={{ uri: item.image }} />
                    <ProductInfo>
                      <ProductName>{item.title}</ProductName>
                      <ProductPrice>{item.priceFormatted}</ProductPrice>
                    </ProductInfo>
                    <CartButton
                      onPress={() =>
                        dispatch(CartActions.removeFromCart(item.id))
                      }
                    >
                      <Icon name="delete-forever" size={20} color="#7159c1" />
                    </CartButton>
                  </ProductDetails>

                  <SubTotalContainer>
                    <AmountContainer>
                      <CartButton onPress={() => decrement(item)}>
                        <Icon
                          name="remove-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </CartButton>
                      <ProductAmount value={String(item.amount)} />
                      <CartButton onPress={() => increment(item)}>
                        <Icon
                          name="add-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </CartButton>
                    </AmountContainer>
                    <SubTotal>{item.subTotal}</SubTotal>
                  </SubTotalContainer>
                </>
              )}
            />

            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalPrice>{total}</TotalPrice>
              <CheckoutButton>
                <CheckoutText>PROCEED TO CHECKOUT</CheckoutText>
              </CheckoutButton>
            </TotalContainer>
          </CartDetails>
        ) : (
          <>
            <Icon name="remove-shopping-cart" size={50} color="#EEE" />
            <EmptyCart>Empty Cart</EmptyCart>
          </>
        )}
      </CartInfo>
    </Container>
  );
}
