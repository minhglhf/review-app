import React, { useState } from 'react';
import About from './screens/about';
import Home from './screens/home';
import ReviewDetail from './screens/reviewDetails';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
// import Navigator from './routes/homeStack';
import RootNavigator from './routes/drawer';

const getFonts = () => {
  return (
    Font.loadAsync({
      'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf'),
    })
  )
}

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (fontLoaded) {
    return (
      <RootNavigator />
    );
  }
  else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
      />
    )
    
  }

}

export default App


