import React from 'react';
import { Layout } from 'antd';
import './style.css'

const { Footer } = Layout;
const footerHeight = 60;

const PageFooter = props => {
    return (
        <Footer className={"footer"} style={{height: footerHeight}}>
            Levi9 - JavaScript Master Class - 2021
        </Footer>
    )
}

export default PageFooter;