import * as React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useMediaQuery, Theme } from '@mui/material';
import Box from '@mui/material/Box';

const PaymentChart = () => {
  //const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const [data2, setData] = React.useState({
    _id: 'jobReport',
    numberOfPostedJobs: 10,
    numberOfBids: 10,
    sumBidsAmounts: 10,
    numberOfPaidJobs: 5,
    numberOfCompletedJobs: 5,
    numberOfSelectedBids: 2,
    totalPostedJobs: 10,
  });

  /* 
  const url = 
  axios({
    url: 'https://bworks.app/api/customapis/jobreports',
    method: 'GET',
    data: data,
  })
    .then((response) => {
     console.log(response);
    })
    .catch((error) => {
     
      console.log(error);
    });
}; */

  const data1 = [
    { name: 'Complete jobs', value: data2.numberOfCompletedJobs || 0 },
    {
      name: 'Pending jobs',
      value: data2.numberOfPostedJobs - data2.numberOfCompletedJobs || 0,
    },
  ];
  const data = [
    { name: 'Selected applications', value: data2.numberOfSelectedBids || 0 },
    {
      name: 'UnSelected applications',
      value: data2.numberOfBids - data2.numberOfSelectedBids || 0,
    },
  ];

  const data3 = [
    { name: 'Locked TXs', value: data2.numberOfCompletedJobs || 0 },
    {
      name: 'Unlocked TXs',
      value: data2.numberOfPostedJobs - data2.numberOfCompletedJobs || 0,
    },
  ];
  const data4 = [
    { name: 'Locked amount($) ada', value: data2.numberOfSelectedBids || 0 },
    {
      name: 'Unlocked amount($) ada',
      value: data2.numberOfBids - data2.numberOfSelectedBids || 0,
    },
  ];

  const COLORS = ['#4caf50', '#03a9f4'];
  const COLORS1 = ['#00C49F', '#FFBB28'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  //if (isSmall) return null;
  return (
    <div
      style={{
        width: 1200,
        height: 335,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ResponsiveContainer width="50%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={140}
            fill="#8884d8"
            dataKey="value"
            stroke="none"
            innerRadius={90}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
            ))}
          </Pie>
          <Pie
            data={data1}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS1.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <Box sx={{ width: 300 }}>
        <Typography variant="subtitle2" component="ol">
          Matched jobs
        </Typography>
        <ul>
          <Typography variant="caption" component="li">
            500 posted jobs
          </Typography>
          <Typography variant="caption" component="li">
            300 completed jobs
          </Typography>

          <Typography variant="caption" component="li">
            100 applications
          </Typography>
          <Typography variant="caption" component="li">
            50 selected applications
          </Typography>
        </ul>
      </Box>
      <ResponsiveContainer width="50%" height="100%">
        <PieChart>
          <Pie
            data={data4}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={140}
            fill="#8884d8"
            dataKey="value"
            stroke="none"
            innerRadius={90}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
            ))}
          </Pie>
          <Pie
            data={data3}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS1.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <Box sx={{ width: 300 }}>
        <Typography variant="subtitle2" component="ol">
          Payments
        </Typography>
        <ul>
          <Typography variant="caption" component="li">
            500 Locked TXs
          </Typography>
          <Typography variant="caption" component="li">
            300 Unlocked TXs
          </Typography>

          <Typography variant="caption" component="li">
            100 Locked amount($) ada
          </Typography>
          <Typography variant="caption" component="li">
            50 Unlocked amount($) ada
          </Typography>
        </ul>
      </Box>
    </div>
  );
};

export default PaymentChart;
