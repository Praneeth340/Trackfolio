'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const DataTable = () => {
  const data = useSelector((state: RootState) => state.csv.data);
  const status = useSelector((state: RootState) => state.csv.status);

  if (status === 'loading') return <p>Loading table...</p>;
  if (status === 'failed') return <p>Failed to load data.</p>;

  return (
    <div>
      <h2>Full Employee Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Age</th><th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp, i) => (
            <tr key={i}>
              <td>{emp.Name}</td>
              <td>{emp.Email}</td>
              <td>{emp.Age}</td>
              <td>{emp.Role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
