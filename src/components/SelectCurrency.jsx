import React, { useState } from 'react';
import bnb from '../assets/images/bnb.png';
import usdt from '../assets/images/usdt.png';
import wbtc from '../assets/images/wbtc.png';
import { Button, HStack, Img, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { GoPrimitiveDot } from 'react-icons/go';
import { BsChevronDown } from 'react-icons/bs';


export default function App({ setStateOfParent, setSelectedNetwork }) {
    const [option, setOption] = useState(bnb)
    const [optionName, setOptionName] = useState('BNB')
    setStateOfParent(option)
    setSelectedNetwork(optionName)
    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<BsChevronDown color='white' />}
                bgColor={'rgb(44, 47, 54)'} borderRadius={'2xl'}
                _hover={{ bgColor: 'rgb(64, 68, 79)', borderColor: '1px solid rgb(64, 68, 79)' }}
                _focus={{ bgColor: 'rgb(44, 47, 54)' }}
                _active={{ bgColor: 'rgb(44, 47, 54)' }}
                w={{base:'12rem',md:'13rem'}}
                size={{ base: 'sm', md: 'md' }}


            >
                <HStack >
                    <Img src={option} boxSize={{ base: '4', md: '6' }} />
                    <Text fontSize={{ base: 'xs', md: 'sm' }} color={'#B2B9D2'}>{optionName}</Text>
                </HStack>
            </MenuButton>
            <MenuList borderRadius={'2xl'} bgColor={'#191B1F'} p={'4'} color={'#B2B9D2'} border={'none'}>
                <Text>Select Token</Text>
                <MenuItem px={'0 !important'} _hover={{ bgColor: 'transparent' }} _focus={{ bgColor: 'transparent' }} _active={{ bgColor: 'transparent' }} onClick={() => {
                    setOption(bnb)
                    setOptionName('BNB')
                }}>
                    <HStack justify={'space-between'} bgColor={'#212429'} w={'full'} p={'2'} borderRadius={'2xl'} _hover={{ bgColor: 'rgb(64, 68, 79)' }}>
                        <HStack>
                            <Img src={bnb} boxSize={'4'} />
                            <Text>BNB</Text>
                        </HStack>
                        <GoPrimitiveDot color='green' />
                    </HStack>
                </MenuItem>

                <MenuItem px={'0 !important'} _hover={{ bgColor: 'transparent' }} _focus={{ bgColor: 'transparent' }} _active={{ bgColor: 'transparent' }} onClick={() => {
                    setOption(wbtc)
                    setOptionName('WBTC')
                }}>
                    <HStack justify={'space-between'} bgColor={'#212429'} w={'full'} p={'2'} borderRadius={'2xl'} _hover={{ bgColor: 'rgb(64, 68, 79)' }}>
                        <HStack>
                            <Img src={wbtc} boxSize={'4'} />
                            <Text>WBTC</Text>
                        </HStack>
                        <GoPrimitiveDot color='green' />
                    </HStack>
                </MenuItem>

                <MenuItem px={'0 !important'} _hover={{ bgColor: 'transparent' }} _focus={{ bgColor: 'transparent' }} _active={{ bgColor: 'transparent' }} onClick={() => {
                    setOption(usdt)
                    setOptionName('USDT')
                }}>
                    <HStack justify={'space-between'} bgColor={'#212429'} w={'full'} p={'2'} borderRadius={'2xl'} _hover={{ bgColor: 'rgb(64, 68, 79)' }}>
                        <HStack>
                            <Img src={usdt} boxSize={'4'} />
                            <Text>USDT</Text>
                        </HStack>
                        <GoPrimitiveDot color='green' />
                    </HStack>
                </MenuItem>
            </MenuList>
        </Menu>
    );
}