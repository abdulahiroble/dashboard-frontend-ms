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
            const stationMML = result.object.filter((item: any) => item.primary_substation === "MML").map((item: any) => [item.n_failed, item.n_successful].map(Number))
            const stationNSV = result.object.filter((item: any) => item.primary_substation === "NSV").map((item: any) => [item.n_failed, item.n_successful].map(Number))
            const stationYDN = result.object.filter((item: any) => item.primary_substation === "YDN").map((item: any) => [item.n_failed, item.n_successful].map(Number))

            const hol = [stationHOL.map((item: any) => item[0]).reduce((a: any, b: any) => a + b, 0) / stationHOL.length, stationHOL.map((item: any) => item[1]).reduce((a: any, b: any) => a + b, 0) / stationHOL.length]
            const mml = [stationMML.map((item: any) => item[0]).reduce((a: any, b: any) => a + b, 0) / stationMML.length, stationMML.map((item: any) => item[1]).reduce((a: any, b: any) => a + b, 0) / stationMML.length]
            const nsv = [stationNSV.map((item: any) => item[0]).reduce((a: any, b: any) => a + b, 0) / stationNSV.length, stationNSV.map((item: any) => item[1]).reduce((a: any, b: any) => a + b, 0) / stationNSV.length]
            const ydn = [stationYDN.map((item: any) => item[0]).reduce((a: any, b: any) => a + b, 0) / stationYDN.length, stationYDN.map((item: any) => item[1]).reduce((a: any, b: any) => a + b, 0) / stationYDN.length]

            const averageHol = [(hol[0] / hol.reduce((a, b) => a + b, 0) * 100).toFixed(0), (hol[1] / hol.reduce((a, b) => a + b, 0) * 100).toFixed(0)];
            const averageMml = [(mml[0] / mml.reduce((a, b) => a + b, 0) * 100).toFixed(0), (mml[1] / mml.reduce((a, b) => a + b, 0) * 100).toFixed(0)];
            const averageNsv = [(nsv[0] / nsv.reduce((a, b) => a + b, 0) * 100).toFixed(0), (nsv[1] / nsv.reduce((a, b) => a + b, 0) * 100).toFixed(0)];
            const averageYdn = [(ydn[0] / ydn.reduce((a, b) => a + b, 0) * 100).toFixed(0), (ydn[1] / ydn.reduce((a, b) => a + b, 0) * 100).toFixed(0)];

            setChartData({
                series: [
                    {
                        name: 'Successfull %',
                        data: [parseInt(averageHol[0]), parseInt(averageMml[0]), parseInt(averageNsv[0]), parseInt(averageYdn[0])]
                    }, {
                        name: 'Failed %',
                        data: [parseInt(averageHol[1]), parseInt(averageMml[1]), parseInt(averageNsv[1]), parseInt(averageYdn[1])]
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
            tickInterval: 10,
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