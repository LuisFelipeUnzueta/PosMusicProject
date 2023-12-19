import { Button as NativeButton} from 'native-base';

interface Props {
    content: string;
    variation: string;
    variant: string;
    handleClick: () => void;
}

export default function Button ({content, variation, variant, handleClick} : Props) {
    return(
        <NativeButton variant={variant} bg={`${variation}.400`} mt={3} onPress={handleClick}>
            {content}
        </NativeButton>

    );
}