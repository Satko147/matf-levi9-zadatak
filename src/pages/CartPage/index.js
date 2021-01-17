import React from 'react';
import { withRouter } from 'react-router-dom';
import {Layout} from "antd";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";


const { Content } = Layout;

const CartPage = props => {
    return (
        <Layout style={{height:"100vh"}}>
            <PageHeader history={props.history}/>
            <Content style={{marginLeft: '20%', marginRight: '20%'}}>
                Cart
            </Content>
            <PageFooter/>
        </Layout>
    )
}

export default withRouter(CartPage)