import { createContext, useContext, useState } from 'react';

// Create a new context for the selectedTag state
export const TagContext = createContext();

// Create a custom hook to use the selectedTag state in any component
export const useTagContext = () => useContext(TagContext);

// Create a context provider to wrap the Layout component
export const TagContextProvider = ({ children }) => {
  const [selectedTag, setSelectedTag] = useState(null); // Initialize the state

  return (
    <TagContext.Provider value={{ selectedTag, setSelectedTag }}>
      {children}
    </TagContext.Provider>
  );
};
