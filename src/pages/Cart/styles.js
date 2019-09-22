import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
  flex: 1;
  align-items: center;
`;

export const CartInfo = styled.View`
  justify-content: center;
  align-items: center;
  width: 320px;
  background: #fff;
  border-radius: 4px;
  margin: 10px 0;
`;

export const CartDetails = styled.ScrollView``;

export const ProductList = styled.FlatList``;

export const ProductDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px 15px 0 15px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductInfo = styled.View`
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
`;

export const ProductName = styled.Text`
  font-size: 14px;
  max-width: 150px;
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const SubTotalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #eeeeee;
  border-radius: 4px;
  margin: 0 15px 15px 15px;
  padding: 10px;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ProductAmount = styled.TextInput`
  color: #000;
  font-size: 10px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #dddddd;
  width: 40px;
  height: 25px;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0 5px;
`;

export const SubTotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TotalContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TotalText = styled.Text`
  color: #999999;
  font-size: 16px;
`;

export const TotalPrice = styled.Text`
  color: #000;
  font-size: 30px;
  font-weight: bold;
`;

export const CheckoutButton = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  margin: 20px 10px;
  width: 270px;
  padding: 15px;
`;

export const CheckoutText = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
`;

export const EmptyCart = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const CartButton = styled.TouchableOpacity``;
