const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type);
  console.log("Prev", store.getState());
  console.log("Action", action);
  next(action);
  console.log("Next", store.getState());
  console.groupEnd();
};
export default loggerMiddleware;
