import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, TextInput } from 'react-native';
import UploadButton from '../components/UploadButton';
import DeleteButton from '../components/DeleteButton';
import { useDispatch } from 'react-redux';
import { addDiary, updateDiary, deleteDiary } from '../store/actions/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default DiaryScreen = ({ route }) => {
  const { diary, isNew, navigation } = route.params;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const action = isNew ? addDiary : updateDiary;

  useEffect(() => {
    setTitle(diary.title);
    setContent(diary.content);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        defaultValue={diary.title}
        editable
        placeholder="タイトル"
        onChangeText={setTitle}
      ></TextInput>
      <TextInput
        defaultValue={diary.content}
        multiline
        editable
        placeholder="内容"
        onChangeText={setContent}
      ></TextInput>
      <UploadButton
        onPress={() => {
          const item = {
            title: title,
            datetime: diary.datetime,
            content: content,
          };
          dispatch(action({ diary: item }));
          navigation.navigate('Home');
        }}
      />
      <DeleteButton
        onPress={() => {
          dispatch(deleteDiary({ diary: diary }));
          navigation.navigate('Home');
        }}
      />
    </SafeAreaView>
  );
};
