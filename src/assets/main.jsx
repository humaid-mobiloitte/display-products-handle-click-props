import React from 'react'
import DisplayProducts from './displayProducts'
import { useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import styles from './styles/style'
const ProductList=[
    {   
        "image":"https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        "name":"Dzire",
        "color": "purple",
        "type": "minivan",
        "capacity": 7
    },
    {   "image":"https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        "name":"i10",
        "color": "red",
        "type": "station wagon",
        "capacity": 5
    },
    {   "image":"https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/10681/1691392713058/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        "name":"Alto",
        "color": "black",
        "type": "station van",
        "capacity": 5
    },
    {
        "image":"https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar-ROXX/8438/1723692413550/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        "name":"Swift",
        "color": "red",
        "type": "sedan",
        "capacity": 5
    },
    {
        "image":"https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9612/1697698611076/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        "name":"i20",
        "color": "orange",
        "type": "xuv",
        "capacity": 7
    },
]


function Main() {
    let [displayValue,setDisplayValue]=useState('')

    function clickHandler(value){
        setDisplayValue(value)
    }
    return (
        <>
            <Container >
                <DisplayProducts cars={ProductList} clickHandler={clickHandler}/>
                <Box>
                    <Typography sx={styles.normalText}>Car name: {displayValue.name}</Typography>
                    <Typography sx={styles.normalText}>Car color: {displayValue.color}</Typography>
                    <Typography sx={styles.normalText}>Car type: {displayValue.type}</Typography>
                    <Typography sx={styles.normalText}>Car capacity: {displayValue.capacity}</Typography>
                </Box>
            </Container>
        </>
    )
}

export default Main
