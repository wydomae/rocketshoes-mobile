import styled from 'styled-components/native';

export const ProductList = styled.FlatList`
  flex-direction: row;
  background: #191920;
`;

export const ProductContainer = styled.View`
  background: #fff;
  justify-content: center;
  width: 300px;
  height: 480px;
  border-radius: 4px;
  margin: 10px;
`;

export const ProductImage = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 4px;
`;

export const ProductName = styled.Text`
  margin-top: 20px;
  color: #333333;
  font-size: 16px;
  margin-left: 10px;
`;

export const ProductPrice = styled.Text`
  color: #000;
  font-size: 21px;
  font-weight: bold;
  margin-left: 10px;
`;

export const CartButton = styled.TouchableOpacity`
  background: #7159c1;
  color: #fff;
  flex-direction: row;
  border: 0;
  border-radius: 4px;
  width: 280px;
  align-self: center;
  margin-top: auto;
  margin-bottom: 10px;
`;

export const AddToCart = styled.Text`
  color: #fff;
  flex: 1;
  font-size: 14px;
  padding: 15px;
  text-align: center;
  text-transform: uppercase;
`;

export const CartIconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  padding-left: 15px;
`;

export const CartIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const CartAmount = styled.Text`
  font-size: 14px;
  margin: 0 15px;
  color: #fff;
`;
