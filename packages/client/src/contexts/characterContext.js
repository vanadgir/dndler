import React from 'react';
const characterContext = React.createContext({});
export const CharacterProvider = characterContext.Provider;
export default characterContext;