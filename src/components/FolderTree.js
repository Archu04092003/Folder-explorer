// src/components/FolderTree.js
import React, { useState } from 'react';
import { useFolders } from './FolderProvider';

const FolderTree = () => {
  const { folders, deleteFolder } = useFolders();
  const [selectedFolder, setSelectedFolder] = useState(null);

  const renderTree = (folder) => (
    <div key={folder.id} style={{ marginLeft: 20 }}>
      <div>
        <span>{folder.name}</span>
        <button onClick={() => handleEdit(folder)}>Edit</button>
        <button onClick={() => deleteFolder(folder.id)}>Delete</button>
      </div>
      {folder.children && folder.children.map((child) => renderTree(child))}
    </div>
  );

  const handleEdit = (folder) => {
    setSelectedFolder(folder);
  };

  return (
    <div>
      {renderTree(folders)}
      {selectedFolder && (
        <div>
          <h3>Edit Folder</h3>
          {/* Implement edit form here */}
        </div>
      )}
    </div>
  );
};

export default FolderTree;
