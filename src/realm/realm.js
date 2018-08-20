import Realm from 'realm';
import {
    Folder,
    Note,
} from './models';

export default new Realm({
    schemaVersion: 2,
    schema: [
        Folder,
        Note,
    ]
});