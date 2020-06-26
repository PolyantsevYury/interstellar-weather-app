import React from 'react';
import {PreviousDay, PreviousDays, PreviousWrapper} from "./Previous.styles";
import { List, Card } from 'antd';
import {formatTemperature} from "../helpers";

const data = [
    {
        title: '555',
    },
    {
        title: '556',
    },
    {
        title: '556',
    },
    {
        title: '556',
    },
    {
        title: '556',
    },
    {
        title: '556',
    },
    {
        title: '556',
    },
];

const Previous = ({ isMetric }) => {
    return (
        <PreviousWrapper>
            <h2 className='previous-title'>Previous 7 days</h2>
            <PreviousDays>
                <List
                    grid={{ gutter: 12, column: 7 }}
                    dataSource={data}
                    style={{minWidth: '1000px'}}
                    renderItem={item => (
                        <List.Item>
                            <PreviousDay>
                                <Card bodyStyle={{ padding: 10 }}
                                      style={{ color: '#F4F4F4', border: '1px solid #1E1E1E', borderRadius: 14, backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                                    <h2 className='previous-day__sol'> 556 </h2>
                                    <p className='previous-day__date'> June 20 </p>
                                    <p className='previous-day__temp'>
                                        High:
                                        <span> {formatTemperature(-4, isMetric)}</span>
                                        <span> {isMetric ? ' C' : ' F'} </span>
                                    </p>
                                    <p className='previous-day__temp'>
                                        Low:
                                        <span> {formatTemperature(-90, isMetric)} </span>
                                        <span> {isMetric ? ' C' : ' F'} </span>
                                    </p>
                                    <div className='previous-day__more-info'>
                                        <span>More info</span>
                                    </div>
                                </Card>
                            </PreviousDay>
                        </List.Item>
                    )}
                />
            </PreviousDays>
        </PreviousWrapper>
    )
};

export default Previous;