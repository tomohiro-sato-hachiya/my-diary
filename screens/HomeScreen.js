import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const { diaries } = user;

  const addDiary = () => {
    const item = {
      title: null,
      datetime: new Date().toLocaleString(),
      content: null,
    };
    navigation.navigate('Diary', {
      diary: item,
      isNew: true,
      navigation: navigation,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <AddButton onPress={addDiary} />
      <FlatList
        data={diaries}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            datetime={item.datetime}
            onPress={() => {
              navigation.navigate('Diary', {
                diary: item,
                isNew: false,
                navigation: navigation,
              });
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};
