import { Box, Divider, Flex, Heading, Input, useToast, Text } from "native-base";
import Button from "../../components/Button";
import UserContext from "../../context/user";
import { useContext, useEffect, useState } from "react";
import { register } from "../../services/register";




export default function Register() {
    const userData = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const toast = useToast();

    useEffect(() => {
    

    }, []);

   

    const handleRegister = () => {
      register({
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
      //   userData.setUser({
      //     username: username,
      //     password: password,
      //     token: response.data.token
      //   });
      // })
      console.log(response);
      toast.show({
        render: () => {
          return <Box bg="red.400" px="2" py="1" rounded="sm">Register Success! Go to Login!</Box>;
        }
       })})
      .catch(function (error) {
        console.error(error);
        toast.show({
          render: () => {
            return <Box bg="red.400" px="2" py="1" rounded="sm">Register failed!</Box>;
          }
         })
      });
    }


    return (
        <Flex p={5} flex={1} justifyContent='center' alignItems='center'>
            <Heading>Register</Heading>
            <Input mt={2} variant={"rounded"} placeholder="User name" onChangeText={(event: string) => setUsername(event)}/>
            <Input mt={2} variant={"rounded"} placeholder="Password" onChangeText={(event: string) => setPassword(event)}/>
            <Flex width='100%'>
                <Button content="Register" variant="rounded" variation="primary" handleClick={handleRegister
          } />
            </Flex>
                        
        </Flex>
    )
}


