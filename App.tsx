/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

interface AppCardProps {
  title: string;
}

const AppCard: FC<AppCardProps> = ({title}) => {
  return (
    <TouchableOpacity style={styles.menu}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <AppCard title="First App" />
          <AppCard title="Second App" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: Dimensions.get('window').height,
  },
  menu: {
    backgroundColor: '#c2c2c2',
    height: 150,
    width: '33%',
    borderRadius: 12,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    color: '#1b1b1b',
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default App;
