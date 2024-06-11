import { useQuery } from "@tanstack/react-query";
import { fetchNewsletter, getPayment } from "../../Api/Api";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Balance = () => {
  const { data: allPaymentData = [] } = useQuery({
    queryKey: ["allPaymentData"],
    queryFn: getPayment,
  });
  const { data: allNewsletter = [] } = useQuery({
    queryKey: ["allNewsletter"],
    queryFn: fetchNewsletter,
  });

  const calculateTotalPrice = (data) => {
    return data.reduce((total, item) => total + item.price, 0);
  };

  const totalPrice = calculateTotalPrice(allPaymentData);
  const newsletterCount = allNewsletter.length;
  const paidMember = allPaymentData.length;

  // Prepare data for the PieChart
  const chartData = [
    // { name: "Total Price", value: totalPrice },
    { name: "Newsletters", value: newsletterCount },
    { name: "Total Paid Member", value: paidMember },
  ];

  // Define colors for the pie chart slices
  const COLORS = ["#8884d8", "#82ca9d"];

  // Custom label render function
  const renderCustomLabel = ({ name, value }) => `${name}: ${value}`;

  return (
    <div>
      <h1>Total Price: {totalPrice}</h1>
      {/* <h1>{allPaymentData.length}</h1>
      <h1>Total Newsletters: {newsletterCount}</h1> */}
      <div className="w-full overflow-x-auto">
        <table
          className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200"
          cellspacing="0"
        >
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Sl
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Trainer Name
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Email
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Selected Package
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Price
              </th>
            </tr>
            {allPaymentData.map((allData, index) => (
              <tr key={allData._id}>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {index + 1}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {allData.trainerName}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {allData.email}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {allData.selectedPackage}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {allData.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label={renderCustomLabel}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Balance;
