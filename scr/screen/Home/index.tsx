import { FlatList, Flex, Heading, Text} from 'native-base';
import { Alert } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import UserContext from '../../context/user';
import Card from '../../components/Card';
import SelectedInfo from '../../components/Selected';

export default function Home() {
    const userData = useContext(UserContext);

    //userData.user?.token
    
    const [selectedAlbum, setSelectedAlbum] = useState("");

    const DATA = [{
        id: "1",
        album: "Morada",
        img: "https://s2.glbimg.com/eUG7DeKAiscnCtdC9JTu9rti2RY=/620x480/top/e.glbimg.com/og/ed/f/original/2020/06/26/morada_2.jpg",
    },
    {
        id: "2",
        album: "Bethel Music",
        img: "https://i.ytimg.com/vi/nr6Zq3KuUCI/maxresdefault.jpg",
    },
    {
        id: "3",
        album: "NF-Real",
        img: "https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515314_10149.jpg",
    },];

    useEffect(() => {
        if (selectedAlbum == "Morada") {
          Alert.alert("Parabéns!", "Voce selecionou um ótimo album!");
        }
      }, [selectedAlbum]);

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
          <Text color={"secondary.200"} fontSize={24}>{userData.user!.name}</Text>
          <FlatList
            data={DATA}
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
        </Flex>
      );
    }