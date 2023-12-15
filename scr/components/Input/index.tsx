import { Box, FormControl, Stack, WarningOutlineIcon } from 'native-base';

interface Props {
    variation?: string;
    defaultValue?: string;
    placeholder?: string;
    type: string;

}

export default function Input ({defaultValue, placeholder, type, variation} : Props) {
    return(
    <Box alignItems="center">
        <Box w="100%" maxWidth="300px">
            <FormControl isRequired>
            <Stack mx="4">
                <FormControl.Label variant={variation}>{type}</FormControl.Label>
                <Input type={type} defaultValue={defaultValue} placeholder={placeholder} />
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Required Field.
                </FormControl.ErrorMessage>
            </Stack>
            </FormControl>
        </Box>
    </Box>

    )
}
