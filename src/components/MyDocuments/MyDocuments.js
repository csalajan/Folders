import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1'

import { FetchFolders, SaveFolder, DeleteFolder, SelectFolder } from "actions/FolderActions";
import { ItemList } from 'Core';

class MyDocuments extends Component {

    componentDidMount() {
        this.props.FetchFolders();
    }

    addFolder = () => {
        this.props.SaveFolder({
            id: uuidv1(),
            name: 'test',
            parentFolderId: this.props.folders.selectedFolder ? this.props.folders.selectedFolder.id : null,
            shared: false,
        })
    };

    deleteFolder = (folder) => {
        this.props.DeleteFolder(folder);
    };

    selectFolder = (folder) => {
      this.props.SelectFolder(folder);

      this.props.navigation.navigate({
          url: 'MyDocuments',
      })
    };

    render() {
        const { folders, notes} = this.props;
        return (
            <View style={{flex: 1}}>
                <Button
                    onPress={this.addFolder}
                    title="Add Folder"
                />
                <ItemList
                    title="My Folders"
                    items={folders.myFolders}
                    onRowSelect={this.selectFolder}
                    onDelete={this.deleteFolder}
                />
                <ItemList
                    title="My Notes"
                    items={notes.displayNotes}
                />
            </View>
        )
    }
}

const mapStateToProps = ({folders, notes}) => ({
    folders,
    notes,
});

const mapDispatchToProps = {
    FetchFolders,
    SaveFolder,
    DeleteFolder,
    SelectFolder,
};
export default connect(mapStateToProps, mapDispatchToProps)(MyDocuments);