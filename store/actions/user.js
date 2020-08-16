export const addDiary = ({ diary }) => {
  return {
    type: 'ADD_DIARY',
    diary,
  };
};

export const updateDiary = ({ diary }) => {
  return {
    type: 'UPDATE_DIARY',
    diary,
  };
};

export const deleteDiary = ({ diary }) => {
  return {
    type: 'DELETE_DIARY',
    diary,
  };
};
