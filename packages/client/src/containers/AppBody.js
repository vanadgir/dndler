import React from "react";
import { Routes, Route } from "react-router-dom";
import CharacterHistoryLayout from "./layouts/CharacterHistoryLayout";
import CustomOptionsPage from "./CustomOptions";
import CharacterSheet from "./CharacterSheet";
import Legal from "./Info/Legal";
import About from "./Info/About";

const AppBody = () => {
  return (
    <div className="App-body">
      <Routes>
        <Route element={<CharacterHistoryLayout />}>
          <Route path="/about" element={<About/>} />
          <Route path="/custom" element={<CustomOptionsPage />} />
          <Route path="/character" element={<CharacterSheet />} />
          <Route path="/legal" element={<Legal/>} />
          <Route path="/" element={<CharacterSheet />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppBody;
