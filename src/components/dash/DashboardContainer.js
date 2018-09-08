import React, { Component } from 'react'
import { Breadcrumb, Icon, Row, Col } from 'antd'

class DashboardContainer extends Component {
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item> <Icon type="home" /> </Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard [ NB_EMPRESA ]</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff' }}>
                    <Row style={{ border: '1px solid goldenrod', padding: '8px', height: '350px', marginBottom: '10px' }}>
                        <Col span={24}>
                            <h1>Gráfica grande</h1>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col span={16} style={{ border: '1px solid goldenrod', padding: '8px' }}>
                            Gráfica Mediana
                        </Col>
                        <Col span={8} style={{ border: '1px solid goldenrod', padding: '8px' }}>
                            Gráfica Chica
                        </Col>
                    </Row>
                </div>
            </div >
        )
    }
}

export default DashboardContainer
