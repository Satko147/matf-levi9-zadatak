import React, { useState } from 'react' ;
import {Image, Layout, Dropdown, Button, Menu, Space, Badge} from "antd";
import { DownOutlined, UserOutlined, StarFilled } from '@ant-design/icons'

import './style.css';

const { Header } = Layout;
const headerHeight = 90;

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
                <div>
                    <Image height={headerHeight}
                           src="https://www.levi9.com/wp-content/uploads/2020/08/LogoLevi9-630-1.png"
                           preview={false}
                    />
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{position: 'relative', margin: 10, marginRight: 40, bottom: 6}}>
                        <Badge count={countNum} overflowCount={999} offset={[15, 0]}
                               style={{backgroundColor: '#494d53', fontWeight: 900, fontSize: 14}}>
                            <a href="/cart" style={{fontWeight: 900, fontSize: 14}}>Cart</a>
                        </Badge>
                    </div>
                    <div>
                        <Dropdown overlay={menu}>
                            <Button>
                                <StarFilled />Guest <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </Header>
    )
}

export default PageHeader;
