import React from "react";
import { StateActions } from "./action";
import { initialState, State } from "./state";

export const stateContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<StateActions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});
