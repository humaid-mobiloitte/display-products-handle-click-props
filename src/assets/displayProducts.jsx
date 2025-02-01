import React from 'react';
import { Grid, Box } from '@mui/material';

const DisplayProducts = ({ cars, clickHandler }) => {
    function clickHandle(car) {
        clickHandler(car); // Pass the clicked car details to clickHandler
    }

    return (
        <div>
            <Grid container spacing={2} justifyContent="center">
                {cars.map((car, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                    <Box
                    sx={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop:2
                    }}
                    >
                    <img 
                        src={car.image} 
                        alt="car not found" 
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
                        onClick={() => clickHandle(car)} 
                    />
                    </Box>
                </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default DisplayProducts;
