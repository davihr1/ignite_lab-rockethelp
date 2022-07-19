import { Heading, HStack, IconButton, StyledProps, useTheme } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

type Props = StyledProps & {
    title: string;
}

export function Header({title, ...rest}: Props ) {
    const { colors } = useTheme();
    const navigation = useNavigation();

    function handleGoBack() {
      navigation.goBack();
    }
  return (
    <HStack 
    w='full'
    justifyContent='center'
    alignItems='center'
    bg='gray.600'
    pb={6}
    pt={12}
    {...rest}
    >
        <IconButton 
        icon={ <AntDesign name="arrowleft" size={24} color={colors.gray[200]} /> }
        onPress={handleGoBack}
        />
        
        <Heading color='gray.100' textAlign='center' fontSize='lg' flex={1} ml={-6}>
            {title}
        </Heading>

    </HStack>
  );
}