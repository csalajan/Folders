import { createStackNavigator } from 'react-navigation';
import MyDocuments from './components/MyDocuments';
import TeamDocuments from './components/TeamDocuments';

const appNavigator = createStackNavigator({
    MyDocuments: {
        screen: MyDocuments
    },
    TeamDocuments: {
        screen: TeamDocuments
    }
});

export default appNavigator;