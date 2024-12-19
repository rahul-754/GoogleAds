import React from 'react'
import sessions from '../sessions.png'
import Totaluser from '../Totaluser.png'
import Engagement from '../engagementrate.png'
import ConversionRate from '../ConversionRate.png'
import ProgressBar from "@ramonak/react-progress-bar";
import { FunnelChart, Funnel, LabelList, Tooltip } from "recharts";
import ReactApexChart from 'react-apexcharts';
import { Pie, PieChart, LineChart, CartesianGrid, CartesianAxis, XAxis, YAxis, Legend, Line } from 'recharts';
import { Chart } from "react-google-charts";

function GoogleAnalytics() {
    //funnel chart data
    const data = [
        {
          "value": 100,
          "name": "Sessions",
          "fill": "black" // blue
        },
        {
          "value": 80,
          "name": "Engaged sessions",
          "fill": "#459f5f" // very dark green
        },
        {
          "value": 50,
          "name": "Conversions",
          "fill": "#808080" // grey
        }
      ];

      const series = [
        {
            name: 'Website Blog',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
            name: 'Social Media',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
    ];
    
    const options = {
        chart: {
            height: 350,
            type: 'line',
        },
        stroke: {
            width: [0, 4],
        },
        title: {
            text: ' ',
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [0], // Enable data labels only for the column series
            style: {
                fontSize: '10px', // Set the desired font size here
                colors: ['#000000'], // Optional: Set the color of the data labels
            },
        },
        labels: [
            '01 Jan 2001',
            '02 Jan 2001',
            '03 Jan 2001',
            '04 Jan 2001',
            '05 Jan 2001',
            '06 Jan 2001',
            '07 Jan 2001',
            '08 Jan 2001',
            '09 Jan 2001',
            '10 Jan 2001',
            '11 Jan 2001',
            '12 Jan 2001',
        ],
        yaxis: [
            {
                title: {
                    text: '',
                },
            },
            {
                opposite: true,
                title: {
                    text: '',
                },
            },
        ],
        colors: ['#000000', '#005f00'], // Black and very dark green
    };
    
    // Assuming you are using a chart library like ApexCharts, you can now create the chart using the series and options
    // Assuming you are using a chart library like ApexCharts, you can now create the chart using the series and options


    //piechart data
    const data02 = [
        {
            "name": "Group A",
            "value": 2400
        },
        {
            "name": "Group B",
            "value": 4567
        },
        {
            "name": "Group C",
            "value": 1398
        },
        {
            "name": "Group D",
            "value": 9800
        },
        {
            "name": "Group E",
            "value": 3908
        },
        {
            "name": "Group F",
            "value": 4800
        }
    ];

    const data1 = [
        ["Task", "Hours per Day"],
        ["Google Ads 9", 9],
        ["Microsoft Ads 2", 2],
        ["Facebook Ads 2", 2],
        ["LinkedIn Ads 2", 2]

    ];

    //duno chart
    const series1 = [44, 55, 41];

const options1 = {
    chart: {
        type: 'donut',
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    position: 'bottom',
                },
            },
        },
    ],
    colors: ['#000000', '#005f00', '#808080'], // Black, very dark green, and gray
};

// Assuming you are using a chart library like ApexCharts, you can now create the chart using the series1 and options1
//table data

    const sessionSources = [
        { source: 'apple.com', sessions: 5829, conversions: 5273, conversionRate: '90.46%' },
        { source: 'Direct', sessions: 8831, conversions: 5866, conversionRate: '66.43%' },
        { source: 'facebook.com', sessions: 4563, conversions: 5948, conversionRate: '130.35%' },
        { source: 'google.com', sessions: 1269, conversions: 5933, conversionRate: '467.53%' },
        { source: 'instagram.com', sessions: 1590, conversions: 5620, conversionRate: '353.46%' },
        { source: 'tesla.com', sessions: 1906, conversions: 5113, conversionRate: '268.26%' },
        { source: 'whatagraph.com', sessions: 4405, conversions: 5824, conversionRate: '132.21%' },
    ];

    const countryActivity = [
        { country: 'Austria', sessions: 8241, conversions: 5567, conversionRate: '67.55%' },
        { country: 'Canada', sessions: 4342, conversions: 5608, conversionRate: '129.16%' },
        { country: 'Denmark', sessions: 9457, conversions: 5161, conversionRate: '54.57%' },
        { country: 'France', sessions: 1319, conversions: 5953, conversionRate: '451.33%' },
        { country: 'Germany', sessions: 3424, conversions: 5562, conversionRate: '162.44%' },
        { country: 'Italy', sessions: 3378, conversions: 5494, conversionRate: '162.64%' },
        { country: 'Lithuania', sessions: 6620, conversions: 5639, conversionRate: '85.18%' },
        { country: 'Sweden', sessions: 7858, conversions: 5574, conversionRate: '70.93%' },
        { country: 'United Kingdom', sessions: 2160, conversions: 5476, conversionRate: '253.52%' },
    ];


    return (

        <div>
            <div>
                <h1 className='text-2xl text-center font-bold mt-3 '>Google Analytics Overview</h1>
            </div>

            <div className='w-full flex flex-row gap-2'>
                <div className='flex flex-row w-1/2 gap-2 mt-5'>
                    <div className='flex flex-col gap-2 w-1/3'>
                        <div className='h-24  flex flex-row bg-white rounded-lg gap-4'>
                            <img className='h-14 w-16 p-2 ml-3 mt-3' src={sessions} alt="" />
                            <div className='flex flex-col mt-3'>
                                <p className=''>Sessions</p>
                                <p className='font-bold text-xl'>9,446</p>
                            </div>
                        </div>
                        <div className='h-24  flex flex-row bg-white rounded-lg gap-4'>
                            <img className='h-16 w-16 p-2 ml-3 mt-2' src={Totaluser} alt="" />
                            <div className='flex flex-col mt-3'>
                                <p>Total users</p>
                                <p className='font-bold text-xl'>4,098</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/3 flex flex-col gap-2 '>
                        <div className='h-24 flex flex-row bg-white rounded-lg gap-4'>
                            <img className='h-16 w-16 p-2 ml-3 mt-3' src={Engagement} alt="" />
                            <div className='flex flex-col mt-3'>
                                <p>Engagement Rate</p>
                                <p className='font-bold text-xl'>209.98%</p>
                            </div>
                        </div>
                        <div className='h-24 flex flex-row bg-white rounded-lg gap-4'>
                            <img className='h-16 w-16 p-2 ml-3 mt-3' src={ConversionRate} alt="" />
                            <div className='flex flex-col mt-3'>
                                <p>Conversion Rate</p>
                                <p className='font-bold text-xl'>57.76%</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=' bg-white w-1/3 p-5 h-inherit rounded-lg mt-5 '>
                    <h1 className='font-bold text-xl text-gray-600 '>Goal</h1>
                    <div className='mt-4'>
                        <ProgressBar completed="30" maxCompleted="30" bgColor='grey' customLabel=" " isLabelVisible="false" borderRadius="0px" height='10px' />
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p>Time passed</p>
                        <p>30/30</p>
                    </div>
                    <ProgressBar completed="136" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                    <div className='flex flex-row justify-between'>
                        <p>Conversions</p>
                        <p>523/10000</p>
                    </div>

                </div>

                <div className='flex flex-col bg-white w-1/5 p-5 h-inherit rounded-lg mt-5'>
                    <h1 className='font-bold text-xm   '>Data Period</h1>
                    <p className='mt-3'>10/29/2024 - 11/27/2024</p>
                    <p>Duration
                        :30 days</p>

                </div>
            </div>

            <div className='flex flex-row w-full gap-2 mt-3 '>
                <div className='bg-white w-2/3 h-inherit rounded-lg p-5'>
                    <h1 className='font-bold text-xl'>Conversions</h1>
                    <ReactApexChart options={options} series={series} type="line" height={250} />
                </div>
                <div className='bg-white w-1/2 rounded-lg p-5'>
                    <h1 className='font-bold text-xl '>Conversion funnel</h1>
                    <div className=' ml-3 p-4' style={{ display: "flex", alignItems: "center" }}>
                        {/* Funnel Chart */}
                        <div >

                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {data.map((item, index) => (
                                    <li key={index} style={{ marginBottom: "10px" }}>
                                        <strong style={{ color: item.fill }}>{item.name}:</strong> {item.value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <FunnelChart width={200} height={200}>
                            <Tooltip />
                            <Funnel dataKey="value" data={data} isAnimationActive>
                                {/* <LabelList position="none" fill="#000" stroke="none" dataKey="name" /> */}
                            </Funnel>
                        </FunnelChart>

                        {/* Data beside the funnel */}

                    </div>
                </div>
            </div>

            <div className='flex flex-row w-full gap-2 mt-3 '>
                <div className='bg-white w-2/3 h-inherit rounded-lg p-5'>
                    <h1 className='font-bold text-xl'>Total users and new users</h1>
                    <ReactApexChart options={options} series={series} type="line" height={250} />
                </div>
                <div className='bg-white w-1/2 rounded-lg p-5'>
                    <h1 className=' text-xm '>Conversions / Session default channel grouping</h1>

                    {/* Data beside the funnel */}
                    <div className='mt-3'>
                        <ReactApexChart options={options1} series={series1} type="donut" height={250} colors="#546E7A" />
                    </div>
                </div>
            </div>

            <div className='flex flex-row gap-2 mt-3'>
                <div className='bg-white w-1/2 rounded-lg p-5'>
                    <h1 className='font-bold text-xl '>Conversion by source</h1>

                    {/* Data beside the funnel */}
                    <div className='mt-3'>
                        <ReactApexChart options={options1} series={series1} type="donut" height={250} />
                    </div>
                </div>
                <div className='bg-white w-1/2 rounded-lg p-5'>
                    <h1 className='font-bold text-xl '>Conversion by country</h1>

                    {/* Data beside the funnel */}
                    <div className='mt-3'>
                        <ReactApexChart options={options1} series={series1} type="donut" height={250} />
                    </div>
                </div>
            </div>

            <div>


                <div className="">
                    <div className="grid grid-cols-2 gap-2 mt-3 ">
                        <div className='bg-white p-5 '>
                            <h2 className="text-xl font-semibold mb-4">On site activity by source</h2>
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr className="border-b-2 border-blue-500">
                                        <th className="py-2 text-left">Session source</th>
                                        <th className="py-2 text-left">Sessions</th>
                                        <th className="py-2 text-left">Conversions</th>
                                        <th className="py-2 text-left">Conversion rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sessionSources.map((source, index) => (
                                        <tr className="border-b" key={index}>
                                            <td className="py-2">{source.source}</td>
                                            <td className="py-2">{source.sessions.toLocaleString()}</td>
                                            <td className="py-2">{source.conversions.toLocaleString()}</td>
                                            <td className="py-2">{source.conversionRate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='bg-white p-5 '>
                            <h2 className="text-xl font-semibold mb-4">Country activity on site</h2>
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr className="border-b-2 border-blue-500">
                                        <th className="py-2 text-left">Country</th>
                                        <th className="py-2 text-left">Sessions</th>
                                        <th className="py-2 text-left">Conversions</th>
                                        <th className="py-2 text-left">Conversion rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {countryActivity.map((country, index) => (
                                        <tr className="border-b" key={index}>
                                            <td className="py-2">{country.country}</td>
                                            <td className="py-2">{country.sessions.toLocaleString()}</td>
                                            <td className="py-2">{country.conversions.toLocaleString()}</td>
                                            <td className="py-2">{country.conversionRate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-2'>
            <div className='w-1/2 flex flex-col gap-2 mt-3'>
                <div className='bg-white h-56 rounded-lg p-5'>
                    <h1 className='font-bold text-xl '>Conversions by campaign</h1>

                    {/* Data beside the funnel */}
                    <div className='mt-3'>
                        <ReactApexChart options={options1} series={series1} type="donut" height={150} />
                    </div>
                </div>


            
            <div className='bg-white p-5 '>
                <h2 className="text-xl font-semibold mb-4">On site activity by campaign</h2>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="border-b-2 border-blue-500">
                            <th className="py-2 text-left">Country</th>
                            <th className="py-2 text-left">Sessions</th>
                            <th className="py-2 text-left">Conversions</th>
                            <th className="py-2 text-left">Conversion rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countryActivity.map((country, index) => (
                            <tr className="border-b" key={index}>
                                <td className="py-2">{country.country}</td>
                                <td className="py-2">{country.sessions.toLocaleString()}</td>
                                <td className="py-2">{country.conversions.toLocaleString()}</td>
                                <td className="py-2">{country.conversionRate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>

          
            <div className='bg-white p-5 w-1/2 mt-3  '>
                <h2 className="text-xl font-semibold mb-4">On site activity by Nth day</h2>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="border-b-2 border-blue-500">
                            <th className="py-2 text-left">Country</th>
                            <th className="py-2 text-left">Sessions</th>
                            <th className="py-2 text-left">Conversions</th>
                            <th className="py-2 text-left">Conversion rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countryActivity.map((country, index) => (
                            <tr className="border-b" key={index}>
                                <td className="py-2">{country.country}</td>
                                <td className="py-2">{country.sessions.toLocaleString()}</td>
                                <td className="py-2">{country.conversions.toLocaleString()}</td>
                                <td className="py-2">{country.conversionRate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>

        </div>



    )
}

export default GoogleAnalytics