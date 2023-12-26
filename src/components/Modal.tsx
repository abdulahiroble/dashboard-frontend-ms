import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { MarkerF } from '@react-google-maps/api';
import LoadflowCollection from '../services/collections/LoadflowCollection';
import LoadForbrugsCollection from '../services/collections/LoadForbrugsCollection';
import LoadFerretConnectedness from '../services/collections/LoadFerretConnectedness';

const ModalComponent = ({ stations }: any) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStation, setSelectedStation] = useState(null);
    const [ferretConnectedness, setFerretConnectedness] = useState<any>(null);
    const [station, setStation] = useState(null);
    const [loadflow, setLoadflow] = useState<any>(null);

    const showModal = (station: any) => {
        setIsModalOpen(true);
        // console.log(station)
        setSelectedStation(station)

        LoadFerretConnectedness.getAllFerretConnectedness().then((result: any) => {
            console.log(result.object)
            setFerretConnectedness(result.object)
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
                    {/* {loadflow?.slice(0, 4).map((item: any) => item.primary_substation === selectedStation && (
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
                    ))} */}
                    {ferretConnectedness?.slice(0, 4).map((item: any) => item.name === "nkforsyning" && (
                        <div key={item.id}>
                            <h3>Ferret Connectedness</h3>
                            <p>Station: {item.overall_connectedness}</p>
                            {/* <p>Period: {item.period}</p>
                            <p>Time stamps: {item.n_timestamps}</p>
                            <p>Failed: {item.n_failed}</p>
                            <p>Success: {item.success_percentage}</p>
                            <p>Simulation: {item.simulation_id}</p>
                            <p>Version: {item.version_id}</p> */}
                        </div>
                    ))}

                </Modal>
            </div>
        </>
    );
};

export default ModalComponent;