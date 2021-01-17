import React, { useState } from 'react' ;
import {Image, Layout, Dropdown, Button, Menu, Badge, Divider} from "antd";
import { DownOutlined, UserOutlined, StarFilled, PlusOutlined } from '@ant-design/icons'

import './style.css';

const { Header } = Layout;
const headerHeight = 60;

const PageHeader = props => {
    const [countNum, setCountNum] = useState(5)

    function handleMenuClick(e) {
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Guest
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                Admin
            </Menu.Item>
        </Menu>
    );

    return (
        <Header className={"header"} style={{height: headerHeight}}>
            <div className={"headerContainer"}>
                <div className={"levi9Logo"} onClick={() => props.history.push('/admin/proizvodi')}>
                    <Image height={headerHeight}
                           src="https://www.levi9.com/wp-content/uploads/2020/08/LogoLevi9-630-1.png"
                           preview={false}
                    />
                </div>
                <div style={{display: 'flex', flexDirection: 'row', paddingRight: 22}}>
                    <a onClick={() => props.history.push('/admin/unos-novog-proizvoda')}
                       style={{fontWeight: 900}}
                    >
                        <PlusOutlined /> Add Product
                        <Divider type={'vertical'} style={{height: 20, color: '#000000'}}/>
                    </a>
                    <div style={{paddingRight: 40}}>
                        <Badge count={countNum} overflowCount={999} offset={[15, 0]}
                               style={{backgroundColor: '#494d53', fontWeight: 900, fontSize: 14}}>
                            <a href="/cart" style={{fontWeight: 900, fontSize: 14}}>Cart</a>
                        </Badge>
                    </div>
                    <div>
                        <Dropdown overlay={menu}>
                            <Button>
                                <StarFilled />Admin <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </Header>
    )
}

export default PageHeader;
