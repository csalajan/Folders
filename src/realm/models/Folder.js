const Folder = {
    name: 'Folder',
    primaryKey: 'id',
    properties: {
        id: 'string',
        parentFolderId: 'string?',
        shared: 'bool',
        name: 'string',
        notes: 'Note[]'
    }
};

export default Folder;