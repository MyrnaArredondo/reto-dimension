import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


export default class HomeContainer extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item> <Icon type="home" /> </Breadcrumb.Item>
                            <Breadcrumb.Item>Bienvenida</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            Aquí van la pantalla principal
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        IronHack ©2018 Created by MefitDev, MyrnaAR.
                        </Footer>
                </Layout>
            </div>
        )
    }
}
