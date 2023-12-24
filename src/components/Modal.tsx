import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Marker } from '@react-google-maps/api';
// import Logo from './Logo';
import Logo from '../logo.svg';

const ModalComponent = ({ stations }: any) => {
    // console.log(stations.map((x: any) => x))

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

    return (
        <>
            <div>
                {stations && (
                    stations?.map((station: any) => (
                        <>
                            <Marker
                                key={station.MML}
                                position={{
                                    lat: parseFloat(station.MML[0]),
                                    lng: parseFloat(station.MML[1])
                                }}
                                onClick={() => showModal()}
                            />
                            {/* <Marker
                                key={station.HOL}
                                position={{
                                    lat: parseFloat(station.HOL[0]),
                                    lng: parseFloat(station.HOL[1])
                                }}
                                onClick={() => showModal()}
                            />
                            <Marker
                                key={station.YDN}
                                position={{
                                    lat: parseFloat(station.YDN[0]),
                                    lng: parseFloat(station.YDN[1])
                                }}
                                onClick={() => showModal()}
                            />
                            <Marker
                                key={station.NSV}
                                position={{
                                    lat: parseFloat(station.NSV[0]),
                                    lng: parseFloat(station.NSV[1])
                                }}
                                onClick={() => showModal()}
                            /> */}
                            <Modal title={"Basic Modal"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                        </>
                    ))
                )}
            </div>
            {/* <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal> */}
        </>
    );
};

export default ModalComponent;