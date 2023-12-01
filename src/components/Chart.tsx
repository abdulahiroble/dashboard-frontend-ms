// import moment from 'moment-timezone';
// import styled from 'styled-components';
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import { useSelector } from 'react-redux';
// import { useLocale } from 'hooks';
// import { selectedTimezoneSelector } from 'modules/app/selectors';
// import { Spinner, ErrorBoundary } from 'components/_common';
// import { getIntlExporting } from 'utils';
// import { emptyObject } from 'constants/index';

export const Colors = ['#12f9ff', '#00a6ab', '#a0e101', '#6a9501'];

require('highcharts/modules/boost')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/accessibility')(Highcharts);
require('highcharts/modules/no-data-to-display')(Highcharts);

export interface ChartDataProps {
    rating?: number;
    seriesHash: { [key: string]: [number, number][] };
    zIndex: { [key: string]: number };
    title: string;
    xAxisTitle: string;
    yAxisTitle: string;
    legendTitle?: string;
    chartType?: 'line' | 'column';
}

interface Props {
    options: Highcharts.Options | null;
    className?: string;
    height?: string;
}

const Chart: React.FC<Props> = ({ options, className }) => {

    //   if (!options) {
    // return (
    //   <div className={className}>
    {/* <Spinner isInFullHeightContainer /> */ }
    {/* </div> */ }
    // );
    //   }

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={{
                ...options,
            }}
            containerProps={{ className }}
        />
    );
};

export default Chart;


// const StyledChart = styled(Chart)<{ height?: string }>`
//   position: relative;

//   .highcharts-credits {
//     display: none;
//   }

//   .highcharts-axis-title {
//     font-size: 16px;
//   }
// `;

// export default StyledChart;

export const transformAction = (action: any) => {
    if (!Object.keys(action.payload).length) return {} as ChartDataProps;

    const keys = Object.keys(action.payload.ts_data[0]).filter(
        key => !['time', 'tenant_id'].includes(key)
    );

    const seriesHash = action.payload.ts_data.reduce((acc: any, item: any) => {
        keys.forEach(key => {
            const elem = [item.time * 1000, item[key]];
            if (!acc[key]) {
                acc[key] = [elem];
            } else {
                acc[key].push(elem);
            }
        });
        return acc;
    }, {});

    return {
        rating: action.payload.horizontal_line,
        seriesHash,
        title: action.payload.title,
        yAxisTitle: action.payload.ylabel,
        xAxisTitle: action.payload.xlabel,
        zIndex: action.payload.z_index,
        chartType: action.payload.chart_type || 'line',
    };
};
