import {
  Button,
  HStack,
  IconButton,
  Img,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import React, { useContext, useEffect, useState, useCallback } from 'react';
import pfplogo from '../assets/images/coin.png';
import bnb from '../assets/images/bnb.png';
import SelectCurrency from './SelectCurrency';
import { BsArrowDownShort, BsThreeDots } from 'react-icons/bs';
import {
  AiOutlineFacebook,
  AiOutlineInfoCircle,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import ContextWallet from '../context/ContextConnect';

const CurrencyInput = ({ id, placeholder, name, value, handleChange, type }) => {
  if ((value == '0'))
  {
    value = "";
  }
  return (
    <input
      id={id}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={e => {
        handleChange(e, name, id);
      }}
      style={{ backgroundColor: 'transparent', fontSize: '1.5rem', width: '100%', outline: 'none' }}
    />
  );
};

const Swap = () => {
  const [image, setImage] = useState(bnb);
  const [networkAmount, setNetworkAmount] = useState();
  const [selectedNetwork, setSelectedNetwork] = useState('BNB');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure();
  console.log(networkAmount);
  const {
    connectWallet,
    walletAddress,
    setapproveOwner,
    usdtContractFunction,
    wbtcContractFunction,
    bnbContractFunction,
    handleChange,
    isApproveButton,
    approveOwner,
    isLoadingBuy,
    setNetwork,
    network,
    convertedCurrency,
    convertedToken,
    input,
    inputPfp,
    isFirstInput,
    isLoadingApproval
  } = useContext(ContextWallet);
  console.log(
    '🚀 ~ file: Swap.jsx ~ line 83 ~ Swap ~ convertedToken',
    convertedToken
  );
  console.log(
    '🚀 ~ file: Swap.jsx ~ line 83 ~ Swap ~ convertedCurrency',
    convertedCurrency
  );
  const [currentConvertedToken, setcurrentConvertedToken] = useState(convertedToken);
  const [currentConvertedCurrency, setcurrentConvertedCurrency] = useState(convertedCurrency);

  useEffect(() => {
    setcurrentConvertedToken(convertedToken);
    setcurrentConvertedCurrency(convertedCurrency);
  }, [convertedToken, convertedCurrency])

  const addresstoString = walletAddress?.toString();
  const addressString = `${addresstoString?.slice(
    0,
    5
  )}...${addresstoString?.slice(addresstoString.length - 4)}`;
  const handleBuyCall = () => {
    if (walletAddress) {
      console.log('have wallet Address');
      if (selectedNetwork === 'USDT') {
        usdtContractFunction();
      } else if (selectedNetwork === 'WBTC') {
        wbtcContractFunction();
      } else {
        bnbContractFunction();
      }
    } else {
      console.log('Not have wallet Address');
      connectWallet();
    }
  };

  return (
    <Stack>
      <Stack
        bgColor={'#23242A'}
        h={'fit-content'}
        w={'fit-content'}
        borderRadius="2xl"
        justify={'space-between'}
        pb={'6'}
        px={'2'}
      >
        <Stack>
          {/* Header */}
          <Stack
            direction={'row'}
            alignItems="center"
            w={'100%'}
            justify={'space-between'}
            px={'2'}
            py={'2'}
          >
            <Img
              src={pfplogo}
              boxSize={{ base: '6', lg: '12' }}
              objectFit={'cover'}
            />
            <HStack w={'60%'}>
              <HStack
                color={'#B2B9D2'}
                as={Button}
                p={'0 !important'}
                w={'fit-content'}
                borderRadius={'3xl'}
                bgColor={'rgb(44, 47, 54)'}
                boxShadow={'rgb(0 0 0 / 8%) 0px 6px 10px'}
                _hover={{ bgColor: 'rgb(64, 68, 79)' }}
                spacing={'4'}
                px={'6'}
              >
                <Img src={image} w={'6'} />
              </HStack>
              <Button
                w={'70%'}
                // bgColor={'rgba(21, 61, 111, 0.44)'}
                // color={'rgb(80, 144, 234)'}
                bgColor={"#e89a03"}
                color={'white'}
                borderRadius={'2xl'}
                border={'1px solid #fba826'}
                _hover={{
                  color: 'white',
                  bgColor: '#e89a03' 
                }}
                onClick={() => connectWallet()}
                size={{ base: 'sm', lg: 'md' }}
              >
                {walletAddress ? (
                  <Text
                  // textOverflow={'ellipsis 3ch;'}
                  // overflow={'hidden'}
                  // w={'14'}
                  >
                    {addressString}
                  </Text>
                ) : (
                  <Text
                    textOverflow={'ellipsis'}
                    overflow={'hidden'}
                    w={'fit-content'}
                    fontSize={'xs'}
                    color={'white'}
                  >
                    Connect Wallet
                  </Text>
                )}
              </Button>
              {/* <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<BsThreeDots />}
                  variant="outline"
                  borderRadius={'2xl'}
                  bgColor={'#191B1F'}
                  color={'white'}
                  border={'1px solid #fba826'}
                  _hover={{ bgColor: '#e89a03' }}
                  _focus={{}}
                  _active={{}}
                />
                <MenuList
                  bgColor={'#212429'}
                  border={'none'}
                  borderRadius={'2xl'}
                >
                  <MenuItem
                    as={Button}
                    rightIcon={<FaTelegramPlane />}
                    justifyContent={'space-between'}
                    bgColor={'transparent'}
                    color={'rgb(195, 197, 203)'}
                    _hover={{ color: 'white', bgColor: 'transparent' }}
                    _focus={{}}
                    _active={{}}
                  >
                    PFP Telegram
                  </MenuItem>

                  <MenuItem
                    as={Button}
                    rightIcon={<AiOutlineFacebook />}
                    justifyContent={'space-between'}
                    bgColor={'transparent'}
                    color={'rgb(195, 197, 203)'}
                    _hover={{ color: 'white', bgColor: 'transparent' }}
                    _focus={{}}
                    _active={{}}
                  >
                    PFP Facebook
                  </MenuItem>
                  <MenuItem
                    as={Button}
                    rightIcon={<AiOutlineTwitter />}
                    justifyContent={'space-between'}
                    bgColor={'transparent'}
                    color={'rgb(195, 197, 203)'}
                    _hover={{ color: 'white', bgColor: 'transparent' }}
                    _focus={{}}
                    _active={{}}
                  >
                    PFP Twitter
                  </MenuItem>

                  {/* <MenuItem as={Button} rightIcon={<MdLanguage />} justifyContent={'space-between'} bgColor={'transparent'} color={'rgb(195, 197, 203)'} _hover={{ color: 'white', bgColor: 'transparent' }} _focus={{}} _active={{}}>
                                        Language
                                    </MenuItem>
                                    <MenuItem as={Button} rightIcon={<CgNotes />} justifyContent={'space-between'} bgColor={'transparent'} color={'rgb(195, 197, 203)'} _hover={{ color: 'white', bgColor: 'transparent' }} _focus={{}} _active={{}}>
                                        Legal and Privacy
                                </MenuItem> */}
                 {/*  </MenuList>
              </Menu> */}
            </HStack>
          </Stack>

          <Stack px={'2'}>
            <Button
              // as={Link}
              // href='https://pfptoken.netlify.app/'
              onClick={onOpen}
              px={'2'}
              py={'2'}
              bgColor={'#e89a03'}

              // color={'rgb(80, 144, 234)'}
              color={'white'}
              _hover={{ bgColor: '#e89a03' }}
              border={'1px solid #fba826'}
              // _hover={{ bgColor: 'rgba(19, 54, 98, 0.44)' }}
              borderRadius={'2xl'}
            >
              Import BNB From Card
            </Button>
          </Stack>

          {/* Swap Converter */}
          <Stack px={'2'}>
            <Stack
              bgColor={'#191B1F'}
              borderRadius={'2xl'}
              px="3"
              py={'4'}
              h={'auto'}
            >
              <HStack color={'white'} px={'3'} justify={'space-between'}>
                <Text fontWeight={'bold'}>Buy PFP Tokens</Text>
              </HStack>
              <Stack spacing={'-3'}>
                <Stack
                  _hover={{ border: '1px solid #fba826 !important' }}
                  bgColor={'#23242A'}
                  minH={'20'}
                  border={'1px solid #23242A !important'}
                  borderRadius={'2xl'}
                  color={'#B2B9D2'}
                  px={'6'}
                  py={'2'}
                >
                  <HStack fontWeight={'bold'}>
                    <CurrencyInput
                      id="first_input"
                      value={input || convertedCurrency}
                      placeholder="0.0"
                      name="price"
                      type="number"
                      handleChange={handleChange}
                    />

                    {/* <HStack as={Button} minW={'auto'} borderRadius={'2xl'} bgColor={'rgb(44, 47, 54)'} boxShadow={'rgb(0 0 0 / 8%) 0px 6px 10px'} _hover={{ bgColor: 'rgb(64, 68, 79)' }} spacing={'4'} px={'6'}>
                                            <Img src={bnb} w={'6'} />
                                            <Text>BNB</Text>
                                        </HStack> */}
                    <SelectCurrency
                      setStateOfParent={childData => {
                        setImage(childData);
                      }}
                      setSelectedNetwork={network => {
                        setSelectedNetwork(network);
                        setNetwork(network);
                      }}
                    />
                  </HStack>
                  <HStack justify={'space-between'}>
                    <Text>
                      1 {selectedNetwork} =
                      {selectedNetwork === 'BNB'
                        ? ' 273.87'
                        : selectedNetwork === 'WBTC'
                          ? ' 19 568,87'
                          : ' 1'}
                      $
                    </Text>
                    <Text>Selected Token</Text>
                  </HStack>
                </Stack>

                <Stack
                  position={'relative'}
                  borderRadius={'xl'}
                  bgColor={'#191B1F'}
                  boxSize={'8'}
                  alignSelf={'center'}
                  p={'1px'}
                >
                  <Stack
                  border= {'1px solid #fba826'}
                    w={'fit-content'}
                    bgColor={'#212429'}
                    borderRadius={'xl'}
                    alignSelf={'center'}
                    color={'white'}
                    position={'absolute'}
                    _hover={{ bgColor: 'rgb(64, 68, 79)' }}
                  >
                    <BsArrowDownShort fontSize={'1.9rem'} />
                  </Stack>
                </Stack>

                <Stack
                  _hover={{ border: '1px solid #fba826 !important' }}
                  bgColor={'#23242A'}
                  minH={'20'}
                  border={'1px solid #23242A !important'}
                  borderRadius={'2xl'}
                  color={'#B2B9D2'}
                  px={'6'}
                  py={'2'}
                >
                  <HStack fontWeight={'bold'}>
                    <CurrencyInput
                      id="second_input"
                      placeholder='0.0'
                      type="number"
                      value={inputPfp || convertedToken}
                      variant={'unstyled'}
                      handleChange={handleChange}
                    />
                    <HStack
                      as={Button}
                      minW={'auto'}
                      borderRadius={'2xl'}
                      bgColor={'rgb(44, 47, 54)'}
                      boxShadow={'rgb(0 0 0 / 8%) 0px 6px 10px'}
                      _hover={{ bgColor: 'rgb(64, 68, 79)' }}
                      spacing={'4'}
                      px={'6'}
                    >
                      <Img src={pfplogo} boxSize={'6'} />
                      <Text>PFP</Text>
                    </HStack>
                  </HStack>
                  <HStack justify={'space-between'}>
                    {/* <Text>(In process)</Text> */}
                    {/*<Text>Balance</Text>*/}
                  </HStack>
                </Stack>
              </Stack>
              <Stack>
                <Text textAlign={'center'} color="white" fontWeight={'bold'}>
                  1 PFP = 0.036$
                </Text>
              </Stack>
              {/* {calculated
                                ?
                                (
                                    <Text color={'white'} p={'2'}>1 PFP = 0.00014 BNB (Presale Price)</Text>
                                )
                                :
                                ''
                            } */}
              {isApproveButton === true ? (
                <Stack mb={'3 !important'}>
                  <HStack spacing={'1 !important'} color="gray">
                    <Text fontSize={'md'}>Why do i need to approve?</Text>
                    <Stack
                      onClick={onOpenInfo}
                      _hover={{ color: 'white', cursor: 'pointer' }}
                    >
                      <AiOutlineInfoCircle />
                    </Stack>
                  </HStack>
                  <Button
                  loadingText="Approving"
                  isLoading={isLoadingApproval}
                  isDisabled={isLoadingApproval}
                    bg="white"
                    color={'black'}
                    _hover={{}}
                    onClick={approveOwner}
                  >
                    Approve to Continue
                  </Button>
                </Stack>
              ) : null}
              <Button
                loadingText="Buying"
                isLoading={isLoadingBuy}
                isDisabled={isApproveButton}
                onClick={() => handleBuyCall()}
                bgColor={'#e89a03'}
                border={'1px solid #fba826'}
                color={'white'}
                // color={'rgb(80, 144, 234)'}
                _hover={{ bgColor: '#e89a03' }}
                borderRadius={'xl'}
                size={'lg'}
              >
                {walletAddress ? 'Buy' : 'Connect Wallet'}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {/*   transact modal */}

      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Stack p={'6'}>
              <iframe
                title="Crypto Currencies"
                src="https://staging-global.transak.com/?apiKey=da2eef7d-9d65-41aa-a2db-ac45f711b880"
                height="600px"
                width="100%"
              ></iframe>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* info modal */}

      <Modal size="sm" isOpen={isOpenInfo} onClose={onCloseInfo}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Stack p={'6'}>
              <Text>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content.
              </Text>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default Swap;
