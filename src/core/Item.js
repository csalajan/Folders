import React, { Component } from 'react';
import { TouchableOpacity, Text, Button } from 'react-native';

class Item extends Component {

    onDelete = () => {
        this.props.onDelete(this.props.item);
    };

    onRowSelect = () => {
        this.props.onPress(this.props.item);
    };
    render() {
        const { item } = this.props;
        return (
            <TouchableOpacity onPress={this.onRowSelect} style={Styles.item}>
                <Text style={Styles.text}>{item.name}</Text>

                <Button
                    onPress={this.onDelete}
                    title="Delete"
                    color="red"
                />
            </TouchableOpacity>
        )
    }
}

const Styles = {
    item: {
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        flex: 5,
    }
}

export default Item;