import { useState } from 'react';
import { HStack, IconButton, VStack, useTheme, Text, Heading, FlatList, Center } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

import Logo from '../assets/logo_secondary.svg';
import { Filter } from '../components/Filter';
import { Button } from '../components/Button';
import { Order, OrderProps } from '../components/Order';


export function Home() {
    const [statusSelected, setStatusSelected] = useState<'open' | 'close'>('open');
    const [orders, setOrders] = useState<OrderProps[]>([
        {
            id: '456',
            patrimony: '123456',
            when: '18/07/2022 às 14:00',
            status: 'open'
          }
    ]);
    const navigation = useNavigation();

    const { colors } = useTheme();

    function handleNewOrder() {
        navigation.navigate('new');
      }
    
      function handleOpenDetails(orderId: string) {
        navigation.navigate('details', { orderId });
      }
  return (
    <VStack flex={1} pb={6} bg='gray.700'>
    <HStack 
    w='full'
    justifyContent='space-between'
    alignItems='center'
    bg='gray.600'
    pt={12}
    pb={5}
    px={6}
    >
        <Logo />
        <IconButton 
        icon={<Entypo name="log-out" size={26} color={colors.gray[300]} />}
        />
    </HStack>  

        <VStack flex={1} px={6}>
            <HStack w='full' mt={8} mb={4} justifyContent='space-between' alignItems='center'>
                 <Heading color='gray.100'>
                    Solicitações
                 </Heading>

                 <Text color='gray.200'>
                        {orders.length}
                 </Text>
            </HStack>

         <HStack space={3} mb={8}>
                <Filter 
                    type = 'open'
                    title = 'Em Andamento'
                    onPress={() => setStatusSelected('open')}
                    isActive = {statusSelected === 'open'}
                />

                <Filter 
                    type = 'close'
                    title = 'Finalizados'
                    onPress={() => setStatusSelected('close')}
                    isActive = {statusSelected === 'close'}
                />
        </HStack>

        <FlatList 
        data = {orders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Order data={item} onPress={() => handleOpenDetails(item.id)} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={() => (
            <Center>
                <MaterialIcons name="chat" size={40} color={colors.gray[300]} />
                <Text color='gray.100' fontSize='xl' textAlign='center'>
                    Você não possue {'\n'}
                    solicitações  {statusSelected === 'open' ? "em andamento" : "finalizados"}
                 </Text>
            </Center>
        )}
        />

        <Button title='Nova Solicitaçao' onPress={handleNewOrder}  />
        </VStack>
    </VStack>
  );
}