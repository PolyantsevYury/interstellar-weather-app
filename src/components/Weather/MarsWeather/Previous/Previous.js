import React from 'react';
import {PreviousDay, PreviousDays, PreviousWrapper} from "./Previous.styles";
import { List, Card } from 'antd';
import {formatTemperature} from "../../../../helpers";

const Previous = ({
                      marsWeather,
                      setSelectedSol,
                      isMetric,
                      marsLoading,
                  }) => {
    return (
        <PreviousWrapper>
            <h2 className='previous-title'>Previous 7 days</h2>
            <PreviousDays>
                {marsLoading ? (
                    <div>Loading ...</div>
                ) : (
                    <List
                        grid={{gutter: 12, column: 7}}
                        dataSource={marsWeather}
                        style={{minWidth: '1000px'}}
                        renderItem={item => (
                            <List.Item key={marsWeather.sol}>
                                <PreviousDay>
                                    <Card bodyStyle={{padding: 10}}
                                          style={{
                                              color: '#F4F4F4', border: '1px solid #1E1E1E',
                                              borderRadius: 14, backgroundColor: 'rgba(0, 0, 0, 0.6)'
                                          }}>
                                        <h2 className='previous-day__sol'> {item.sol} </h2>
                                        <p className='previous-day__date'> {item.date} </p>
                                        <p className='previous-day__temp'>
                                            High:
                                            <span> {formatTemperature(item.maxTemp, isMetric)}</span>
                                            <span> {isMetric ? ' C' : ' F'} </span>
                                        </p>
                                        <p className='previous-day__temp'>
                                            Low:
                                            <span> {formatTemperature(item.minTemp, isMetric)} </span>
                                            <span> {isMetric ? ' C' : ' F'} </span>
                                        </p>
                                        <div onClick={() => setSelectedSol(item.itemNumber)}
                                             className='previous-day__more-info'>
                                            <span>More info</span>
                                        </div>
                                    </Card>
                                </PreviousDay>
                            </List.Item>
                        )}
                    />
                )}
            </PreviousDays>
        </PreviousWrapper>
    )
};

export default Previous;