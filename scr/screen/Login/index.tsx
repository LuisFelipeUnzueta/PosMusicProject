import { Box, Flex, Heading, Input, useToast, Text } from "native-base";
import Button from "../../components/Button";
import UserContext from "../../context/user";
import { useContext, useEffect, useState } from "react";
import { login } from "../../services/login";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function Login() {
  const userData = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toast = useToast();

  useEffect(() => {
    try {
      AsyncStorage.getItem('DADOS_LOGIN').then(x => {
        if (x == null) return;

        let dadosLogin = JSON.parse(x);
        handleLogin(dadosLogin.username, dadosLogin.password);
      });
    }
    catch {
      AsyncStorage.removeItem('DADOS_LOGIN');
    }

  }, []);

  const handleLogin = (username: string, password: string) => {
    login({
      username: username,
      password: password
    }).then(function (response) {
      let dadosLogin = {
        username: username,
        password: password,
        token: response.data.token
      };

      AsyncStorage.setItem('DADOS_LOGIN', JSON.stringify(dadosLogin));
      userData.setUser(dadosLogin);
    }).catch(function (error) {
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
      <Heading>Login</Heading>
      <Input mt={2} variant={"rounded"} placeholder="User name" onChangeText={(event: string) => setUsername(event)} />
      <Input mt={2} variant={"rounded"} placeholder="Password" onChangeText={(event: string) => setPassword(event)} />
      <Flex width='100%'>
        <Button content="Sign in" variation="primary" variant="rounded" handleClick={() => handleLogin(username, password)} />
      </Flex>
      <Box padding={8}>
        <Text>If you are a new here go to Register tab!</Text>
      </Box>

    </Flex>
  )
}


