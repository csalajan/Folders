import realm from '../realm';

export const FETCH_MY_FOLDERS_SUCCESS = 'FETCH_MY_FOLDERS_SUCCESS';
export const FETCH_TEAM_FOLDERS_SUCCESS = 'FETCH_TEAM_FOLDERS_SUCCESS';
export const SAVE_FOLDER_SUCCESS = 'SAVE_FOLDER_SUCCESS';
export const DELETE_FOLDER_SUCCESS = 'DELETE_FOLDER_SUCCESS';
export const SELECT_FOLDER = 'SELECT_FOLDER';

export const FetchFoldersSuccess = (folders, shared) => ({
  type: shared ? FETCH_TEAM_FOLDERS_SUCCESS : FETCH_MY_FOLDERS_SUCCESS,
  folders,
});

export const SaveFolderSuccess = (folder) => ({
    type: SAVE_FOLDER_SUCCESS,
    folder,
});

export const FetchFolders = (folderId, shared) => (dispatch) => {
    let folders = realm
        .objects('Folder');

    if (folderId) {
        folders = folders.filtered(`parentFolderId == "${folderId}"`)
    } else {
        folders = folders.filtered(`parentFolderId == null`)
    }
    folders = folders.filtered(`shared == ${!!shared}`);

    dispatch(FetchFoldersSuccess(folders, shared));
};

export const SaveFolder = folder => (dispatch) => {
    let savedFolder;
    realm.write(() => {
        savedFolder = realm.create('Folder', folder, true);
    });

    dispatch(SaveFolderSuccess(savedFolder));
};

export const DeleteFolder = folder => (dispatch) => {
    realm.write(() => {
        realm.delete(folder);
    });

    dispatch({
        type: DELETE_FOLDER_SUCCESS,
    });
};

export const SelectFolder = folder => (dispatch) => {
    dispatch({
        type: SELECT_FOLDER,
        folder,
    });

    if (folder) {
        FetchFolders(folder.id, folder.shared)(dispatch);
    } else {
        FetchFolders()(dispatch);
    }
};