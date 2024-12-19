import React from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { FunnelChart, Funnel, LabelList } from "recharts";
import { PieChart } from 'react-minimal-pie-chart';
import ch from './ch.png'
import bd from './bd.png'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  
  // Register Chart.js components
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
const GoogleAds = () => {
  const campaigns = [
    {
      name: "Campaign A",
      cost: "$68.08 / $12,000.00",
      ctr: "0.92% / 15.00%",
      costPerConversion: "$8.95 / $22.00",
      impressions: "7,465",
      clicks: "28",
      averageCpc: "$0.52",
      conversions: "10.57",
    },
    {
      name: "Campaign B",
      cost: "$66.68 / $15,000.00",
      ctr: "3.14% / 15.00%",
      costPerConversion: "$1.11 / $15.00",
      impressions: "8,338",
      clicks: "80",
      averageCpc: "$0.82",
      conversions: "17.92",
    },
    {
      name: "Campaign C",
      cost: "$79.18 / $22,000.00",
      ctr: "2.61% / 9.00%",
      costPerConversion: "$71.41 / $18.00",
      impressions: "8,690",
      clicks: "33",
      averageCpc: "$1.86",
      conversions: "7.69",
    },
  ];

  const funnelData = [
    { name: "Impressions", value: 6237, percentage: 100 },
    { name: "Clicks", value: 56, percentage: 0.9 },
    { name: "Conversions", value: 14.46, percentage: 25.82 },
  ];
  
  const colors = ['#000000', '#005f00', '#808080'];
  
  const data1 = funnelData.map((item, index) => ({
    value: item.percentage,
    name: item.name,
    fill: colors[index],
  }));
  
  
  

  const data = [
    {
      campaign: "Banners|PCC|CA|2020Q2|Leads",
      impressions: 13825,
      clicks: 123,
      ctr: "0.89%",
      conversions: 17.44,
      costPerConversion: "$1.96",
    },
    {
      campaign: "Banners|PCC|US|2020Q3|Leads",
      impressions: 13665,
      clicks: 186,
      ctr: "1.36%",
      conversions: 32.9,
      costPerConversion: "$5.03",
    },
    {
      campaign: "Banners|PCC|CA|2020Q3|Leads",
      impressions: 10413,
      clicks: 176,
      ctr: "1.69%",
      conversions: 11.24,
      costPerConversion: "$5.71",
    },
  ];

  const metrics = [
    { label: "Spend", value: "$83.99" },
    { label: "Impressions", value: "1,845" },
    { label: "Clicks", value: "27" },
    { label: "Conversions", value: "16.96" },
  ];

  // Bar Chart Data
  const chartData = {
    labels: campaigns.map((campaign) => campaign.name),
    datasets: [
      {
        label: "Impressions",
        data: campaigns.map((campaign) => parseInt(campaign.impressions.replace(/,/g, ""))),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Clicks",
        data: campaigns.map((campaign) => parseInt(campaign.clicks.replace(/,/g, ""))),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Conversions",
        data: campaigns.map((campaign) => parseFloat(campaign.conversions)),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba( 255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Campaign Performance Metrics",
      },
    },
  };

  const lineChartData = {
    labels: ["Oct 26", "31", "Nov 5", "10", "15", "20"], // Replace with your dynamic labels
    datasets: [
      {
        label: "Conversions (Cumulative)",
        data: [0, 20, 40, 80, 120, 160], // Replace with your dynamic data
        borderColor: "#374151",
        backgroundColor: "rgba(55, 65, 81, 0.2)",
        fill: true,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Conversions",
        },
        beginAtZero: true,
      },
    },
  };

  const pidata = [
    { title: "iPhone", value: 87, color: "#000000" }, // Blue
    { title: "Android Smart...", value: 79, color: "#005f00" }, // Light Blue
    { title: "Other", value: 79, color: "#808080" }, // Yellow
  ];

  return (
    <>
      <div className="bg-gray-100 p-6">
        {/* Top Highlights */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Campaign Dashboard
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white shadow p-4 rounded-lg text-center"
            >
              <h2 className="text-xl font-bold">{metric.value}</h2>
              <p className="text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Campaign Data Table */}
        <div className="bg-white shadow rounded-lg overflow-x-auto mb-6">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Campaign Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Impressions
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Clicks
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  CTR
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  All Conversions
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Cost per Conversion
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{item.campaign}</td>
                  <td className="px-4 py-2">{item.impressions}</td>
                  <td className="px-4 py-2">{item.clicks}</td>
                  <td className="px-4 py-2">{item.ctr}</td>
                  <td className="px-4 py-2">{item.conversions}</td>
                  <td className="px-4 py-2">{item.costPerConversion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Campaign Performance Details */}
        <div className="bg-gray-800 text-white text-center py-4 rounded-xl">
          <h1 className="text-2xl font-bold">PERFORMANCE BY CAMPAIGN</h1>
          <h2 className="text-lg ">Google Ads</h2>
        </div>

        <div className="flex gap-4 flex-col mt-2">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200  rounded-lg shadow flex flex-col sm:flex-row gap-8  p-4"
            >
              <div className="flex flex-col">
                <h3 className="text-lg font-bold mb-2">{campaign.name}</h3>
                <p>
                  <strong>Cost:</strong>
                  <div className="flex items-center gap-2">
                    <progress
                      value={parseFloat(campaign.cost.replace(/[^0-9.-]+/g, ""))}
                      max={12000}
                      className="w-48 h-2"
                    ></progress>
                    <span>
                      ${parseFloat(campaign.cost.replace(/[^0-9.-]+/g, ""))} / $12,000
                    </span>
                  </div>
                </p>
                <p>
                  <strong>CTR:</strong>
                  <div className="flex items-center gap-2 h-2">
                    <progress
                      value={parseFloat(campaign.ctr.replace("%", ""))}
                      max={100}
                      className="w-48  h-2"
                     
                    ></progress>
                    <span>
                      {parseFloat(campaign .ctr.replace("%", ""))}% / 15%
                    </span>
                  </div>
                </p>
                <p>
                  <strong>Cost per Conversion:</strong>
                  <div className="flex items-center gap-2 h-2">
                    <progress
                      value={parseFloat(campaign.costPerConversion.replace(/[^0-9.-]+/g, ""))}
                      max={22}
                      className="w-48 h-2"
                 
                    
                    ></progress>
                    <span>
                      ${parseFloat(campaign.costPerConversion.replace(/[^0-9.-]+/g, ""))} / $22
                    </span>
                  </div>
                </p>
              </div>
              <div className="">
              <h4 className="text-lg font-bold mb-2">Performance Metrics</h4>
                <p>
                  <strong>Impressions:</strong> {campaign.impressions}
                </p>
                <p>
                  <strong>Clicks:</strong> {campaign.clicks}
                </p>
                <p>
                  <strong>Average CPC:</strong> {campaign.averageCpc}
                </p>
                <p>
                  <strong>Conversions:</strong> {campaign.conversions}
                </p>
              </div>
              <div className="flex flex-col ml-40"><h3 className="text-lg font-bold mb-2">{campaign.name} Insights</h3>
                <textarea name="" id=""></textarea>
              </div>
            </div>
          ))}
        </div>

        <div className=" bg-gray-100">
          {/* Header Section */}
          <div className="bg-gray-800 text-white text-center py-4 rounded-xl mt-4 ">
            <h1 className="text-2xl font-bold">CONVERSION TRACKING</h1>
            <p>Google Ads</p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {/* Conversion Funnel Section */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold mb-4">Conversion funnel</h2>
              <div className="flex justify-center mb-4">
              <FunnelChart
  width={300}
  height={250}
  margin={{
    top: 5,
    right: 40,
    bottom: 15,
    left: 30,
  }}
>
  <Tooltip />
  <Funnel dataKey="value" data={data1} isAnimationActive>
    <LabelList
      position="right"
      fill="#000"
      stroke="none"
      dataKey="name"
    />
  </Funnel>
</FunnelChart>

              </div>
              <ul className="text-sm">
                {funnelData.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>
                      {item.value} ({item.percentage}%)
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-4">
                <span>Total conversion rate</span>
                <span>0.23%</span>
              </div>
            </div>

            {/* Conversion Goals Section */}
            <div className="bg-white p-4 rounded shadow h-[20vh]">
              <h2 className="text-lg font-bold mb-4">Conversions goal</h2>
              <div className="mb-4">
                <div className="flex justify-between text-sm">
                  <span>All conversions</span>
                  <span>6.73 / 350.00</span>
                </div>
                <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-green-600 h-full"
                    style={{ width: "2%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span>All conversions value</span>
                  <span>388.34 / 60, 000.00</span>
                </div>
                <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-green-600 h-full"
                    style={{ width: "0.65%" }}
                  ></div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md mt-7 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Conversions over time</h2>
        <i className="fas fa-ellipsis-h text-gray-500"></i>
      </div>
      <div className="flex items-center mb-2">
        <div className="w-3 h-3 bg-gray-800 rounded-full mr-2"></div>
        <span className="text-gray-500">Conversions (Cumulative)</span>
      </div>
      <div>
      <Line data={lineChartData} options={lineChartOptions} />
    </div>
    </div>
            </div>


            <div className="bg-white p-4 rounded shadow flex items-center justify-center ">
              <div className="text-center flex flex-row gap-4">
                <img
                  src={bd}
                  alt="Average conversion cost icon"
                  className="h-24"
                />
                <div className="flex flex-col mt-5">
                <p className="text-sm">Average conversion cost</p>
                <p className="text-2xl font-bold">$4.46</p>
                </div>
              </div>
            </div>



            





           

            {/* ROAS Section */}
            <div className="bg-white p-4 rounded shadow flex items-center justify-center mt-16 ">
              <div className="text-center  flex flex-row gap-4">
                <img 
                  src={ch}
                  alt="ROAS icon"
                  className="mx-auto p-3 h-24  mb-2"
                />
                <div className="flex flex-col mt-5">
                <p className="text-sm">ROAS</p>
                <p className="text-2xl font-bold">$0.59</p>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Conversions Section */}
          <div className="bg-white p-4 rounded shadow mt-4">
            <h2 className="text-lg font-bold mb-4">Campaign conversions</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Name</th>
                  <th className="text-left py-2">Impressions</th>
                  <th className="text-left py-2">Clicks</th>
                  <th className="text-left py-2">All conversions</th>
                  <th className="text-left py-2">All conversions value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Banners|PCC|US|2020Q...</td>
                  <td className="py-2">13,292</td>
                  <td className="py-2">99</td>
                  <td className="py-2">24.00</td>
                  <td className="py-2">1,469.95</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Banners|PCC|CA|2020Q...</td>
                  <td className="py-2">11,776</td>
                  <td className="py-2">74</td>
                  <td className="py-2">13.24</td>
                  <td className="py-2">468.87</td>
                </tr>
                <tr>
                  <td className="py-2">Banners|PCC|CA|2020Q...</td>
                  <td className="py-2">9,666</td>
                  <td className="py-2">186</td>
                  <td className="py-2">42.62</td>
                  <td className="py-2">1,350.86</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div className=" bg-gray-100 mt-4">
          {/* Header Section */}
          <div className="bg-gray-800 text-white text-center py-4 rounded-xl">
            <h1 className="text-2xl font-bold">GRANULAR ANALYSIS</h1>
            <p>Google Ads</p>
          </div>

          <div className="space-y-8 p-8 bg-gray-100">
      <div className="grid grid-cols-2 gap-4">
        {/* Clicks by Device Type */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Clicks by device type</h2>
          <p className="text-sm text-gray-500">Clicks / Device</p>
          <div className="flex items-center mt-4">
          <div className="flex items-center space-x-8">
      {/* Pie Chart */}
      <div className="w-1/2">
        <PieChart
          data={pidata}
          lineWidth={20}
          paddingAngle={5}
          rounded
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
          labelStyle={{
            fontSize: "5px",
            fontWeight: "bold",
            fill: "#fff",
          }}
          radius={42}
        />
      </div>

      {/* Legend */}
      <div className="w-1/2 space-y-2">
        {pidata.map((item, index) => (
          <div className="flex items-center" key={index}>
            <span
              className="w-3 h-3 rounded-full inline-block "
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="text-sm">{item.title}</span>
            <span className="ml-auto text-sm">
              {item.value} ({((item.value / 245) * 100).toFixed(2)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
        </div>
          <div className="mt-4">
            
          </div>
        </div>

        {/* Clicks by City */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Clicks by city</h2>
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <i className="fas fa-exclamation-triangle text-yellow-500 text-2xl"></i>
              <p className="text-sm text-gray-500 mt-2">Please verify source access</p>
            </div>
          </div>
          <div className="">
           
          </div>
        </div>
      </div>

      {/* Performance by Keywords */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold">Performance by Keywords</h2>
        <table className="w-full mt-4">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-2">Campaign Name</th>
              <th className="pb-2">Impress...</th>
              <th className="pb-2">Clicks</th>
              <th className="pb-2">All conversi...</th>
              <th className="pb-2">Average cpc</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-t">
              <td className="py-2">
                <p className="font-semibold">
                  Campaign Name: Banners|PCC|US|2020Q2|Leads
                </p>
                <p className="text-gray-500">Keyword: Alias vel sit quia sed.</p>
              </td>
              <td className="py-2">18,017</td>
              <td className="py-2">112</td>
              <td className="py-2">44.19</td>
              <td className="py-2">$1.44</td>
            </tr>
            <tr className="border-t">
              <td className="py-2">
                <p className="font-semibold">
                  Campaign Name: Banners|PCC|US|2020Q2|Leads
                </p>
                <p className="text-gray-500">Keyword: Et ipsam ut harum sunt.</p>
              </td>
              <td className="py-2">16,737</td>
              <td className="py-2">98</td>
              <td className="py-2">17.99</td>
              <td className="py-2">$1.70</td>
            </tr>
            <tr className="border-t">
              <td className="py-2">
                <p className="font-semibold">
                  Campaign Name: Banners|PCC|US|2020Q1|Leads
                </p>
                <p className="text-gray-500">Keyword: Quae quia non qui optio.</p>
              </td>
              <td className="py-2">16,338</td>
              <td className="py-2">113</td>
              <td className="py-2">5.64</td>
              <td className="py-2">$1.06</td>
            </tr>
            <tr className="border-t">
              <td className="py-2">
                <p className="font-semibold">
                  Campaign Name: Banners|PCC|US|2020Q2|Leads
                </p>
                <p className="text-gray-500">Keyword: In vero eos repellat.</p>
              </td>
              <td className="py-2">16,000</td>
              <td className="py-2">102</td>
              <td className="py-2">8.61</td>
              <td className="py-2">$0.71</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
                
    <div className=" bg-gray-100 mt-4">
          {/* Header Section */}
          <div className="bg-gray-800 text-white text-center py-4 rounded-xl">
            <h1 className="text-2xl font-bold">CONCLUSIONS AND ACTIONS</h1>
            <p>Google Ads</p>
          </div>
          </div>


</div>
      </div>
    </>
  );
};

export default GoogleAds;