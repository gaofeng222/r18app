const tasksReducer = (draft, action) => {
  switch (action.type) {
    case "added":
      draft.push({
        id: action.id,
        text: action.text,
        completed: false,
      });
      break;
    case "changed":
      const index = draft.findIndex((item) => item.id === action.id);
      draft[index] = action;
      break;
    case "deleted":
      return draft.filter((item) => item.id !== action.id);
    default:
      throw new Error("unknow action type");
  }
};
export default tasksReducer;
