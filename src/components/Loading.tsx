import { Center, Spinner } from 'native-base';

export function Loading () {
    return (
        <Center flex={1} bg='gary.700'>
            <Spinner color='secundary.700'/> 
        </Center>
    );
}