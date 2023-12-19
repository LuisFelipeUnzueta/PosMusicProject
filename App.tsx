
import { NativeBaseProvider } from "native-base";
import Theme from './scr/screen/Theme';
import UserContext, { User } from './scr/context/user';
import Wrapper from './scr/screen/Wrapper';
import { useEffect, useState } from 'react';
import SQLite from "react-native-sqlite-storage";
import { NavigationContainer } from "@react-navigation/native";
import Home from './scr/screen/Home';


export const db = SQLite.openDatabase(
  {
    name: 'MainDb',
    location: 'default',
  },
  () => {},
  error => {console.log(error)}
);


export default function App() {

  const [user, setUser] = useState(null as User | null);

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  return (
    <NativeBaseProvider theme={Theme}>
      <UserContext.Provider value={{user, setUser}}>
        <NavigationContainer>
         <Wrapper />
        </NavigationContainer>
       
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}
