import { FlatList, Flex, Heading, Text } from 'native-base';
import { Alert } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import UserContext from '../../context/user';
import Card from '../../components/Card';
import SelectedInfo from '../../components/Selected';
import { getAlbum } from '../../services/album';
import { getStories } from '../../services/stories';
import Avatar from '../../components/Avatar';
import { Teste } from '../../components/ListCards';

export default function Home() {
  const userData = useContext(UserContext);
  const [albums, setAlbums] = useState([]);
  const [stories, setStories] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [selectedStorie, setSelectedStorie] = useState("");

  useEffect(() => {
    if (selectedAlbum == "Morada") {
      Alert.alert("Parabéns!", "Voce selecionou um ótimo album!");
    }
  }, [selectedAlbum]);

  useEffect(() => {
    if (userData.user?.token) {
      getAlbum(userData.user?.token).then((response) => { setAlbums(response.data) }).catch((e) => console.log("erro", e));

      getStories(userData.user?.token).then((response) => { setStories(response.data) }).catch((e) => console.log("erro", e))
    }
  }, [])

  return (
    <Flex
      flex={1}
      p={5}
      justifyContent="center"
      alignItems="center"
      bg="primary.100"
    >
      <Heading color="secondary.100" fontSize="4xl">
        Wellcome back</Heading>
      <Text color={"secondary.200"} fontSize={24}>{userData.user!.username}</Text>
      <Text color={'white'} padding={4} fontSize={18}>Stories </Text>
      <FlatList
        data={stories}
        renderItem={({ item }) => (
          <Avatar
            key={item.id}
            img={item.img}
            name={item.name}
            setSelectedStorie={setSelectedStorie}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
      <SelectedInfo text={selectedStorie} />
      <Text color={'white'} padding={4} fontSize={18} style={{ textAlign: 'left', width: '100%' }}> Albums </Text>
      <FlatList
        data={albums}
        renderItem={({ item }) => (
          <Card
            key={item.id}
            img={item.img}
            album={item.album}
            setSelectedAlbum={setSelectedAlbum}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
      <SelectedInfo text={selectedAlbum} />
      <Teste />
    </Flex>
  );
}