import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {Button, Divider, Image, Layout, Spin} from "antd";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import {useSelector} from "react-redux";
import {ShoppingCartOutlined, ArrowLeftOutlined, LoadingOutlined} from '@ant-design/icons'

const { Content } = Layout;

const ProductPage = props => {
    const productData = useSelector(state => state.products.products.filter(item => item.id === props.match.params.productId.toString())[0]);

    return (
        <Layout style={{height:"100vh"}}>
            <PageHeader history={props.history}/>
            <Content style={{marginLeft: '20%', marginRight: '20%'}}>
                {productData ?
                    <div>
                        <div style={{paddingTop: 14, paddingBottom: 8}}>
                            <a onClick={() => props.history.push('/home')}><ArrowLeftOutlined style={{fontSize: 12}}/>  Back to home</a>
                        </div>
                        <Divider/>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{width: 400, height: 400}}>
                                <Image src={productData.imageUrl} width={400} height={400} preview={false}/>
                            </div>
                            <div style={{width: '100%', marginLeft: 30, marginTop: 20, display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                                <div>
                                    <h1>{productData.name}</h1>
                                    <div style={{wordWrap: 'break-word'}}>
                                        {productData.description}
                                    </div>
                                </div>
                                <Button style={{width: 120, marginBottom: 30, padding: '4px 10px 4px 8px'}}>
                                    <ShoppingCartOutlined />Add to cart
                                </Button>
                            </div>
                        </div>
                    </div>
                 :
                    <Spin style={{position: 'absolute', top: '44%', left: '50%'}}
                          indicator={<LoadingOutlined style={{ fontSize: 48, color: '#1f6aac' }} spin />}
                    />
                }

            </Content>
            <PageFooter/>
        </Layout>
    )
}

export default withRouter(ProductPage)