
import { NativeBaseProvider } from "native-base";
import Theme from './scr/screen/Theme';
import UserContext, { User } from './scr/context/user';
import Wrapper from './scr/screen/Wrapper';
import { useEffect, useState } from 'react';

import { NavigationContainer } from "@react-navigation/native";





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
