import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Container } from 'react-bootstrap';
import ApplicationHelper from '../helpers/ApplicationHelper';

const Graph = ({ data }) => {
  const { getChartData } = ApplicationHelper;
  const chartData = getChartData(data, 'Blue Whale', 2022);

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%" minHeight={300}>
        <BarChart width={500} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="observationcount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Graph;
