import { Chart, SeriesOptionsType } from 'highcharts';
import React, { useEffect, useMemo, useState } from 'react'
import { HighchartsReact } from 'highcharts-react-official';
import Highcharts from 'highcharts'
import LoadflowCollection from '../services/collections/LoadflowCollection';

interface ChartDataProps {
    series: SeriesOptionsType[] | unknown[] | any[];
    title: string;
    xAxisTitle: string;
    yAxisTitle: string;
    group: string;
}

const BarChart: any = () => {
    const [chartData, setChartData] = useState<ChartDataProps | null | any>(null);

    useEffect(() => {
        //    const data = LoadflowCollection.getAllStations().then((result: any) => {
        //          result.object.map((item: any) => [
        //             item,
        //             item.primary_substation,
        //             item.period,
        //             item.n_timestamps,
        //             item.n_successful,
        //             item.n_failed,
        //             item.success_percentage,
        //             item.simulation_id,
        //             item.version_id,
        //             item.name,
        //         ])

        //     })

        const data = LoadflowCollection.getAllStations().then((result: any) => {

            setChartData({
                series: [
                    {
                        name: 'Loadflow',
                        data: result.object.map((item: any) => [item.n_timestamps, item.success_percentage]),
                        // data: data?.map((item: any) => [item[2], item[1]]),
                        pointPlacement: 'between',
                    },
                ],
                title: "loadflow",
                yAxisTitle: "Percentage",
                xAxisTitle: "Year",
                group: "nkforsyning",
            });

        }) as any
    }, [])


    const options = {
        chart: {
            zoomType: 'x',
            type: 'column',
        },
        title: {
            text: chartData?.title,
        },
        xAxis: {
            title: {
                text: chartData?.xAxisTitle,
            },
        },
        yAxis: {
            title: {
                text: chartData?.yAxisTitle,
            },
        },
        series: chartData?.series,
    }

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )
}

export default BarChart