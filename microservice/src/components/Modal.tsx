import { useState } from 'react';
import { Modal } from 'antd';
import { MarkerF } from '@react-google-maps/api';
import LoadflowCollection from '../services/collections/LoadflowCollection';
import LoadFerretConnectedness from '../services/collections/LoadFerretConnectedness';
import Logo from '../transformer-power-voltage-energy-electronic-svgrepo-com.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setIsModalOpen, setFerretConnectedness } from '../features/Modal/ModalSlice';

const ModalComponent = ({ stations }: any) => {

    const [selectedStation, setSelectedStation] = useState(null);

    const isModalOpen = useSelector((state: RootState) => state.modal.isModalOpen)
    const ferretConnectedness = useSelector((state: RootState) => state.modal.ferretConnectedness)

    const dispatch = useDispatch()

    const showModal = (station: any) => {
        dispatch(setIsModalOpen(true))
        setSelectedStation(station)

        LoadFerretConnectedness.getAllFerretConnectedness().then((result: any) => {
            dispatch(setFerretConnectedness(result.object))
        })

        LoadflowCollection.getAllLoadflow().then((result: any) => {
            dispatch({ type: 'modal/setLoadflow', payload: result.object })
        })
    };

    const handleOk = () => {
        dispatch(setIsModalOpen(false))
    };

    const handleCancel = () => {
        dispatch(setIsModalOpen(false))
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