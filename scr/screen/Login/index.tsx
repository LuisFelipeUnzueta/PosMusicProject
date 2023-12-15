import { Box, Divider, Flex, Heading, Input, useToast, Text } from "native-base";
import Button from "../../components/Button";
import UserContext from "../../context/user";
import { useContext } from "react";
import axios from "axios";


export default function Login() {
    const userData = useContext(UserContext);

    const toast = useToast();

    const handleLogin = () => {
      axios.post('https://musicapi-w7kn.onrender.com/user/login', {
        username: 'luis',
        password: '1234'
      })
      .then(function (response) {
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
            <Input mt={2} />
            <Input mt={2} />
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


