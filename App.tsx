import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { PokedexPage } from "./src/pages/PokedexPage/Page";

export default function App() {
  return (
    <NativeBaseProvider>
      <PokedexPage />
    </NativeBaseProvider>
  );
}