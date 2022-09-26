import HomeScreen from '../screens/home/HomeScreen';
import PersonScreen from '../screens/person/PersonScreen';

const options = {
  noHeader: {
    headerShown: false,
    gestureEnabled: false,
  },
  colorBlack: {
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: 'white',
  },
};

export const routeNames = {
  Person: 'Person',
  Home: 'Home',
};

export const appRoutes = [
  {
    name: routeNames.Person,
    component: PersonScreen,
    options: options.colorBlack,
  },
  {
    name: routeNames.Home,
    component: HomeScreen,
    options: options.colorBlack,
  },
];
