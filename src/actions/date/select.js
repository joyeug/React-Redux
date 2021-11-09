export const SELECT_DATE = "SELECT_DATE";

export const selectDate = (payload) => {
  return {
    type: SELECT_DATE,
    payload,
  };
};
