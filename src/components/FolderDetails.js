// src/components/FolderDetails.js
import React from 'react';
import { useFolders } from './FolderProvider';

const FolderDetails = ({ folderId }) => {
  const { folders } = useFolders();

  const findFolderById = (folder, id) => {
    if (folder.id === id) return folder;
    for (const child of folder.children) {
      const found = findFolderById(child, id);
      if (found) return found;
    }
    return null;
  };

  const folder = findFolderById(folders, folderId);

  const renderBreadcrumbs = (folder) => {
    // Logic to render breadcrumbs
  };

  return (
    <div>
      {folder && (
        <>
          <div>
            <h3>{folder.name}</h3>
            <p>Color: <span style={{ backgroundColor: folder.color }}>{folder.color}</span></p>
            <p>Children count: {folder.children.length}</p>
          </div>
          <div>{renderBreadcrumbs(folder)}</div>
        </>
      )}
    </div>
  );
};

export default FolderDetails;
