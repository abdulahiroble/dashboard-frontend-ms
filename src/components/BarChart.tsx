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
        LoadflowCollection.getAllStations().then((result: any) => {



            const datas = result.object.map((item: any, index: any) => {
                // const firstCountsArray = item[index]

                // const firstCounts = firstCountsArray[index];

                return [item.primary_substation, new Date(item.period).toLocaleDateString(), item.n_timestamps, item.n_successful, item.n_failed, item.success_percentage, item.simulation_id, item.version_id, item.name];
            });

            // console.log(datas.map((item: any) => item[1]))


            setChartData({
                series: [
                    {
                        name: "Success",
                        data: datas.map((item: any) => item[2])
                    },
                    {
                        name: "Failed",
                        data: datas.map((item: any) => item[4])
                    },
                    {
                        name: "Success Percentage",
                        data: datas.map((item: any) => parseFloat(item[5]))
                    },
                    {
                        name: "Simulation ID",
                        data: datas.map((item: any) => item[6])
                    },
                    {
                        name: "Version ID",
                        data: datas.map((item: any) => item[7])
                    },
                    {
                        name: "Name",
                        data: datas.map((item: any) => item[8])
                    }
                ],
                title: "loadflow nkforsyning",
                yAxisTitle: "Success Percentage",
                xAxisTitle: "Period",
                group: "nkforsyning",
                categories: datas.map((item: any) => item[1]),
            });


        })

    }, [])

    // console.log(chartData?.series.map((item: any) => item.data.map((item: any) => item[1])))

    // console.log(chartData?.series.map((item: any) => item.data.map((item: any) => item)))

    // console.log(chartData?.series.map((item: any) => item.data.map((item: any) => item[2])))

    // console.log(chartData?.series.map((item: any) => item.data.map((item: any) => parseFloat(item[1]))))

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