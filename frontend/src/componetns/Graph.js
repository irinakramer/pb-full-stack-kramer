import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Container } from 'react-bootstrap';

const graphStyles = {
  backgroundColor: '#f1f3f5',
  borderRadius: '5px',
};

const Graph = ({ data }) => {
  return (
    <Container>
      <Container style={graphStyles} className="p-2 p-lg-4">
        <ResponsiveContainer width="100%" height="100%" minHeight={300}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 0, right: 20, left: 10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis
              allowDecimals={false}
              label={{
                value: 'Observation count',
                angle: -90,
                position: 'insideBottomLeft',
                offset: 20,
              }}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar
              name="Whale Sightings"
              dataKey="observationcount"
              fill="#8884d8"
            />
          </BarChart>
        </ResponsiveContainer>
      </Container>
    </Container>
  );
};

export default Graph;
