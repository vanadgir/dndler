import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CharacterHistoryLayout from "./layouts/CharacterHistoryLayout";
import CustomOptionsPage from "./CustomOptions";
import CharacterSheet from "./CharacterSheet";

const AppBody = () => {
  return (
    <div className="App-body">
      <Routes>
        <Route element={<CharacterHistoryLayout />}>
          <Route path="/about" element={<></>} />
          <Route path="/custom" element={<CustomOptionsPage />} />
          <Route path="/character" element={<CharacterSheet />} />
          <Route path="/legal" element={<></>} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppBody;
