import { SeriesOptionsType } from 'highcharts';
import React, { useEffect, useMemo, useState } from 'react'
import { HighchartsReact } from 'highcharts-react-official';
import Highcharts from 'highcharts'
import LoadflowCollection from '../services/collections/LoadflowCollection';
import HighchartsExporting from 'highcharts/modules/exporting';
import timeline from 'highcharts/modules/timeline';
import Chart from './Chart';

HighchartsExporting(Highcharts);
timeline(Highcharts);

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
        LoadflowCollection.getAllLoadflow().then((result: any) => {
            const stationHOL = result.object.filter((item: any) => item.primary_substation === "HOL").map((item: any) => [item.n_failed, item.n_successful].map(Number))
            const stationMML = result.object.filter((item: any) => item.primary_substation === "MML")
            const stationNSV = result.object.filter((item: any) => item.primary_substation === "NSV")
            const stationYDN = result.object.filter((item: any) => item.primary_substation === "YDN")

            const x = stationHOL.map((item: any) => item[0]).reduce((a: any, b: any) => a + b, 0) / stationHOL.length;
            const y = stationHOL.map((item: any) => item[1]).reduce((a: any, b: any) => a + b, 0) / stationHOL.length

            const averageSucessHol = (x / (x + y) * 100).toFixed(0);
            const averageFailedHol = (y / (x + y) * 100).toFixed(0);

            setChartData({
                series: [
                    {
                        name: 'Successfull %',
                        data: [parseInt(averageSucessHol)]
                    }, {
                        name: 'Failed %',
                        data: [parseInt(averageFailedHol)]
                    }
                ],
                title: "loadflow nkforsyning",
                yAxisTitle: "Success",
                xAxisTitle: "Period",
                group: "nkforsyning",
                categories: result.object.map((item: any) => item.primary_substation)
            });
        })
    }, [])


    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: chartData?.title,
            align: 'center',
        },
        xAxis: {
            categories: chartData?.categories,
        },
        yAxis: {
            min: 0,
            title: {
                text: chartData?.yAxisTitle
            },
        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical',
            itemMarginBottom: 15,
            padding: 15,
            y: 30,
            borderWidth: 1,
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: chartData?.series,
    };

    return (
        <HighchartsReact
            options={options}
            highcharts={Highcharts}
        />
    )
}

export default BarChart