import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #141419;
  height: 70px;
  padding: 0 20px;
`;

export const Cart = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
`;

export const CartCounter = styled.Text`
  width: 20px;
  height: 20px;
  background: #7159c1;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  margin: -5px 0 0 -10px;
`;
