import { Button, Grid, Link, Stack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import PFPBalanceCard from '../components/PFPBalanceCard'
import Swap from '../components/Swap'
import card1 from '../assets/images/card1.jpg'
import card2 from '../assets/images/card2.jpg'
import card3 from '../assets/images/card3.jpg'
import card4 from '../assets/images/card4.jpg'
import pfp from '../assets/images/coin.png'
import bnb from '../assets/images/bnb.png'
import usdt from '../assets/images/usdt.png'
import wbtc from '../assets/images/wbtc.png'
import ContextWallet from '../context/ContextConnect'


const Dashboard = () => {
    const { walletAddress, bnbBalance, usdtBalance, wbtcBalance, pfpBalance } = useContext(ContextWallet)
    const addresstoString = walletAddress?.toString()
    const addressString = `${addresstoString?.slice(0, 5)}...${addresstoString?.slice(addresstoString.length - 4)}`
    return (
        <>
            <Stack bgColor={'#0b0c22'} p={{base:'2',sm:'6'}}>
                <Stack px={'8'}>
                    <Button
                        as={Link}
                        href='http://3.83.88.61/'
                        px={'2'}
                        py={'2'}
                        bgColor={'#23242A'}
                        border={'1px solid #fba826'}
                        color={'white'}
                        _hover={{ bgColor: '#e89a03' }}
                        borderRadius={'2xl'}
                    >
                        Back To Homepage
                    </Button>
                </Stack>


                <Stack spacing={'4'} direction={{ base: 'column-reverse', lg: 'row' }} alignItems={{ base: 'center', lg: 'inherit' }} py={'8'} px={{base:"2",md:"0",xl:"8"}} justify={'space-between'}>
                    {/* Balance Cards */}
                    <Grid templateColumns={{ lg: 'repeat(2, 1fr)' }} gap={5} w={{ base: 'full', sm: 'full' }}>
                        <PFPBalanceCard img={card1} coin={pfp} balance={pfpBalance} address={addressString} network={'PFP'} />
                        <PFPBalanceCard img={card2} coin={bnb} balance={bnbBalance} address={addressString} network={'BNB'} />
                        <PFPBalanceCard img={card3} coin={wbtc} balance={wbtcBalance} address={addressString} network={'WBTC'} />
                        <PFPBalanceCard img={card4} coin={usdt} balance={usdtBalance} address={addressString} network={'USDT'} />
                    </Grid>
                    {/* Swap Card */}
                    <Swap />
                </Stack>


                <Stack align={'center'} w={'full'} p={{base:'2',sm:'6'}}>
                    <iframe title="Crypto Currencies" src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=100&pref_coin_id=1505&graph=yes" height="700px" width="100%"></iframe>
                </Stack>

            </Stack>
        </>
    )
}

export default Dashboard