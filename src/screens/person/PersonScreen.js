import {SafeAreaView, View, Text, Image} from 'react-native';
import {Styles} from './PersonScreen.styles';

const PersonScreen = ({route}) => {
  const userData = route.params.data;

  return (
    <SafeAreaView style={Styles.Container}>
      <Image style={Styles.personAvatar} source={{uri: userData.avatar_url}} />

      <View style={Styles.textContainer}>
        <Text style={Styles.name}>{userData.name}</Text>
        <Text>{userData.location}</Text>
      </View>
    </SafeAreaView>
  );
};

export default PersonScreen;
