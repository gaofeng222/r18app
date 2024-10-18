const tasksReducer = (state, action) => {
  switch (action.type) {
    case "added":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case "changed":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, text: action.text };
        } else {
          return item;
        }
      });
    case "deleted":
      return state.filter((item) => item.id !== action.id);
    default:
      throw new Error("unknow action type");
  }
};
export default tasksReducer;
