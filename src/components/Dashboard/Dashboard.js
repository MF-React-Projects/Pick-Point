import './Dashboard.css';
import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {
    Area,
    AreaChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const Dashboard = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        fetch('data/data.json')
            .then(res => res.json())
            .then(data => {
                setChartData(data);
            })
    }, []);
    return (
        <section className="dashboard-section">
            <Container>
                <Row>
                    <Col md={6}>
                        <h4 className='text-center mb-4'>Monthly Sales Report</h4>
                        <LineChart width={500} height={300} data={chartData}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{r: 5}}/>
                            <XAxis dataKey="month"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                        </LineChart>
                    </Col>

                    <Col md={6}>
                        <h4 className='text-center mb-4'>Investment vs Revenue</h4>
                        <AreaChart
                            width={500}
                            height={300}
                            data={chartData}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="revenue"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8"/>
                            <Area type="monotone" dataKey="revenue" stroke="#003DA7" fill="#003DA7"/>
                        </AreaChart>
                    </Col>


                </Row>
            </Container>
        </section>
    );
};

export default Dashboard;