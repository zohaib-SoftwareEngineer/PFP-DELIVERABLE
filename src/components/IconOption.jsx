import { HStack, Image, Stack, Text } from '@chakra-ui/react';
import { components } from 'react-select';
const { Option, SingleValue } = components;

export const IconOption = (props) => (
    <Option {...props}>
        <Stack direction={'row'} justifyContent={'space-between'}>
        <Text fontSize={'sm'}>{props.data.value}</Text>
        <HStack spacing={'2'}>
            <Image h={'4'} src={props.data.img} />
            <Text fontSize={'sm'}>{props.data.label}</Text>
        </HStack>
        </Stack>
    </Option>
);

export const IconValue = (props) => (
    <SingleValue {...props}>
        <Stack direction={'row'} justifyContent={'space-between'}>
        <Text fontSize={'sm'}>{props.data.value}</Text>
        <HStack spacing={'2'}>
            <Image h={'4'} src={props.data.img} />
            <Text fontSize={'sm'}>{props.data.label}</Text>
        </HStack>
        </Stack>
    </SingleValue>
);