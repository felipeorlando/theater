import React from "react";

import { initialValues } from "stores/HomePage";

export const initialProviderValue = {
  store: initialValues,
  setStore: () => undefined,
};

const Context = React.createContext(initialProviderValue);

export default Context;
