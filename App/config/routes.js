import { createStackNavigator } from 'react-navigation';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';

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

const WelcomeStack = createStackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
});

export default createStackNavigator({
    Home: {
        screen: LoginStack,
    },
    Welcome: {
        screen: WelcomeStack
    }
},
    {
        mode: 'modal',
        // cardStyle: { paddingTop: StatusBar.currentHeight },
        headerMode: 'none',
    }
)