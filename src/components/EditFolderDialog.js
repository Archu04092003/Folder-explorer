// src/components/EditFolderDialog.js
import React, { useState } from 'react';
import { useFolders } from './FolderProvider';

const EditFolderDialog = ({ folder, onClose }) => {
  const { updateFolder } = useFolders();
  const [name, setName] = useState(folder.name);
  const [color, setColor] = useState(folder.color);

  const handleSubmit = () => {
    updateFolder(folder.id, name, color);
    onClose();
  };

  return (
    <div className="modal">
      <h2>Edit Folder</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Folder Name"
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={handleSubmit}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditFolderDialog;
