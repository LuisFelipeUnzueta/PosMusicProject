import { View, Text } from "native-base";

interface Props {
    text: string;
}

export default function SelectedInfo ({text}: Props) {
    return (
        <View>
            <Text color={"secondary.200"}>{text}</Text>
        </View>
    )
}