import React from 'react';

const DisplayProducts = ({ cars, clickHandler }) => {
    function clickHandle(car) {
        clickHandler(car); // Pass the clicked car details to clickHandler
    }

    return (
        <div style={{display:'flex'}}>
            {cars.map((car, i) => (
                <div key={i}>
                    <img src={car.image} alt="car not found" onClick={() => clickHandle(car)}/>
                </div>
            ))}
        </div>
    );
}

export default DisplayProducts;
