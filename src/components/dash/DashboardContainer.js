import React, { Component } from 'react'
import { Breadcrumb, Icon, Row, Col } from 'antd'
import { Line } from 'react-chartjs-2';
const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "My First dataset",
        // backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
        label: "My Secon dataset",
        // backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(150, 99, 50)',
        data: [10, 1, 7, 45, 30, 20, 33],
    }]
}
class DashboardContainer extends Component {

    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item> <Icon type="home" /> </Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard [ NB_EMPRESA ]</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff' }}>
                    <Row style={{ border: '1px solid goldenrod', padding: '8px', marginBottom: '10px' }}>
                        <Col span={24}>
                            <h1>Gráfica grande</h1>
                            <Line data={data} width={1200} height={300} options={{ maintainAspectRatio: true, responsive: false, }} />
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
