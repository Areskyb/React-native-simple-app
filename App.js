import React, { useMemo, useState } from "react";
import { Context } from "./components/Context";
import AppNavigator from "./navigator/AppNavigator";

export default function App() {
  const [context, setContext] = useState(false);
  const providerValue = useMemo(() => ({ context, setContext }), [
    context,
    setContext
  ]);

  return (
    <Context.Provider value={providerValue}>
      <AppNavigator />
    </Context.Provider>
  );
}
