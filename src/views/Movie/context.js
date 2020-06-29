import React from "react";

import { initialValues } from "stores/MoviePage";

export const initialProviderValue = {
  store: initialValues,
  setStore: () => undefined,
};

const Context = React.createContext(initialProviderValue);

export default Context;
