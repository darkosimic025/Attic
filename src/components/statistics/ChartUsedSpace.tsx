import React from 'react';

/*Libraries*/
import { Doughnut as Chart } from 'react-chartjs-2';

/*Hooks*/
import { useSelector } from 'react-redux';

/*Store*/
import { RootState } from 'store/store';

/*Types*/
import { UserData } from 'store/types';

/*Helpers*/
import { convertMBtoGB } from 'utils/helpers';

/*Constants*/
import { chartData, chartOptions } from './ChartUsedSpaceData';

export const ChartUsedSpace = () => {
  const { usedSpace, freeSpace } = useSelector<RootState, UserData>((state) => state.user);
  const sizeOfChart = 500;
  const data = chartData(convertMBtoGB({ usedSpace, freeSpace }));

  return <Chart data={data} options={chartOptions} width={sizeOfChart} height={sizeOfChart} />;
};
