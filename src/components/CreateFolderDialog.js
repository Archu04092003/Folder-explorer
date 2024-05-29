// src/components/CreateFolderDialog.js
import React, { useState } from 'react';
import { useFolders } from './FolderProvider';

const CreateFolderDialog = ({ parentId, onClose }) => {
  const { createFolder } = useFolders();
  const [name, setName] = useState('');
  const [color, setColor] = useState('#ffffff');

  const handleSubmit = () => {
    createFolder(parentId, name, color);
    onClose();
  };

  return (
    <div className="modal">
      <h2>Create Folder</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Folder Name" />
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <button onClick={handleSubmit}>Create</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default CreateFolderDialog;
