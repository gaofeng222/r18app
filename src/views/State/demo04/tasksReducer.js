export function taskReucers(state = [], action) {
  switch (action.type) {
    case "added":
      return [...state, action.task];
    case "changed":
      return state.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else return task;
      });
    case "deleted":
      return state.filter((task) => task.id !== action.task.id);
    default:
      throw new Error("Action type not found");
  }
}
