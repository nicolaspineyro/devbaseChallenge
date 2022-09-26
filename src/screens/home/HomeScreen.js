import {View, Text, Button} from 'react-native';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const userNames = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'];

const HomeScreen = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    if (username) {
      getUserData();
    }
  }, [username]);

  const getUserData = async () => {
    let url = `https://api.github.com/users/${username}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: ``,
      },
    });
    const jsonData = await response.json();
    if (jsonData && jsonData.message !== 'Not Found') {
      navigation.navigate('Person', {data: jsonData});
    } else if (username !== '') {
      console.log('Username does not exist');
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text>Top 5 GitHub Users</Text>
      <Text>Tap the user to see more information</Text>
      <View>
        {userNames.map(name => (
          <Button
            title={name}
            key={`button-${name}`}
            onPress={() => {
              setUsername(name);
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;
