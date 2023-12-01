import { Chart } from 'highcharts';
import React, { useMemo, useState } from 'react'
import { ChartDataProps } from './Chart';
import { HighchartsReact } from 'highcharts-react-official';
import Highcharts from 'highcharts'


const BarChart: any = () => {
    const options = {
        title: {
            text: 'My chart'
        },
        series: [{
            data: [1, 2, 3]
        }]
    }

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )
}

export default BarChart