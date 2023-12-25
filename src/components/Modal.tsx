import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { MarkerF } from '@react-google-maps/api';
// import Logo from './Logo';
import Logo from '../logo.svg';
import LoadFerretCountsCollection from '../services/collections/LoadFerretCountsCollection';
import LoadStationsCollection from '../services/collections/LoadStationsCollection';

const ModalComponent = ({ stations }: any) => {
    console.log(stations)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStation, setSelectedStation] = useState(null);
    const [ferretCounts, setFerretCounts] = useState(null);
    const [station, setStation] = useState(null);

    const showModal = () => {
        setIsModalOpen(true);
        setSelectedStation(station)

        LoadFerretCountsCollection.getAllFerrets().then((result: any) => {
            setFerretCounts(result.object)
        })
    };


    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const stationCity = (station: any) => {
        console.log(station)
    }

    return (
        <>
            <div>
                {stations && (
                    stations.map((marker: any) => (
                        <MarkerF key={marker.id} position={marker.position} onClick={() => showModal()} />
                    ))
                )}
                <Modal title={"Basic Modal"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        </>
    );
};

export default ModalComponent;