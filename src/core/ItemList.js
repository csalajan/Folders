import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Item from './Item';

class ItemList extends Component {

    render() {
        const { items, title } = this.props;
        return (
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <Text style={Styles.headerText}>{title}</Text>
                </View>
                {
                    items.map(item => (
                        <Item item={item} onPress={this.props.onRowSelect} onDelete={this.props.onDelete}/>
                    ))
                }
            </View>
        )
    }
}

const Styles = {
    container: {
      flex: 1,
    },
    header: {
        backgroundColor: 'orange',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
    },
    headerText: {
        fontSize: 25,
    }
};

export default ItemList;