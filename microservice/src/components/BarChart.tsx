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
        // LoadflowCollection.getAllStations().then((result: any) => {
        //     setChartData({
        //         series: [
        //             {
        //                 name: '',
        //                 data: result.object.map((item: any) => item)
        //             },
        //         ],
        //         title: "loadflow nkforsyning",
        //         yAxisTitle: "Success Percentage",
        //         xAxisTitle: "Period",
        //         group: "nkforsyning",
        //         categories: result.object.map((item: any) => item.primary_substation)
        //     });
        // })

        const data = [{
            "primary_substation": "HOL",
            "period": "2020-08",
            "n_timestamps": "577",
            "n_successful": "0",
            "n_failed": "577",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "MML",
            "period": "2020-08",
            "n_timestamps": "571",
            "n_successful": "0",
            "n_failed": "571",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "NSV",
            "period": "2020-08",
            "n_timestamps": "611",
            "n_successful": "0",
            "n_failed": "611",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "YDN",
            "period": "2020-08",
            "n_timestamps": "583",
            "n_successful": "0",
            "n_failed": "583",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "HOL",
            "period": "2020-09",
            "n_timestamps": "497",
            "n_successful": "0",
            "n_failed": "497",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "MML",
            "period": "2020-09",
            "n_timestamps": "461",
            "n_successful": "0",
            "n_failed": "461",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "NSV",
            "period": "2020-09",
            "n_timestamps": "450",
            "n_successful": "0",
            "n_failed": "450",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "YDN",
            "period": "2020-09",
            "n_timestamps": "497",
            "n_successful": "0",
            "n_failed": "497",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "HOL",
            "period": "2020-10",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "MML",
            "period": "2020-10",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "NSV",
            "period": "2020-10",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "YDN",
            "period": "2020-10",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "HOL",
            "period": "2020-11",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "MML",
            "period": "2020-11",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "NSV",
            "period": "2020-11",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "YDN",
            "period": "2020-11",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "HOL",
            "period": "2020-12",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "MML",
            "period": "2020-12",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "NSV",
            "period": "2020-12",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "YDN",
            "period": "2020-12",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "HOL",
            "period": "2021-01",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "MML",
            "period": "2021-01",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "NSV",
            "period": "2021-01",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "YDN",
            "period": "2021-01",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "HOL",
            "period": "2021-02",
            "n_timestamps": "672",
            "n_successful": "0",
            "n_failed": "672",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "MML",
            "period": "2021-02",
            "n_timestamps": "672",
            "n_successful": "0",
            "n_failed": "672",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "NSV",
            "period": "2021-02",
            "n_timestamps": "672",
            "n_successful": "0",
            "n_failed": "672",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "YDN",
            "period": "2021-02",
            "n_timestamps": "672",
            "n_successful": "0",
            "n_failed": "672",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "HOL",
            "period": "2021-03",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "MML",
            "period": "2021-03",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "NSV",
            "period": "2021-03",
            "n_timestamps": "738",
            "n_successful": "0",
            "n_failed": "738",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "YDN",
            "period": "2021-03",
            "n_timestamps": "739",
            "n_successful": "0",
            "n_failed": "739",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "HOL",
            "period": "2021-04",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "MML",
            "period": "2021-04",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "NSV",
            "period": "2021-04",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "YDN",
            "period": "2021-04",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "HOL",
            "period": "2021-05",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "MML",
            "period": "2021-05",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "NSV",
            "period": "2021-05",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "YDN",
            "period": "2021-05",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "HOL",
            "period": "2021-06",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "MML",
            "period": "2021-06",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "NSV",
            "period": "2021-06",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "YDN",
            "period": "2021-06",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "HOL",
            "period": "2021-07",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "MML",
            "period": "2021-07",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "NSV",
            "period": "2021-07",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "YDN",
            "period": "2021-07",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "HOL",
            "period": "2021-08",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "MML",
            "period": "2021-08",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "NSV",
            "period": "2021-08",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "YDN",
            "period": "2021-08",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "HOL",
            "period": "2021-09",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "MML",
            "period": "2021-09",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "NSV",
            "period": "2021-09",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "YDN",
            "period": "2021-09",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "HOL",
            "period": "2021-10",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "MML",
            "period": "2021-10",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "NSV",
            "period": "2021-10",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "YDN",
            "period": "2021-10",
            "n_timestamps": "744",
            "n_successful": "0",
            "n_failed": "744",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "HOL",
            "period": "2021-11",
            "n_timestamps": "720",
            "n_successful": "420",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "MML",
            "period": "2021-11",
            "n_timestamps": "720",
            "n_successful": "0",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "NSV",
            "period": "2021-11",
            "n_timestamps": "720",
            "n_successful": "320",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        }, {
            "primary_substation": "YDN",
            "period": "2021-11",
            "n_timestamps": "720",
            "n_successful": "60",
            "n_failed": "720",
            "success_percentage": "0.0",
            "simulation_id": "320",
            "version_id": "384",
            "name": "nkforsyning"
        },
        ]

        const stationHOL = data.filter((item: any) => item.primary_substation === "HOL").map((item: any, index: any) => {
            return [item.n_successful, item.n_failed];
        });

        const stationMML = data.filter((item: any) => item.primary_substation === "MML")
        const stationNSV = data.filter((item: any) => item.primary_substation === "NSV")
        const stationYDN = data.filter((item: any) => item.primary_substation === "YDN")

        console.log(stationHOL)

        const failedHOL = stationHOL.map((item: any) => item[1]).map(Number)
        const successHOL = stationHOL.map((item: any) => item[0]).map(Number)

        const failedMML = stationMML.map((item: any) => item.n_failed).map(Number)
        const successMML = stationMML.map((item: any) => item.n_successful).map(Number)


        const averageSuccessHOL = successHOL.reduce((a, b) => a + b, 0) / successHOL.length;
        const averageFailedHOL = failedHOL.reduce((a, b) => a + b, 0) / failedHOL.length;

        const averageSuccessMML = successMML.reduce((a, b) => a + b, 0) / successMML.length;
        const averageFailedMML = failedMML.reduce((a, b) => a + b, 0) / failedMML.length;




        setChartData({
            series: [
                {
                    name: 'Successfull',
                    data: [averageSuccessHOL, averageSuccessMML, 1, 13]
                }, {
                    name: 'Failed',
                    data: [averageFailedHOL, averageFailedMML, 8, 12]
                }
            ],
            title: "loadflow nkforsyning",
            yAxisTitle: "Success Percentage",
            xAxisTitle: "Period",
            group: "nkforsyning",
            categories: data.map((item: any) => item.primary_substation)
        });

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