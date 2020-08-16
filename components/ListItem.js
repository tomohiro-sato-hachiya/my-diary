import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});

const ListItem = ({ title, datetime, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View>
        <Text numberOfLines={2} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>{datetime.toString()}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ListItem;
