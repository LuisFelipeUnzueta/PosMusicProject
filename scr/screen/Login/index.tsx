import { Box, Divider, Flex, Heading, Input, useToast, Text } from "native-base";
import Button from "../../components/Button";
import UserContext from "../../context/user";
import { useContext, useEffect, useState } from "react";
import { db } from "../../../App";
import { login } from "../../services/login";



export default function Login() {
    const userData = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const toast = useToast();

    useEffect(() => {
      createTable()

    }, []);

    const createTable = () => {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXIST "
          + "Users "
          + "(username TEXT, password TEXT, token TEXT);"
        )
      })
    }

    const handleLogin = () => {
      login({
        username: username,
        password: password
      })
      .then(function (response) {
        // db.transaction((tx)=>{
        //   tx.executeSql(
        //     "INSERT INTO Users (username, password, token) VALUES (?, ?, ?)",
        //     [name, email, token]
        //   )
        // });
        userData.setUser({
          name: "Luis Unzueta",
          email: "luis@gmail.com",
          token: response.data.token
        });
      })
      .catch(function (error) {
        console.error(error);
        toast.show({
          render: () => {
            return <Box bg="red.400" px="2" py="1" rounded="sm">Usuário ou senha inválido!</Box>;
          }
         })
      });
    }


    return (
        <Flex p={5} flex={1} justifyContent='center' alignItems='center'>
            <Heading>Tela de login</Heading>
            <Input mt={2} placeholder="User name" onChangeText={(event: string) => setUsername(event)}/>
            <Input mt={2} placeholder="Password" onChangeText={(event: string) => setPassword(event)}/>
            <Flex width='100%'>
                <Button content="Sign in" variation="primary" handleClick={handleLogin
          } />
            </Flex>
            <Box padding={5}>
              <Text>Ainda não é cliente? Faça seu cadastro!</Text>
              <Button content="Clique Aqui!" variation="secondary" handleClick={ () => {}
          } />
            </Box>
            
        </Flex>
    )
}


