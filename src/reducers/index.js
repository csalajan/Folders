import { combineReducers } from 'redux';
import FolderReducer from './FolderReducer';
import NoteReducer from './NoteReducer';

const rootReducer = combineReducers({
    folders: FolderReducer,
    notes: NoteReducer
});

export default rootReducer;