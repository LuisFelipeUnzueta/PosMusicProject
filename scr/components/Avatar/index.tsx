import { Image } from "native-base";
import { Dimensions, TouchableOpacity } from "react-native";


interface Props {

    name: string,
    img: string,
    setSelectedStorie: (storie: string) => void,
}

export default function Avatar ({img , name, setSelectedStorie} : Props) {
    return (
          <TouchableOpacity onPress={() => setSelectedStorie(name)}>
            <Image 
                m={2} 
                size="x1"
                borderRadius={100}
                style={{height: Dimensions.get('screen').width * 0.3, width: Dimensions.get('screen').width * 0.3, resizeMode:'stretch' }}
                alt="Alternate text"
                source={{uri: img}} />
        </TouchableOpacity>
 

    )
}