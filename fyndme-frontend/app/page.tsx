'use client';

import { useEffect, useState } from 'react';
import SubscriptionChart from '../components/Chart';
import styles from './page.module.css';

export default function HomePage() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => setError(true));
  }, []);

   return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Employee Data</h1>

      {error ? (
        <p>Failed to load data.</p>
      ) : (
        <>
          <div className={styles.chartContainer}>
            <SubscriptionChart data={data} />
          </div>

          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  {data[0] &&
                    Object.keys(data[0]).map((col) => (
                      <th key={col}>{col}</th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr key={idx}>
                    {Object.values(row).map((val, i) => (
                      <td key={i}>{String(val)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}