import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { MarkerF } from '@react-google-maps/api';
import LoadflowCollection from '../services/collections/LoadflowCollection';
import LoadForbrugsCollection from '../services/collections/LoadForbrugsCollection';
import LoadFerretConnectedness from '../services/collections/LoadFerretConnectedness';
import Logo from '../transformer-power-voltage-energy-electronic-svgrepo-com.svg';

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
                            icon={{
                                url: Logo,
                                origin: new window.google.maps.Point(0, 0),
                                anchor: new window.google.maps.Point(20, 20),
                                scaledSize: new window.google.maps.Size(40, 40),
                                fillColor: "#000",
                            }}
                        />
                    ))
                )}
                <Modal title={`Station - ${selectedStation}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    {ferretConnectedness?.slice(0, 4)?.map((item: any) => item.values_by_station?.map((x: any) => (
                        x.station_name === selectedStation && (
                            <div key={x.id}>
                                <p>Time started: {new Date(item.time_started).toLocaleString()}</p>
                                <p>Time finished: {new Date(item.time_finished).toLocaleString()}</p>
                                <p>Version: {item.version_id}</p>
                                <p>Connectedness: {x.connectedness}%</p>
                                <hr />
                            </div>
                        )
                    )))}
                </Modal>
            </div>
        </>
    );
};

export default ModalComponent;