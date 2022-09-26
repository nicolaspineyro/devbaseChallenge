import {SafeAreaView, View, Text, Image, ActivityIndicator} from 'react-native';

const PersonScreen = ({route}) => {
  const userData = route.params.data;

  if (!userData) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: '50%', height: '50%'}}
          source={{uri: userData.avatar_url}}
        />
        <View>
          <Text>{userData.name}</Text>
          <Text>{userData.location}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PersonScreen;
