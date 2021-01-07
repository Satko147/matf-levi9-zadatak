import React from 'react';
import { withRouter } from 'react-router-dom';
import {Layout} from "antd";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";

const { Content } = Layout;

const ProductPage = props => {
    return (
        <Layout style={{height:"100vh"}}>
            <PageHeader/>
            <Content style={{marginLeft: '20%', marginRight: '20%'}}>
                Product
            </Content>
            <PageFooter/>
        </Layout>
    )
}

export default withRouter(ProductPage)