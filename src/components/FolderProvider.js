// src/components/FolderProvider.js
import React, { createContext, useState, useContext } from 'react';

const FolderContext = createContext();

export const useFolders = () => useContext(FolderContext);

const FolderProvider = ({ children }) => {
  const initialData = {
    id: 'root',
    name: 'Root',
    color: '#ffffff',
    children: [],
  };
  const [folders, setFolders] = useState(initialData);

  const createFolder = (parentId, name, color) => {
    const addFolder = (folder) => {
      if (folder.id === parentId) {
        return {
          ...folder,
          children: [...folder.children, { id: `${Date.now()}`, name, color, children: [] }],
        };
      }
      return { ...folder, children: folder.children.map(addFolder) };
    };
    setFolders(addFolder(folders));
  };

  const updateFolder = (id, name, color) => {
    const editFolder = (folder) => {
      if (folder.id === id) {
        return { ...folder, name, color };
      }
      return { ...folder, children: folder.children.map(editFolder) };
    };
    setFolders(editFolder(folders));
  };

  const deleteFolder = (id) => {
    const removeFolder = (folder) => {
      if (folder.id === id) return null;
      return { ...folder, children: folder.children.map(removeFolder).filter(Boolean) };
    };
    setFolders(removeFolder(folders));
  };

  return (
    <FolderContext.Provider value={{ folders, createFolder, updateFolder, deleteFolder }}>
      {children}
    </FolderContext.Provider>
  );
};

export default FolderProvider;
