import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { Pie, PieChart, LineChart, CartesianGrid, CartesianAxis, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import eye from './eye.png'

import { Chart } from "react-google-charts";




function PPC_report() {
    //line chart data
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]

    const data01 = [
        {
            "name": "Group A",
            "value": 400
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 300
        },
        {
            "name": "Group D",
            "value": 200
        },
        {
            "name": "Group E",
            "value": 278
        },
        {
            "name": "Group F",
            "value": 189
        }
    ];

    //piechart data
    const data02 = [
        {
            "name": "Group A",
            "value": 2400,
             "fill":"#005f00"
        },
        {
            "name": "Group B",
            "value": 4567,
            "fill":"#808080"
        },
        {
            "name": "Group C",
            "value": 1398,
            "fill":"#000000"
        },
        {
            "name": "Group D",
            "value": 9800,
            "fill":"#FFFFFF"
        },
        {
            "name": "Group E",
            "value": 3908,
            "fill":"#000000"
        },
        {
            "name": "Group F",
            "value": 4800,
            "fill":"#000000"
        }
    ];
    
    // Assuming you are using a chart library like Chart.js or similar
    const colors02 = ['#000000', '#005f00', '#808080', '#FFFFFF']; // Black, very dark green, gray, white
    
    // Example of how to create a pie chart
    const options02 = {
        // Chart options here
        colors: colors02,
        // Other chart configurations...
    };

    const data1 = [
        ["Task", "Hours per Day"],
        ["Google Ads 9", 9],
        ["Microsoft Ads 2", 2],
        ["Facebook Ads 2", 2],
        ["LinkedIn Ads 2", 2]

    ];



    return (
        <div className=" mx-auto bg-gray-200 p-8 rounded-lg shadow-md">

            <h1 className='font-bold text-2xl text-center mb-4'>PPC Report Overview</h1>
            <div className="  rounded-lg mb-6 w-full flex flex-row gap-2 h-auto">
                <div className='w-3/4 bg-gray-50 p-3 rounded-lg'>
                    <h2 className="text-lg font-bold">PAID MEDIA REPORT</h2></div>
                <div className='w-1/4 bg-gray-50 p-3 flex flex-col  rounded-lg'>Date Period  <span>10/28/2024 - 11/26/2024</span>

                    Duration
                    :30 days</div>
            </div>
            <div className='flex flex-row justify-between gap-2'>
                <div className='flex bg-white flex-col gap-2 w-1/2 p-5 rounded-lg'>
                    <h2 className='font-bold'>Main KPI's</h2>
                    <div className='flex flex-col gap-1 '>
                        <div className='flex flex-row justify-between'>
                            <p>Time Passed</p>
                            <p>30/30</p>
                        </div>
                        <ProgressBar completed="30" maxCompleted="30" bgColor='grey' customLabel=" " isLabelVisible="false" borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Conversions</p>
                            <p>136/10000</p>
                        </div>
                        <ProgressBar completed="136" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Clicks</p>
                            <p>523/10000</p>
                        </div>
                        <ProgressBar completed="523" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Impressions</p>
                            <p>17031/10000</p>
                        </div>
                        <ProgressBar completed="17031" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Costs</p>
                            <p>$4696/10000</p>
                        </div>
                        <ProgressBar completed="4896" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                    </div>
                </div>
                <div className='w-1/2 flex gap-2 flex-col'>
                    <div className='h-24 w-full bg-white  flex justify-start  flex-col p-4 rounded-lg'>
                        <span className=''>Cost</span>
                        <span className='font-bold text-xl'>$8928</span>
                    </div>
                    <div className='flex flex-row gap-2 rounded-lg'>
                        <div className='h-24 w-1/2 bg-white  flex justify-start  flex-col p-4'>
                            <span>Clicks</span>
                            <span className='font-bold text-xl'>7397</span>
                        </div>
                        <div className='h-24 w-1/2 bg-white  flex justify-start  flex-col p-4 rounded-lg'>
                            <span>Avg. CPC</span>
                            <span className='font-bold text-xl'>$1.58</span>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <div className='h-24 w-1/2 bg-white  flex justify-start  flex-col p-4 rounded-lg'>
                            <span>Conversions</span>
                            <span className='font-bold text-xl'>95</span>
                        </div>
                        <div className='h-24 w-1/2 bg-white  flex justify-start  flex-col p-4 rounded-lg'>
                            <span>Avg. CPA</span>
                            <span className='font-bold text-xl'>$111.62</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5 bg-white p-5 flex flex-col gap-4 font-bold rounded-lg'>
                <h1>Conversion Over Time</h1>
                <LineChart width={1000} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </div>

            <div className=' flex flex-row mt-5 gap-2 '>
                <div className='w-1/2 h-52 bg-white p-3 rounded-lg'>
                    <h1 className='font-bold text-xl'>Insights</h1>
                    <p>Edit Description</p>
                </div>
                <div className='w-1/2 h-52 bg-white p-3 rounded-lg'>
                    <h1 className='font-bold text-xl'>Further Action</h1>
                    <p>Edit Description</p>
                </div>
            </div>

            <div className='w-full h-24 bg-white p-3 rounded-lg mt-5'>
                <h1 className='font-bold text-xl'>Channel Split</h1>

            </div>

            <div className='flex flex-row gap-2   mt-5'>
                <div className='w-1/2  rounded-lg bg-white'>
                    <p className='p-5 font-bold text-xl  '>Traffic</p>
                    <div className=''>
                        <Chart
                            chartType="PieChart"
                            data={data1}

                            width={"100%"}
                            height={"200px"}
                        />
                        
                    </div>
                </div>
                <div className='w-1/2 rounded-xl bg-white'>
                    <p className='p-5 font-bold text-xl'>Conversions</p>
                    <Chart
                        chartType="PieChart"
                        data={data1}
                       
                        width={"100%"}
                        height={"200px"}
                    />
                </div>
            </div>


            <div className="flex flex-row mt-5 gap-2">
                <div className="w-1/4 h-24 flex items-center justify-center bg-white p-2" >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/1200px-Google_Ads_logo.svg.png"
                        alt="Google Ads"
                        className="h-full object-contain"
                    />
                </div>
                <div className="w-1/4 h-24 flex items-center justify-center bg-white p-4">
                    <img
                        src="https://corkboardconcepts.com/wp-content/uploads/2024/02/unnamed.webp"
                        alt="Corkboard Concepts"
                        className="h-full object-contain"
                    />
                </div>
                <div className="w-1/4 h-24 flex items-center justify-center bg-white p-2">
                    <img
                        src="https://cdn.prod.website-files.com/6407f39855b65290f8089bbe/65656aed4c831d051a5c3772_facebook-ads.png"
                        alt="Facebook Ads"
                        className="h-full object-contain"
                    />
                </div>
                <div className="w-1/4 h-24 flex items-center justify-center bg-white p-4">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcZF0nTyOOxJmSHf6I1o_A8ktrzNx6zQ8CQ&s"
                        alt="Ad Image"
                        className="h-full object-contain"
                    />
                </div>
            </div>


            <div className="flex flex-row mt-5 gap-2">
                <div className="w-1/4 h-24 flex items-center justify-center bg-white p-1" >

                    <img
                        src={eye}
                        alt="Google Ads"
                        className="h-full object-contain"
                    />
                    <div className='flex flex-col'>
                        <p>Cost per con..</p>
                        <p className='font-bold text-2xl '>5$</p>
                    </div>
                </div>
                <div className="w-1/4 h-24 flex items-center justify-center bg-white p-2">
                    <img
                        src={eye}
                        alt="Corkboard Concepts"
                        className="h-full object-contain"
                    />
                    <div className='flex flex-col'>
                        <p>Cost per con..</p>
                        <p className='font-bold text-2xl '>$7.63</p>
                    </div>
                </div>
                <div className="w-1/4 h-24 flex items-center justify-center bg-white p-2">
                    <img
                        src={eye}
                        alt="Facebook Ads"
                        className="h-full object-contain"
                    />
                    <div className='flex flex-col'>
                        <p>Cost per lead</p>
                        <p className='font-bold text-2xl '>$140...</p>
                    </div>
                </div>
                <div className="w-1/4 h-24 flex items-center justify-center bg-white p-2">
                    <img
                        src={eye}
                        alt="Ad Image"
                        className="h-full object-contain"
                    />
                    <div className='flex flex-col'>
                        <p>Cost per con..</p>
                        <p className='font-bold text-2xl '>$12.24</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-row justify-between gap-2 mt-5'>
                <div className='flex bg-white flex-col gap-2 w-1/2 p-5 rounded-lg'>
                    
                    <div className='flex flex-col gap-1 '>
                        <div className='flex flex-row justify-between'>
                            <p>Time Passed</p>
                            <p>30/30</p>
                        </div>
                        <ProgressBar completed="30" maxCompleted="30" bgColor='grey' customLabel=" " isLabelVisible="false" borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Conversions</p>
                            <p>136/10000</p>
                        </div>
                        <ProgressBar completed="136" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Clicks</p>
                            <p>523/10000</p>
                        </div>
                        <ProgressBar completed="523" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Impressions</p>
                            <p>17031/10000</p>
                        </div>
                        <ProgressBar completed="17031" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Costs</p>
                            <p>$4696/10000</p>
                        </div>
                        <ProgressBar completed="4896" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                    </div>
                </div>


                <div className='flex bg-white flex-col gap-2 w-1/2 p-5 rounded-lg'>
                    
                    <div className='flex flex-col gap-1 '>
                        <div className='flex flex-row justify-between'>
                            <p>Time Passed</p>
                            <p>30/30</p>
                        </div>
                        <ProgressBar completed="30" maxCompleted="30" bgColor='grey' customLabel=" " isLabelVisible="false" borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Conversions</p>
                            <p>136/10000</p>
                        </div>
                        <ProgressBar completed="136" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Clicks</p>
                            <p>523/10000</p>
                        </div>
                        <ProgressBar completed="523" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Impressions</p>
                            <p>17031/10000</p>
                        </div>
                        <ProgressBar completed="17031" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Costs</p>
                            <p>$4696/10000</p>
                        </div>
                        <ProgressBar completed="4896" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                    </div>
                </div>


                <div className='flex bg-white flex-col gap-2 w-1/2 p-5 rounded-lg'>
                    
                    <div className='flex flex-col gap-1 '>
                        <div className='flex flex-row justify-between'>
                            <p>Time Passed</p>
                            <p>30/30</p>
                        </div>
                        <ProgressBar completed="30" maxCompleted="30" bgColor='grey' customLabel=" " isLabelVisible="false" borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Conversions</p>
                            <p>136/10000</p>
                        </div>
                        <ProgressBar completed="136" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Clicks</p>
                            <p>523/10000</p>
                        </div>
                        <ProgressBar completed="523" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Impressions</p>
                            <p>17031/10000</p>
                        </div>
                        <ProgressBar completed="17031" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Costs</p>
                            <p>$4696/10000</p>
                        </div>
                        <ProgressBar completed="4896" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                    </div>
                </div>

                <div className='flex bg-white flex-col gap-2 w-1/2 p-5 rounded-lg'>
                    
                    <div className='flex flex-col gap-1 '>
                        <div className='flex flex-row justify-between'>
                            <p>Time Passed</p>
                            <p>30/30</p>
                        </div>
                        <ProgressBar completed="30" maxCompleted="30" bgColor='grey' customLabel=" " isLabelVisible="false" borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Conversions</p>
                            <p>136/10000</p>
                        </div>
                        <ProgressBar completed="136" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Clicks</p>
                            <p>523/10000</p>
                        </div>
                        <ProgressBar completed="523" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Impressions</p>
                            <p>17031/10000</p>
                        </div>
                        <ProgressBar completed="17031" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                        <div className='flex flex-row justify-between'>
                            <p>Costs</p>
                            <p>$4696/10000</p>
                        </div>
                        <ProgressBar completed="4896" maxCompleted="10000" bgColor='green' customLabel=' ' borderRadius="0px" height='10px' />
                    </div>
                </div>
            </div>

        </div>
    );
};



export default PPC_report