import React from 'react';
import { Button } from 'react-native';

const UploadButton = ({ onPress }) => {
  return <Button title="更新" color="green" onPress={onPress} />;
};

export default UploadButton;
