import HomeScreen from '../screens/home/HomeScreen';
import PersonScreen from '../screens/person/PersonScreen';

const options = {
  noHeader: {
    headerShown: false,
    gestureEnabled: false,
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
  },
  {
    name: routeNames.Home,
    component: HomeScreen,
  },
];
