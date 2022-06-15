import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import fetchCharacter from "../../helpers/characterSheet/fetchCharacter.js";
import loadCharacter from "../../helpers/characterSheet/loadCharacter.js";

import defaultCharOptions from "../../constants/defaultCharOptions.js";

const CharacterHistoryLayout = () => {
  const [charOptions, setCharOptions] = useState(defaultCharOptions);
  const [history, setHistory] = useState([]);
  const [characterIndex, setCharacterIndex] = useState(0);
  const navigate = useNavigate();

  const beginFetch = () => {
    fetchCharacter(charOptions, history, setHistory, setCharacterIndex);
  };

  const navigateToCharSheet = () => {
    beginFetch();
    navigate("../character", { replace: true });
  };

  const clearOptions = () => {
    setCharOptions(defaultCharOptions);
  };

  const goBackChar = () => {
    if (characterIndex > 0) {
      setCharacterIndex(characterIndex - 1);
    }
  };

  const goForwardChar = () => {
    if (characterIndex < history.length - 1) {
      setCharacterIndex(characterIndex + 1);
    }
  };

  const loadCharacterClosure = (file) => {
    loadCharacter(file, history, setHistory, setCharacterIndex);
  };

  return (
    <Outlet
      context={{
        history,
        characterIndex,
        beginFetch,
        navigateToCharSheet,
        charOptions,
        setCharOptions,
        clearOptions,
        goBackChar,
        goForwardChar,
        loadCharacterClosure,
      }}
    />
  );
};

export default CharacterHistoryLayout;
