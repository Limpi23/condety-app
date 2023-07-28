import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import DrawerNavigator from './src/navigation/Drawer/DrawerNavigator';

function App(){
  return (
    <ThemeProvider>
        <DrawerNavigator /> 
    </ThemeProvider>
  )
}


export default App;
