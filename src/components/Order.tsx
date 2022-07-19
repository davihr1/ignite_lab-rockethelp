import { Box, HStack, VStack, Text, useTheme, Circle, Pressable, IPressableProps } from 'native-base';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 

export type OrderProps = {
    id: string,
    patrimony: string,
    when: string,
    status: 'open' | 'close'
}

type Props = IPressableProps & {
    data: OrderProps
}

export function Order({data, ...rest }: Props) {
    const { colors } = useTheme();
    const StatusColor = data.status === 'open' ? colors.secondary[700] : colors.green[300];
  return (
    <Pressable {...rest}>
    <HStack
    bg='gray.600'
    mb={4}
    alignItems="center"
    justifyContent='space-between'
    rounded='sm'
    overflow='hidden'
    >
        <Box h='full' w={2} bg={StatusColor} />
        <VStack flex={1} my={5} ml={5}>
        <Text color='white' fontSize='md'>Patrimonio {data.patrimony}</Text>

        <HStack alignItems='center'>
            <AntDesign name="clockcircleo" size={15} color={colors.gray[300]} />
            <Text color='gray.200' fontSize='xs' ml={1}>{data.when}</Text> 
        </HStack>
        </VStack>

        <Circle bg='gray.500' h={12} w={12} mr={5}>
            {
                data.status === 'open' ? <MaterialCommunityIcons name="timer-sand" size={24} color={StatusColor} />
                : <AntDesign name="checkcircleo" size={24} color={StatusColor} />
            }
        </Circle>
    </HStack>
    </Pressable>
  );
}