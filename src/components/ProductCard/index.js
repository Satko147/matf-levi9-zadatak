import React from 'react';
import { Image, Button, Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import "./style.css"


const ProductCard = props => {
    const { product } = props
    const cardWidth = 240;
    const cardHeight = 330;

    return (
        <Card className={"card responsiveTextContainer"}
              style={{width: cardWidth, height: cardHeight}}
              bodyStyle={{padding: 8}}>
            <Image src={product.imageUrl} width={224} height={200} preview={false}/>
            <h1>{product.name}</h1>
            <div className={"responsiveText"} style={{minWidth: cardWidth - 10}}>{product.description}</div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button style={{backgroundColor: '#1f6aac', color: 'white', marginTop: 8}}
                        onClick={() => props.history.push(`/products/${product.id}`)}
                >More Details</Button>
                <Button style={{backgroundColor: '#ac0c0c', color: 'white', marginTop: 8}}
                        onClick={() => {
                            console.log(product.id)
                            props.onDelete(product.id)
                        }}
                >
                    <DeleteOutlined />
                </Button>
            </div>
        </Card>
    )
}

export default ProductCard;