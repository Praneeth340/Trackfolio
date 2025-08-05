'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

type Props = {
  data: any[];
};

export default function SubscriptionChart({ data }: Props) {
  // Protect from empty or undefined data
  if (!data || data.length === 0) return null;

  // Group and count portfolios by subscription type
  const chartData = Object.values(
    data.reduce((acc, curr) => {
      const sub = curr["Subscription"];
      const portfolios = parseInt(curr["No. Of Portfolios"] || 0);
      acc[sub] = acc[sub] || { subscription: sub, total: 0 };
      acc[sub].total += portfolios;
      return acc;
    }, {} as Record<string, { subscription: string; total: number }>)
  );

  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2 style={{ color: 'white', textAlign: 'center' }}>Portfolios by Subscription Type</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subscription" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
