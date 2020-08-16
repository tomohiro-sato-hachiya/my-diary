const initialState = {
  diaries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DIARY':
      return {
        ...state,
        diaries: [...state.diaries, action.diary],
      };
    case 'UPDATE_DIARY':
      let diaries = [];
      for (let oldDiary of state.diaries) {
        if (oldDiary.datetime === action.diary.datetime) {
          diaries.push(action.diary);
        } else {
          diaries.push(oldDiary);
        }
      }
      return {
        ...state,
        diaries: diaries,
      };
    case 'DELETE_DIARY':
      return {
        ...state,
        diaries: state.diaries.filter(
          (diary) => diary.datetime !== action.diary.datetime
        ),
      };
    default:
      return state;
  }
};

export default reducer;
