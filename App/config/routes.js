import { createStackNavigator } from 'react-navigation';
import Login from '../screens/Login';

const LoginStack = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header: () => null,
            },
        }
    }, {
        headerMode: 'screen'
    }
)

export default createStackNavigator({
    Home: {
        screen: LoginStack,
    },
},
    {
        mode: 'modal',
        // cardStyle: { paddingTop: StatusBar.currentHeight },
        headerMode: 'none',
    }
)