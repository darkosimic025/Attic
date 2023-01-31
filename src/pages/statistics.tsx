import React from 'react';

/*Components*/
import { ChartUsedSpace } from 'components/statistics/ChartUsedSpace';

/*Styled components*/
import { StatisticsPageLayout } from 'components/statistics/Statistics.styled';

export const StatisticsPage = () => (
  <StatisticsPageLayout>
    <ChartUsedSpace />
  </StatisticsPageLayout>
);
