// src/App.js
import React, { useState } from 'react';
import FolderProvider from './components/FolderProvider';
import FolderTree from './components/FolderTree';
import CreateFolderDialog from './components/CreateFolderDialog';
import FolderDetails from './components/FolderDetails';

const App = () => {
  const [selectedFolderId, setSelectedFolderId] = useState('root');
  const [isCreateDialogOpen, setCreateDialogOpen] = useState(false);

  return (
    <FolderProvider>
      <div className="app">
        <div className="sidebar">
          <button onClick={() => setCreateDialogOpen(true)}>Create Folder</button>
          <FolderTree />
        </div>
        <div className="main-content">
          <FolderDetails folderId={selectedFolderId} />
        </div>
        {isCreateDialogOpen && <CreateFolderDialog parentId={selectedFolderId} onClose={() => setCreateDialogOpen(false)} />}
      </div>
    </FolderProvider>
  );
};

export default App;
