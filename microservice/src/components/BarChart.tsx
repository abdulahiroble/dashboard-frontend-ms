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
            const stationHOL = result.object.filter((item: any) => item.primary_substation === "HOL")
            const stationMML = result.object.filter((item: any) => item.primary_substation === "MML")
            const stationNSV = result.object.filter((item: any) => item.primary_substation === "NSV")
            const stationYDN = result.object.filter((item: any) => item.primary_substation === "YDN")

            const failedHOL = stationHOL.map((item: any) => item.n_failed).map(Number)
            const successHOL = stationHOL.map((item: any) => item.n_successful).map(Number)

            const failedMML = stationMML.map((item: any) => item.n_failed).map(Number)
            const successMML = stationMML.map((item: any) => item.n_successful).map(Number)

            const failedNSV = stationNSV.map((item: any) => item.n_failed).map(Number)
            const successNSV = stationHOL.map((item: any) => item.n_successful).map(Number)

            const failedYDN = stationYDN.map((item: any) => item.n_failed).map(Number)
            const successYDN = stationYDN.map((item: any) => item.n_successful).map(Number)


            const averageSuccessHOL = successHOL.reduce((a: any, b: any) => a + b, 0) / successHOL.length;
            const averageFailedHOL = failedHOL.reduce((a: any, b: any) => a + b, 0) / failedHOL.length;


            const averageSuccessMML = successMML.reduce((a: any, b: any) => a + b, 0) / successMML.length;
            const averageFailedMML = failedMML.reduce((a: any, b: any) => a + b, 0) / failedMML.length;

            const averageSuccessNSV = successNSV.reduce((a: any, b: any) => a + b, 0) / successNSV.length;
            const averageFailedNSV = failedNSV.reduce((a: any, b: any) => a + b, 0) / failedNSV.length;

            const averageSuccessYDN = successYDN.reduce((a: any, b: any) => a + b, 0) / successYDN.length;
            const averageFailedYDN = failedYDN.reduce((a: any, b: any) => a + b, 0) / failedYDN.length;

            const totalHol = averageSuccessHOL + averageFailedHOL;
            const totalMML = averageSuccessMML + averageFailedMML;
            const totalNSV = averageSuccessNSV + averageFailedNSV;
            const totalYDN = averageSuccessYDN + averageFailedYDN;

            const averageSucessHol = (averageSuccessHOL / totalHol * 100).toFixed(0);
            const averageFailedHol = (averageFailedHOL / totalHol * 100).toFixed(0);

            // const totalMML = averageSuccessMML + averageFailedMML;

            // const averageSucessMML = averageSuccessMML / totalMML * 100;
            // const averageFailedMML = averageFailedMML / totalMML * 100;

            setChartData({
                series: [
                    {
                        name: 'Successfull %',
                        data: [parseInt(averageSucessHol), averageSuccessMML, averageSuccessNSV, averageSuccessYDN]
                    }, {
                        name: 'Failed %',
                        data: [parseInt(averageFailedHol), averageFailedMML, averageFailedNSV, averageFailedYDN]
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