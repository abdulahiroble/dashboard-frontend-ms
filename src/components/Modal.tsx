import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { MarkerF } from '@react-google-maps/api';
// import Logo from './Logo';
import Logo from '../logo.svg';
import LoadFerretCountsCollection from '../services/collections/LoadFerretCountsCollection';
import LoadStationsCollection from '../services/collections/LoadStationsCollection';
import LoadflowCollection from '../services/collections/LoadflowCollection';
import LoadForbrugsCollection from '../services/collections/LoadForbrugsCollection';

const ModalComponent = ({ stations }: any) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStation, setSelectedStation] = useState(null);
    const [ferretCounts, setFerretCounts] = useState(null);
    const [station, setStation] = useState(null);
    const [loadflow, setLoadflow] = useState<any>(null);

    const showModal = (station: any) => {
        setIsModalOpen(true);
        // console.log(station)
        setSelectedStation(station)

        LoadFerretCountsCollection.getAllFerrets().then((result: any) => {
            setFerretCounts(result.object)
        })
        LoadflowCollection.getAllStations().then((result: any) => {
            setLoadflow(result.object)
        })
        LoadForbrugsCollection.getAllForbrug().then((result: any) => {
            // console.log(result.object)
            // setLoadflow(result.object)
        })
    };



    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div>
                {stations && (
                    stations.map((marker: any) => (
                        <MarkerF key={marker.id} position={marker.position}
                            onClick={() => showModal(marker.id)}
                        />
                    ))
                )}
                <Modal title={`Station - ${selectedStation}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    {/* {loadflow?.map((item: any) => item.primary_substation === "HOL" && (
                        <div>
                            <h3>Loadflow</h3>
                            <p>Name: {item.name}</p>
                            <p>Substation: {item.primary_substation}</p>
                            <p>Period: {item.period}</p>
                            <p>Time stamps: {item.n_timestamps}</p>
                            <p>Failed: {item.n_failed}</p>
                            <p>Success: {item.success_percentage}</p>
                            <p>Simulation: {item.simulation_id}</p>
                            <p>Version: {item.version_id}</p>
                        </div>
                    ))} */}
                    {loadflow?.slice(0, 4).map((item: any) => item.primary_substation === selectedStation && (
                        <div key={item.id}>
                            <h3>Loadflow</h3>
                            <p>Name: {item.name}</p>
                            <p>Substation: {item.primary_substation}</p>
                            <p>Period: {item.period}</p>
                            <p>Time stamps: {item.n_timestamps}</p>
                            <p>Failed: {item.n_failed}</p>
                            <p>Success: {item.success_percentage}</p>
                            <p>Simulation: {item.simulation_id}</p>
                            <p>Version: {item.version_id}</p>
                        </div>
                    ))}

                </Modal>
            </div>
        </>
    );
};

export default ModalComponent;