'use client';

type Props = {
  data: any[];
};

export default function EmployeeTable({ data }: Props) {
  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">
        No employee data found.
      </p>
    );
  }

  const columns = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto w-full mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">All Employees</h2>

      <div className="bg-white rounded shadow-md overflow-hidden">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                {columns.map((col) => (
                  <td
                    key={col}
                    className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200"
                  >
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
