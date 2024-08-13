import React, {useState} from 'react'
// import Chart from '../../components/Chart'
import CanvasJSReact from '../../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
import ReactApexChart from 'react-apexcharts';

// import { ResponsiveMarimekko } from "@nivo/marimekko";
// import { TreeMapComponent, Inject, TreeMapLegend } from '@syncfusion/ej2-react-treemap';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardTitle,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

<script src=""></script>




const Dashboard = () => {



  const options = {
    animationEnabled: true,
    exportEnabled: true,
    title:{
      text: "Overall Residual Risk Summary",
      fontSize: 12,
      fontColor: 'gray',
      fontFamily: 'sans-serif'
    },
    axisY: {
      valueFormatString: "0",
      includeZero: true
    },
    data: [{
      type: "waterfall",
      yValueFormatString: "0",
      indexLabelOrientation: "vertical",
      dataPoints: [
        { label: "Very Low", y: 32 },
        { label: "Low", y: 49 },
        { label: "Medium", y: 89 },
        { label: "High", y: 29 },
        { label: "Critical", y: 21},
      ]
    }]
  }
 
  const options1 = {
    animationEnabled: true,
    theme: "light2",
    title:{
      text: "Profile by Risk Type",
      fontSize: 12,
      fontColor: 'gray',
      fontFamily: 'sans-serif'
    },
    axisX: {
      valueFormatString: "DDD"
    },
    axisY: {
      interval: 10,
      suffix: "%"
    },
    toolTip: {
      shared: true
    },
    legend:{
      cursor: "pointer",
      // itemclick: this.toggleDataSeries
    },
    data: [{
      type: "stackedBar100",
      name: "Very Low",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "0",
      dataPoints: [
        { y: 3, label: "Strategy" },
        { y: 4, label: "Compliance" },
        { y: 17, label: "Operational" },
        { y: 8, label: "Financial" },
        
      ]
    },
    {
      type: "stackedBar100",
      name: "Low",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { y: 3, label: "Strategy" },
        { y: 7, label: "Compliance" },
        { y: 27, label: "Operational" },
        { y: 12, label: "Financial" },
      ]
    },
    {
      type: "stackedBar100",
      name: "Medium",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { y: 6, label: "Strategy" },
        { y: 15, label: "Compliance" },
        { y: 43, label: "Operational" },
        { y: 23, label: "Financial" },
      ]
    },
    {
      type: "stackedBar100",
      name: "High",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { y: 3, label: "Strategy" },
        { y: 7, label: "Compliance" },
        { y: 15, label: "Operational" },
        { y: 4, label: "Financial" },
      ]
    },
    {
      type: "stackedBar100",
      name: "Critical",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { y: 1, label: "Strategy" },
        { y: 2, label: "Compliance" },
        { y: 12, label: "Operational" },
        { y: 6, label: "Financial" },
      ]
    }]
  }
  const options2 = {
    animationEnabled: true,
    theme: "light2",
    title:{
      text: "Status of Risk Treatment Action",
      fontSize: 12,
      fontColor: 'gray',
      fontFamily: 'sans-serif'
    },
    axisX: {
      // title: "Social Network",
      reversed: true,
    },
    axisY: {
      // title: "Monthly Active Users",
      includeZero: true,
      // labelFormatter: this.addSymbols
    },
    data: [{
      type: "bar",
      dataPoints: [
        { y:  50, label: "Delayed" },
        { y:  11, label: "At Risk" },
        { y:  30, label: "On-Track" },
        { y:  63, label: "Not Started" },
        { y:  18, label: "Completed" },
      ]
    }]
  }
  const options3 = {
    animationEnabled: true,
    theme: "light2",
    title:{
      text: "Risk Profile by Department",
      fontSize: 12,
      fontColor: 'gray',
      fontFamily: 'sans-serif'
    },
    axisX: {
      valueFormatString: "DDD"
    },
    axisY: {
      interval: 10,
      suffix: "%"
    },
    toolTip: {
      shared: true
    },
    legend:{
      cursor: "pointer",
      // itemclick: this.toggleDataSeries
    },
    data: [{
      type: "stackedBar100",
      name: "Very Low",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "0",
      dataPoints: [
        { y: 11, label: "HUMAN RESOURCES DEPT" },
        { y: 9, label: "EBANKING DEPART" },
        { y: 1, label: "SIMORPOR DEPT" },
        { y: 4, label: "PR/PROTOCOL DEPT" },
        { y: 3, label: "CORPORATE DEPT" },
        { y: 2, label: "LEGAL DEPT" },
        { y: 2, label: "COMPLIANCE DEPT" },
        { y: 4, label: "OPERATIONAL DEPT" },
        { y: 4, label: "ADMIN DEPT" },
        { y: 2, label: "MARKETING DEPT" },
        { y: 15, label: "IT DEPT" },
        { y: 1, label: "RISK MANAGT DEPT" },
        { y: 9, label: "AUDIT DEPT" },
        { y: 7, label: "FINANCE DEPT" },
        
      ]
    },
    {
      type: "stackedBar100",
      name: "Low",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { y: 15, label: "HUMAN RESOURCES DEPT" },
        { y: 11, label: "EBANKING DEPART" },
        { y: 12, label: "SIMORPOR DEPT" },
        { y: 7, label: "PR/PROTOCOL DEPT" },
        { y: 5, label: "CORPORATE DEPT" },
        { y: 12, label: "LEGAL DEPT" },
        { y: 7, label: "COMPLIANCE DEPT" },
        { y: 12, label: "OPERATIONAL DEPT" },
        { y: 12, label: "ADMIN DEPT" },
        { y: 12, label: "MARKETING DEPT" },
        { y: 13, label: "IT DEPT" },
        { y: 10, label: "RISK MANAGT DEPT" },
        { y: 12, label: "AUDIT DEPT" },
        { y: 11, label: "FINANCE DEPT" },
      ]
    },
    {
      type: "stackedBar100",
      name: "Medium",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { y: 15, label: "HUMAN RESOURCES DEPT" },
        { y: 10, label: "EBANKING DEPART" },
        { y: 15, label: "SIMORPOR DEPT" },
        { y: 19, label: "PR/PROTOCOL DEPT" },
        { y: 15, label: "CORPORATE DEPT" },
        { y: 20, label: "LEGAL DEPT" },
        { y: 14, label: "COMPLIANCE DEPT" },
        { y: 13, label: "OPERATIONAL DEPT" },
        { y: 13, label: "ADMIN DEPT" },
        { y: 22, label: "MARKETING DEPT" },
        { y: 14, label: "IT DEPT" },
        { y: 20, label: "RISK MANAGT DEPT" },
        { y: 24, label: "AUDIT DEPT" },
        { y: 25, label: "FINANCE DEPT" },
      ]
    },
    {
      type: "stackedBar100",
      name: "High",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { y: 8, label: "HUMAN RESOURCES DEPT" },
        { y: 2, label: "EBANKING DEPART" },
        { y: 7, label: "SIMORPOR DEPT" },
        { y: 3, label: "PR/PROTOCOL DEPT" },
        { y: 2, label: "CORPORATE DEPT" },
        { y: 6, label: "LEGAL DEPT" },
        { y: 2, label: "COMPLIANCE DEPT" },
        { y: 3, label: "OPERATIONAL DEPT" },
        { y: 7, label: "ADMIN DEPT" },
        { y: 5, label: "MARKETING DEPT" },
        { y: 4, label: "IT DEPT" },
        { y: 12, label: "RISK MANAGT DEPT" },
        { y: 8, label: "AUDIT DEPT" },
        { y: 6, label: "FINANCE DEPT" },
      ]
    },
    {
      type: "stackedBar100",
      name: "Critical",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { y: 2, label: "HUMAN RESOURCES DEPT" },
        { y: 4, label: "EBANKING DEPART" },
        { y: 6, label: "SIMORPOR DEPT" },
        { y: 8, label: "PR/PROTOCOL DEPT" },
        { y: 10, label: "CORPORATE DEPT" },
        { y: 2, label: "LEGAL DEPT" },
        { y: 4, label: "COMPLIANCE DEPT" },
        { y: 6, label: "OPERATIONAL DEPT" },
        { y: 8, label: "ADMIN DEPT" },
        { y: 10, label: "MARKETING DEPT" },
        { y: 2, label: "IT DEPT" },
        { y: 4, label: "RISK MANAGT DEPT" },
        { y: 6, label: "AUDIT DEPT" },
        { y: 8, label: "FINANCE DEPT" },
      ]
    }]
  }
  const options4 = {
    title: {
      text: "Basic Column Chart",
      fontSize: 12,
      fontColor: 'gray',
      fontFamily: 'sans-serif'
    },
    axisX: {
      interval: -1,
      labelFontSize: 10,
    },
    data: [
    {
      type: "column",
      dataPoints: [
        { y: 20, label: "HUMAN RESOURCES DEPT" },
        { y: 19, label: "EBANKING DEPART" },
        { y: 18, label: "SIMORPOR DEPT" },
        { y: 17, label: "PR/PROTOCOL DEPT" },
        { y: 16, label: "CORPORATE DEPT" },
        { y: 15, label: "LEGAL DEPT" },
        { y: 14, label: "COMPLIANCE DEPT" },
        { y: 13, label: "OPERATIONAL DEPT" },
        { y: 12, label: "ADMIN DEPT" },
        { y: 11, label: "MARKETING DEPT" },
        { y: 10, label: "IT DEPT" },
        { y: 9, label: "RISK MANAGT DEPT" },
        { y: 8, label: "AUDIT DEPT" },
        { y: 7, label: "FINANCE DEPT" },
      ]
    }
    ]
  }
  const [state,setStaet] = useState({
    series: [
      {
        data: [
          {
            x: 'SIMKORPOR DEPT',
            y: 5
          },
          {
            x: 'LEGAL DEPT',
            y: 5
          },
          {
            x: 'ADMIN DEPT',
            y: 7
          },
          {
            x: 'HUMAN RESOURCES DEPT',
            y: 6
          },
          {
            x: 'RISK MANAGT DEPT',
            y: 3
          },
          {
            x: 'COPERATE DEPT',
            y: 3
          },
          {
            x: 'OPERATIONAL DEPT',
            y: 2
          },
          {
            x: 'EBANKING DEPT',
            y: 2
          },
          {
            x: 'AUDIT DEPT',
            y: 2
          },
          {
            x: 'IT DEPT',
            y: 4
          },
          {
            x: 'FINANCE DEPT',
            y: 3
          },
          {
            x: 'PR/ PROTOCOL DEPT ',
            y: 2
          },
          {
            x: 'COMMUNICATION DEPT',
            y: 5
          }
        ]
      }
    ],
    options: {
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      title: {
        text: 'Breakdown by Department',
        align: 'center'
      },
      colors: [
        '#3B93A5',
        '#F7B844',
        '#ADD8C7',
        '#EC3C65',
        '#CDD7B6',
        '#C1F666',
        '#D43F97',
        '#1E5D8C',
        '#421243',
        '#7F94B0',
        '#EF6537',
        '#C0ADDB'
      ],
      plotOptions: {
        treemap: {
          distributed: true,
          enableShades: false
        }
      }
    },
    series1: [{
      name: 'Strategy',
      data: [44, 55, 41]
    }, {
      name: 'Compliance',
      data: [53, 32, 33]
    }
    , {
      name: 'Operational',
      data: [34, 42, 43]
    }
    , {
      name: 'Financial',
      data: [25, 50, 15]
    }],
    options1: {
      chart: {
        type: 'bar',
        height: 430
      },

      title: {
        text: 'Control Nature',
        align: 'center'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      stroke: {
        show: true,
        width: -5,
        colors: ['#fff']
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      xaxis: {
        categories: ['Detective', 'Corrective', 'Preventive'],
      },
    },
    series2: [{
      data: [7, 8, 23, 12]
    }],
    options2: {
      chart: {
        type: 'bar',
        height: 350
      },

      
      title: {
        text: 'Delayed Treatement Actions',
        align: 'center'
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Strategy', 'Compliance', 'Operational', 'Financial'
        ],
      }
    },
    series3: [{
      name: 'Completed',
      data: [3, 7, 5, 3]
    }, {
      name: 'Not Started',
      data: [12, 32, 16, 3]
    }, {
      name: 'On Track',
      data: [6, 13, 6, 2]
    }, {
      name: 'At Risk',
      data: [4, 3, 2, 2]
    }, {
      name: 'Delayed',
      data: [12, 23, 8, 7]
    }],
    options3: {
      chart: {
        type: 'bar',
        height: 350
      },
      title: {
        text: 'Status of Treatement Actions',
        align: 'center'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Financial', 'Operational', 'Compliance', 'Strategy'],
      },
      
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    },
    series4: [10, 48, 10, 23],
    options4: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Tolerate/Accept', 'Treat/Mitigate', 'Terminate/Avoid', 'Transfer/Share'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          title: {
            text: 'Summary by Treatment Actions',
            align: 'center'
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
          
  })
  const options5 = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Control Effectivenes Breakdown",
      fontSize: 12,
      fontColor: 'gray',
      fontFamily: 'sans-serif'
    },
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}",
      dataPoints: [
        { y: 18, label: "Optimal" },
        { y: 49, label: "In effective" },
        { y: 9, label: "Major Improvement" },
        { y: 5, label: "Minor Improvement" },
        { y: 19, label: "Effective" }
      ]
    }]
  }
  const options6 = {
    animationEnabled: true,
    title:{
      text: "Control Type",
      fontSize: 12,
      fontColor: 'gray',
      fontFamily: 'sans-serif'
    },
    legend: {
      verticalAlign: "center",
      horizontalAlign: "right",
      reversed: true,
      cursor: "pointer",
        fontSize: 16,
        // itemclick: this.toggleDataSeries
    },
    toolTip: {
      shared: true
    },
    data: [
    {
      type: "stackedColumn100",
      name: "Manuel",
      showInLegend: true,
      color: "#7F94B0",
      dataPoints: [
        { label: "Financial", y:1118},
        { label: "Operational", y:473},
        { label: "Compliance", y:273},
        { label: "Strategy", y:243},
      ]
    },
    {
      type: "stackedColumn100",
      name: "Semi-Automated",
      showInLegend: true,
      color: "#421243",
      dataPoints: [
        { label: "Financial",	y: 897},
        { label: "Operational", y: 376},
        { label: "Compliance", y: 299},
        { label: "Strategy", y: 272},
      ]
    },
    {
      type: "stackedColumn100",
      name: "Automated",
      showInLegend: true,
      color: "#EF6537",
      dataPoints: [
        { label: "Financial", y: 789},
        { label: "Operational", y: 355},
        { label: "Compliance", y: 303},
        { label: "Strategy", y: 0},
      ]
    }
    ]
  }

  return (
    <>
      <CCard style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}} >
        <CCardTitle style={{ display: 'flex',flexDirection: "column", justifyContent: 'center',alignItems:'center', width: '100%',marginTop: '1rem' }} > Overall Summary </CCardTitle>
        <CCardBody style={{gap: '1.5rem', display: 'flex',flexDirection: "column"}}>
          <div style={{display: 'grid', width: "100%", gridTemplateColumns: "50% 50%", justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
            <CCard style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}} >
              <CCardBody  >
                <CanvasJSChart  options = {options} />
              </CCardBody>
            </CCard>
            <CCard  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}}>
              <CCardBody  >
                <CanvasJSChart  options = {options2} />
              </CCardBody>
            </CCard>
            
          </div>
          <div >
            <CCard style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}} >
              <CCardBody  >
                <CanvasJSChart  options = {options1} />
              </CCardBody>
            </CCard>
            
          </div>
          
        </CCardBody>
        
      
         
		</CCard>
      <CCard style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginTop: "3rem",}} color={"secondary"} textColor={'white'}>
        <CCardTitle style={{ display: 'flex',flexDirection: "column", justifyContent: 'center',alignItems:'center', width: '100%',marginTop: '1rem' }} > Breakdown by Department</CCardTitle>
        <CCardBody style={{gap: '1.5rem', display: 'flex',flexDirection: "column"}}>
          <div style={{display: 'grid', width: "100%", gridTemplateColumns: "50% 50%", justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
            <CCard style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}} >
              <CCardBody  >
                <div id="chart">
                  <ReactApexChart options={state.options} series={state.series} type="treemap" height={350} />
                </div>
              </CCardBody>
            </CCard>
            <CCard  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}}>
              <CCardBody  >
              <CanvasJSChart  options = {options4} />
              </CCardBody>
            </CCard>
            
          </div>
          <div >
            <CCard style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}} >
              <CCardBody  >
                <CanvasJSChart  options = {options3} />
              </CCardBody>
            </CCard>
            
          </div>
          
        </CCardBody>
        
      
         
		</CCard>
      <CCard style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginTop: "3rem",}}>
        <CCardTitle style={{ display: 'flex',flexDirection: "column", justifyContent: 'center',alignItems:'center', width: '100%',marginTop: '1rem' }} > Control Effectiveness Analysis</CCardTitle>
        <CCardBody style={{gap: '1.5rem', display: 'flex',flexDirection: "column"}}>
          <div style={{display: 'grid', width: "100%", gridTemplateColumns: "50% 50%", justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
            <CCard style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}} >
              <CCardBody  >
              <CanvasJSChart  options = {options5} />
              </CCardBody>
            </CCard>
            <CCard  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}}>
              <CCardBody  >
              <CanvasJSChart  options = {options6} />
              </CCardBody>
            </CCard>
            
          </div>
          <div >
            <CCard style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}} >
              <CCardBody  >
                <div id="chart">
                  <ReactApexChart options={state.options1} series={state.series1} type="bar" height={330} />
                </div>
              </CCardBody>
            </CCard>
            
          </div>
          
        </CCardBody>
        
      
         
		</CCard>
      <CCard style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginTop: "3rem",}}>
        <CCardTitle style={{ display: 'flex',flexDirection: "column", justifyContent: 'center',alignItems:'center', width: '100%',marginTop: '1rem' }} > Analysis of Risk Treatment Actions</CCardTitle>
        <CCardBody style={{gap: '1.5rem', display: 'flex',flexDirection: "column"}}>
          <div style={{display: 'grid', width: "100%", gridTemplateColumns: "50% 50%", justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
            <CCard style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}} >
              <CCardBody  >
                <div id="chart">
                  <ReactApexChart options={state.options2} series={state.series2} type="bar" height={330} />
                </div>
              </CCardBody>
            </CCard>
            <CCard  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}}>
              <CCardBody  >
                <div id="chart">
                  <ReactApexChart options={state.options3} series={state.series3} type="bar" height={330} />
                </div>
              </CCardBody>
            </CCard>
            
          </div>
          <div >
            <CCard style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}} >
              <CCardBody  >
                <div id="chart">
                  <ReactApexChart options={state.options4} series={state.series4} type="pie" height={330} />
                </div>
              </CCardBody>
            </CCard>
            
          </div>
          
        </CCardBody>
        
      
         
		</CCard>
    </>
  )
}

export default Dashboard
