import React, { useEffect } from 'react';
import { useState } from 'react';
import { ComposedChart, Legend, XAxis, YAxis, Tooltip, CartesianGrid, Bar, Area, Line, LineChart } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data))
  })
  return (
    <div className='dashboard-container'>
      <ComposedChart width={700} className='composedchart' height={250} data={data}>
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="sell" stroke="#ff7300" />
      </ComposedChart>
      <LineChart width={700} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="investment" stroke="#8884d8" />
        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Dashboard;