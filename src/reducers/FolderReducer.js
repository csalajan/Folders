import {
    FETCH_MY_FOLDERS_SUCCESS,
    FETCH_TEAM_FOLDERS_SUCCESS,
    SAVE_FOLDER_SUCCESS,
    DELETE_FOLDER_SUCCESS,
    SELECT_FOLDER,
} from "actions/FolderActions";

const initialState = {
    selectedFolder: null,
    myFolders: [],
    teamFolders: [],
};

const FolderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MY_FOLDERS_SUCCESS:
            return {
                ...state,
                myFolders: action.folders,
            };
        case FETCH_TEAM_FOLDERS_SUCCESS:
            return {
                ...state,
                teamFolders: action.folders,
            };
        case SAVE_FOLDER_SUCCESS:
            return {
                ...state,
            };
        case DELETE_FOLDER_SUCCESS:
            return {
                ...state,
            };
        case SELECT_FOLDER:
            return {
                ...state,
                selectedFolder: action.folder,
            };
        default:
            return state;
    }
};

export default FolderReducer;