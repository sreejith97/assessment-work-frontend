import { ActionTypes } from "../contants/action-types";

const initialState = {
  employees: [],
};

export const setEmployeesReducers = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_EMPLOYEES:
      return { employees: payload };
    default:
      return state;
  }
};
