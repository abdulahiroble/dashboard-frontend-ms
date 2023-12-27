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
    const [chartData, setChartData] = useState<ChartDataProps | null>(null);

    useEffect(() => {
        LoadflowCollection.getAllStations().then((result: any) => {
            console.log(result)
            // setChartData(result.object)
        })

        setChartData({
            series: [
                {
                    name: 'Percentage success',
                    data: [1, 2, 3, 4, 5],
                    pointPlacement: 'between',
                },
            ],
            title: "loadflow",
            yAxisTitle: "Percentage success",
            xAxisTitle: "Year",
            group: "nkforsyning",
        });

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