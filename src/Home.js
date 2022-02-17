import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className ="home">
            <img 
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=""/>


                {/**products --> title, price, rating , image */}
            <div className="home_row">
                <Product 
                    id="120"
                    title="Acer Nitro 5 Intel Core i5-10th Gen 15.6-inch (39.62 cms) Display T&L Gaming Laptop (8GB Ram/1TB HDD + 256GB SSD/Win10/GTX 1650Ti Graphics/Obsidian Black/2.3 Kgs), AN515-55 + Xbox Game Pass for PC"
                    price={10000}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81mxlt2J81L._SX355_.jpg"/>

                <Product 
                    id="450"
                    title="OnePlus Nord N100 Midnight Frost Unlocked Smartphone​, 4GB+64GB, US Version, Model BE2011"
                    price={179.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Ohi8iGSFS._AC_SX522_.jpg"/>
            </div>
            
            <div className="home_row">
                <Product 
                    id="780"
                    title="Echo Dot (4th Gen) | Smart speaker with Alexa | Charcoal with Sengled Bluetooth Color bulb"
                    price={49.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81lED6IfqhS._AC_SX425_.jpg"/>

                <Product 
                    id="509"
                    title="HyperX Cloud Stinger – Gaming Headset"
                    price={300}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51kxIEmO%2BZL._AC_SX450_.jpg"/>

                <Product 
                    id="407"
                    title="Fitbit Sense Advanced Smartwatch with Tools for Heart Health"
                    price={289.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61vTkE07jeL._AC_SX425_.jpg"/>
            </div>

            <div className="home_row">
                <Product 
                    id="609"
                    title="MSI Full HD FreeSync Gaming Monitor 24 Curved Non-Glare 1ms LED Wide Screen 1920 X 1080 75Hz Refresh Rate (Optix G241VC)"
                    price={129.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61ANdv%2B2OxL._AC_SX450_.jpg"/>


            </div>
        </div>
    )
}

export default Home
