import React from 'react';
import { Button } from 'react-native';

const DeleteButton = ({ onPress }) => {
  return <Button title="削除" color="red" onPress={onPress} />;
};

export default DeleteButton;
