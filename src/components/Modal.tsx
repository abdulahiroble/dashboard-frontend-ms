import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Marker } from '@react-google-maps/api';
// import Logo from './Logo';
import Logo from '../logo.svg';

const ModalComponent = ({ stations }: any) => {
    // console.log(stations.map((x: any) => x.MML))

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStation, setSelectedStation] = useState(null);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const stationCity = (station: any) => {
        console.log(station)
        setSelectedStation(station)
    }

    const myCity = {
        lat: [55.22503702871599, 11.750777235661934],
        lng: [55.24673402394817, 11.77157725310437]
    };

    return (
        <>
            <div>
                {stations.map((station: any) => (
                    <>
                        <Marker
                            key={station.MML}
                            position={{
                                lat: station.MML[0],
                                lng: station.MML[1]
                            }}
                            onClick={() => showModal()}
                        />
                        <Marker
                            key={station.HOL}
                            position={{
                                lat: station.HOL[0],
                                lng: station.HOL[1]
                            }}
                            onClick={() => showModal()}
                        />
                        <Marker
                            key={station.YDN}
                            position={{
                                lat: station.YDN[0],
                                lng: station.YDN[1]
                            }}
                            onClick={() => showModal()}
                        />
                        <Marker
                            key={station.NSV}
                            position={{
                                lat: station.NSV[0],
                                lng: station.NSV[1]
                            }}
                            onClick={() => showModal()}
                        />
                    </>
                ))}
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export default ModalComponent;