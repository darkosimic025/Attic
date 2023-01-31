/*Libraries*/
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';
import { theme } from 'theme/ThemeProvider';

ChartJS.register(ChartDataLabels);
ChartJS.register(ArcElement, Tooltip, Legend);

export const chartData = (spaceOfStorage: number[]) => {
  return {
    labels: ['Free space', 'Used space'],
    datasets: [
      {
        label: 'GB',
        data: spaceOfStorage,
        backgroundColor: ['rgb(4, 25, 39, 0.85)', 'rgba(20, 113, 194, 0.85)'],
        hoverBackgroundColor: ['rgb(4, 25, 39, 1)', 'rgba(20, 113, 194, 1)'],
        borderWidth: 3,
        offset: 10,
        hoverOffset: 12,
      },
    ],
  };
};

export const chartOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: false,
  plugins: {
    datalabels: {
      anchor: 'center',
      font: (context: Context) => {
        return context.active ? { size: 21 } : { size: 20 };
      },
      color: (context: Context) => {
        return context.active ? 'rgb(255, 255, 255)' : 'rgb(231, 231, 231)';
      },
      backgroundColor: theme.colors.dark,
      borderRadius: 6,
      formatter: (value: Context) => {
        return value + 'GB';
      },
    },
    legend: {
      onClick: () => {
        return true;
      },
      position: 'bottom',
      align: 'center',
      fullSize: true,
      labels: {
        padding: 40,
        textAlign: 'left',
        boxWidth: 40,
        font: { family: 'Inter, sans-serif', lineHeight: 10, size: 16 },
      },
    },
    tooltip: {
      enabled: false,
    },
  },
};
