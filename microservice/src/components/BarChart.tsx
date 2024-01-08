import { Chart, SeriesOptionsType } from 'highcharts';
import React, { useEffect, useMemo, useState } from 'react'
import { HighchartsReact } from 'highcharts-react-official';
import Highcharts from 'highcharts'
import LoadflowCollection from '../services/collections/LoadflowCollection';
import HighchartsExporting from 'highcharts/modules/exporting';
import timeline from 'highcharts/modules/timeline';

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

            setChartData({
                series: [
                    {
                        name: 'Successfull',
                        data: [averageSuccessHOL, averageSuccessMML, averageSuccessNSV, averageSuccessYDN]
                    }, {
                        name: 'Failed',
                        data: [averageFailedHOL, averageFailedMML, averageFailedNSV, averageFailedYDN]
                    }
                ],
                title: "loadflow nkforsyning",
                yAxisTitle: "Success Percentage",
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
            highcharts={Highcharts}
            options={options}
        />
    )
}


//     const options = {
//         chart: {
//             type: 'column'
//         },
//         title: {
//             text: 'Major trophies for some English teams',
//             align: 'left'
//         },
//         xAxis: {
//             categories: ['Arsenal', 'Chelsea', 'Liverpool', 'Manchester United']
//         },
//         yAxis: {
//             min: 0,
//             title: {
//                 text: 'Count trophies'
//             },
//             stackLabels: {
//                 enabled: true
//             }
//         },
//         legend: {
//             align: 'left',
//             x: 70,
//             verticalAlign: 'top',
//             y: 70,
//             floating: true,
//             borderWidth: 1,
//             shadow: false
//         },
//         tooltip: {
//             headerFormat: '<b>{point.x}</b><br/>',
//             pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
//         },
//         plotOptions: {
//             column: {
//                 stacking: 'normal',
//                 dataLabels: {
//                     enabled: true
//                 }
//             }
//         },
//         series: [{
//             name: 'BPL',
//             data: [3, 5, 1, 13]
//         }, {
//             name: 'FA Cup',
//             data: [14, 8, 8, 12]
//         }, {
//             name: 'CL',
//             data: [0, 2, 6, 3]
//         }]
//     };

//     return (
//         <HighchartsReact
//             highcharts={Highcharts}
//             options={options}
//         />
//     )
// }

export default BarChart