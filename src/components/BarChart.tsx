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
            setChartData({
                series: [
                    {
                        name: 'Success Percentage',
                        data: result.object.map((item: any) => [Date.parse(item.period), item.success_percentage]),
                    },
                ],
                title: "loadflow",
                yAxisTitle: "Percentage",
                // xAxisTitle: "Success Percentage",
                group: "nkforsyning",
            });

        })
    }, [])


    const options = {
        chart: {
            type: 'column',
            zoomType: 'x'
        },
        title: {
            text: chartData?.title,
        },
        xAxis: {
            type: 'datetime',
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

    // var dates = ["2019-06-14 17:00:00", "2019-06-14 17:01:00", "2021-04-13 06:15:00"]

    // const options = {
    //     chart: {
    //         type: 'column',
    //         zoomType: 'x'
    //     },

    //     title: {
    //         text: 'Wavy Date Filter'
    //     },

    //     xAxis: {
    //         type: 'datetime',
    //         // This is from the Highcharts Stock - Stock license required
    //         ordinal: true,
    //         tickPositioner: function () {
    //             return dates.map(function (date) {
    //                 return Date.parse(date);
    //             });
    //         }
    //     },

    //     yAxis: {
    //         min: 0,
    //         title: {
    //             text: 'Observations'
    //         }
    //     },

    //     plotOptions: {
    //         column: {
    //             pointPadding: 0.2,
    //             borderWidth: 0
    //         }
    //     },

    //     legend: {
    //         title: {
    //             text: 'Observations'
    //         }
    //     },
    //     series: [{
    //         type: 'column',
    //         data: (function () {
    //             return dates.map(function (date, i) {
    //                 return [Date.parse(date)];
    //             });
    //         })()
    //     }]
    // };

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )
}

export default BarChart