import React from 'react';
import { Button } from 'react-native';

const AddButton = ({ onPress }) => {
  return <Button title="追加" color="green" onPress={onPress} />;
};

export default AddButton;
