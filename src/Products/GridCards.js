import React from 'react'
import 'antd/dist/antd.css'
import './GridCards.css';
import { Col, Card, Typography } from 'antd';
const { Title } = Typography;

function GridCards(props) {
    let { mobileName, key, brandName, price, colour, ram, rom } = props;
    return (
        <div className="site-card-border-less-wrapper">
            <Card type="inner" className="card"
                hoverable
                title={<Title level={4} style={{color: "white"}}>{brandName}  {mobileName} ({colour}, {ram} GB)</Title>}
                bordered={true}
                headStyle={{ backgroundColor: "#408585"}}
            >
                <div className="cardDetails">
                    <p>₹ {price}</p>
                    <p>{ram} GB RAM</p>
                    <p>{rom} GB ROM</p>

                </div>

            </Card>
        </div>

    );
}

export default GridCards
