import React from 'react';
import ChartistGraph from 'react-chartist';

const NewUsersChart = props => {
  const halfDoughnatChartData = {
    series: [20, 10, 30, 40]
  };
  const halfDoughnatChartOptions = {
    donut: true,
    donutWidth: 50,
    donutSolid: true,
    startAngle: 270,
    total: 200,
    showLabel: true
  };
  return (
    <ChartistGraph
      data={halfDoughnatChartData}
      options={halfDoughnatChartOptions}
      type={'Pie'}
      {...props}
    />
  );
};

export default NewUsersChart;
