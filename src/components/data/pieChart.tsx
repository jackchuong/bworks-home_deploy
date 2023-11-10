import * as React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useMediaQuery, Theme } from '@mui/material';
import Box from '@mui/material/Box';

const PaymentChart = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const jobReportUrl = `${apiUrl}/public/jobreports`;
  const plutusTxReportUrl = `${apiUrl}/public/plutusreports`;

  const [jobData, setJobData] = React.useState({
    numberOfPostedJobs: 0,
    numberOfPaidJobs: 0,
    numberOfCompletedJobs: 0,
    numberOfBids: 0,
    numberOfSelectedBids: 0,
  });

  const [plutusTxData, setPlutusTxData] = React.useState({
    sumLockedAmounts: 0,
    sumUnlockedAmounts: 0,
    numberOfLockTxs: 0,
    numberOfUnlockedTxs: 0,
  });

  React.useEffect(() => {
    axios({
      url: jobReportUrl,
      method: 'GET',
    })
      .then((response) => setJobData({ ...response.data }))
      .catch((error) => console.log(error));

    axios({
      url: plutusTxReportUrl,
      method: 'GET',
    })
      .then((response) => setPlutusTxData({ ...response.data }))
      .catch((error) => console.log(error));
  }, []);

  const data1 = [
    { name: 'Complete jobs', value: jobData.numberOfCompletedJobs || 0 },
    {
      name: 'Pending jobs',
      value: jobData.numberOfPostedJobs - jobData.numberOfCompletedJobs || 0,
    },
  ];
  const data = [
    { name: 'Selected applications', value: jobData.numberOfSelectedBids || 0 },
    {
      name: 'UnSelected applications',
      value: jobData.numberOfBids - jobData.numberOfSelectedBids || 0,
    },
  ];

  const data3 = [
    { name: 'Locked TXs', value: plutusTxData.numberOfLockTxs || 0 },
    {
      name: 'Unlocked TXs',
      value: plutusTxData.numberOfUnlockedTxs || 0,
    },
  ];
  const data4 = [
    { name: 'Locked amount($) ada', value: plutusTxData.sumLockedAmounts || 0 },
    {
      name: 'Unlocked amount($) ada',
      value: plutusTxData.sumUnlockedAmounts || 0,
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
            {`${jobData.numberOfPostedJobs} posted jobs`}
          </Typography>
          <Typography variant="caption" component="li">
            {`${jobData.numberOfCompletedJobs} completed jobs`}
          </Typography>

          <Typography variant="caption" component="li">
            {`${jobData.numberOfPaidJobs} paid jobs`}
          </Typography>

          <Typography variant="caption" component="li">
            {`${jobData.numberOfBids} applications`}
          </Typography>
          <Typography variant="caption" component="li">
            {`${jobData.numberOfSelectedBids} selected applications`}
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
            {`${plutusTxData.numberOfLockTxs} Locked TXs`}
          </Typography>
          <Typography variant="caption" component="li">
            {`${plutusTxData.numberOfUnlockedTxs} Unlocked TXs`}
          </Typography>

          <Typography variant="caption" component="li">
            {`${plutusTxData.numberOfLockTxs - plutusTxData.numberOfUnlockedTxs} Pending TXs`}
          </Typography>

          <Typography variant="caption" component="li">
            {`${plutusTxData.sumLockedAmounts} Ada($) locked`}
          </Typography>
          <Typography variant="caption" component="li">
            {`${plutusTxData.sumUnlockedAmounts} Ada($) Unlocked`}
          </Typography>
        </ul>
      </Box>
    </div>
  );
};

export default PaymentChart;
