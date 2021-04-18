import React, { useState, useEffect } from 'react'
import { Col, Row, Card } from "antd";
import { Icon } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import GridCard from './GridCards'
import './GridCards.css';
import './Products.css';


function Products({ products }) {
    const [searchBrand, setSearchBrand] = useState('');
    const [searchBrandHolder, setSearchBrandHolder] = useState('');
    const [searching, setSearching] = useState(false);
    const brandSearchHandler = (e) => {

    }

    useEffect(() => {
        if (searchBrandHolder === "") {
            setSearching(false);
        }
        else {
            setSearching(true);
            console.log("brand name searching = " + searchBrand);
        }
    }, [searchBrand])
    console.log("searching state = " + searching);


    return (
        <div>
            <div className="searchByBrand">
                <input type="text" onChange={e => setSearchBrandHolder(e.target.value)} placeholder="Search by brand"></input>
                <SearchIcon className="searchIcon" onClick={e => setSearchBrand(searchBrandHolder)} />
            </div>
            <Row gutter={[16, 16]} className="gridCards">
                {
                    searching
                        ? (
                            products.filter((product, index) => searchBrand === product.brandName).map((product, index) =>
                            (
                                <React.Fragment key={index} >
                                    <GridCard
                                        mobileName={product.mobileName}
                                        brandName={product.brandName}
                                        price={product.price}
                                        colour={product.colour}
                                        ram={product.ram}
                                        rom={product.rom}
                                        key={index}
                                    />
                                </React.Fragment>
                            ))
                        )
                        : (products &&
                            products.map((product, index) => (
                                <React.Fragment key={index} >
                                    <GridCard
                                        mobileName={product.mobileName}
                                        brandName={product.brandName}
                                        price={product.price}
                                        colour={product.colour}
                                        ram={product.ram}
                                        rom={product.rom}
                                        key={index}
                                    />
                                </React.Fragment>
                            ))
                        )
                }

            </Row>
        </div>
    )
}

export default Products
