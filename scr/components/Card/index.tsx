import { Image } from "native-base";
import { Dimensions, TouchableOpacity } from "react-native";


interface Props {

    album: string,
    img: string,
    setSelectedAlbum: (album: string) => void,
}

export default function Card ({img , album, setSelectedAlbum} : Props) {
    return (
          <TouchableOpacity onPress={() => setSelectedAlbum(album)}>
            <Image 
                m={2} 
                size="x1"
                style={{height: Dimensions.get('screen').width * 0.5, width: Dimensions.get('screen').width * 0.5, resizeMode:'stretch' }}
                alt="Alternate text"
                source={{uri: img}} />
        </TouchableOpacity>
 

    )
}