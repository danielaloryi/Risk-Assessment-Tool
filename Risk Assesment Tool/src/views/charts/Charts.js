import React from 'react'
// import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import {
  CTableDataCell,
  CTableBody,
  CTableHeaderCell,
  CTableRow,
  CTableHead,
  CTable,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CModal,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormSelect
} from '@coreui/react'
import { DocsCallout } from 'src/components'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
// import { makeStyles } from '@material-ui/core/styles';


const Charts = () => {
  const random = () => Math.round(Math.random() * 100)
 

  return (
    <>

    <div style={{display: 'grid', marginBottom: '1.5rem', gridTemplateColumns: "23% 23% 23% 23%", justifyContent: 'space-between',alignItems: 'center', width: '100%',gap: '1rem'}}>

        <div style={{width: '100%',  display: 'flex', justifyContent: 'center', alignItems: 'center',gap:'0.5rem' }}>

          <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem",color:'blue', fontWeight:'bold'}}>Report</InputLabel>
          <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          style={{width: '100%', fontSize: '0.8rem'}}
          >
          <MenuItem value={1}style={{fontSize: '0.8rem'}}>Top 5 Risk</MenuItem>
          <MenuItem value={1}style={{fontSize: '0.8rem'}}>Top 10 Risk</MenuItem>
          <MenuItem value={1}style={{fontSize: '0.8rem'}}>Top 20 Risk</MenuItem>
          </Select>
        </div>
        <div style={{width: '100%',  display: 'flex', justifyContent: 'center', alignItems: 'center',gap:'0.5rem' }}>

          <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem",color:'blue', fontWeight:'bold',color:'blue', fontWeight:'bold'}}>Risk Family</InputLabel>
          <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          style={{width: '100%', fontSize: '0.8rem'}}
          >
          <MenuItem value={1}style={{fontSize: '0.8rem'}}>Al Risk</MenuItem>
          <MenuItem value={2}style={{fontSize: '0.8rem'}}>Financial</MenuItem>
          <MenuItem value={3}style={{fontSize: '0.8rem'}}>Operational</MenuItem>
          <MenuItem value={4}style={{fontSize: '0.8rem'}}>Compliance</MenuItem>
          <MenuItem value={5}style={{fontSize: '0.8rem'}}>Strategy</MenuItem>
          </Select>
        </div>
        <div style={{width: '100%',  display: 'flex', justifyContent: 'center', alignItems: 'center',gap:'0.5rem' }}>

          <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem",color:'blue', fontWeight:'bold',color:'blue', fontWeight:'bold'}}>Department</InputLabel>
          <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          style={{width: '100%', fontSize: '0.8rem'}}
          >
          <MenuItem value={1}style={{fontSize: '0.8rem'}}>IT DEPT</MenuItem>
          <MenuItem value={2}style={{fontSize: '0.8rem'}}>AUDIT DEPT</MenuItem>
          <MenuItem value={3}style={{fontSize: '0.8rem'}}>FINANCE DEPT</MenuItem>
          <MenuItem value={4}style={{fontSize: '0.8rem'}}>RISK MANAGT DEPT</MenuItem>
          <MenuItem value={5}style={{fontSize: '0.8rem'}}>ADMIN DEPT</MenuItem>
          <MenuItem value={6}style={{fontSize: '0.8rem'}}>OPERATION DEPT</MenuItem>
          <MenuItem value={7}style={{fontSize: '0.8rem'}}>COMPLIANCE DEPT</MenuItem>
          <MenuItem value={8}style={{fontSize: '0.8rem'}}>LEGAL DEPT</MenuItem>
          </Select>
        </div>
        <div style={{width: '100%',  display: 'flex', justifyContent: 'center', alignItems: 'center',gap:'0.5rem' }}>

          <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem", color:'blue', fontWeight:'bold'}}>Due Date</InputLabel>
          <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          style={{width: '100%', fontSize: '0.8rem'}}
          >
          <MenuItem value={1}style={{fontSize: '0.8rem'}}>0 - 3 months</MenuItem>
          <MenuItem value={2}style={{fontSize: '0.8rem'}}>3 - 6 months</MenuItem>
          <MenuItem value={3}style={{fontSize: '0.8rem'}}>6 - 12 months</MenuItem>
          <MenuItem value={4}style={{fontSize: '0.8rem'}}>More than 1 year</MenuItem>
          <MenuItem value={5}style={{fontSize: '0.8rem'}}>Overdue</MenuItem>
          </Select>
        </div>
    </div>
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader style={{display: 'flex', justifyContent: "center", alignItems: 'center'}}>
              <strong>RISK DASHBOARD</strong>
             
            </CCardHeader>
            <CCardBody style={{ overflowX: "scroll" }}>
              <CTable hover>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col" >No. </CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "15rem" }}> Risk Description</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "10rem" }}>Risk Family</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "10rem" }}>Department/Branch</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "10rem" }}>Risk Treatment Decision</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "15rem" }}>Risk Treatment Actions & Cost</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "10rem" }}>Action Owner</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "10rem" }}>Due Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "10rem" }}>Rating</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> Risk of non-available or outdated policies </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> Strategy </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> FINANCE DEPT </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> Treat/Mitigate </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> Enforcement of review and quality assurance review of policies </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> KA </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">30/Jun/21</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">High</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> Fraudulent payment to customer </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> Financial </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> FINANCE DEPT </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> Treat/Mitigate </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">  Confirmation of transactions before processing </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">  NG  </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">1/Jan/22</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">High</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">  Money laundry risk </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">  Operations  </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> FINANCE DEPT </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">  N/A </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> -</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> - </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Medium</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">4</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> Low capital optimization  </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">   Strategy   </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> FINANCE DEPT </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">  N/A </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> -</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> - </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Low</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">5</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> Wrong transaction posting  </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">    Operations </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> FINANCE DEPT </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">  N/A </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> -</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> - </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Low</CTableHeaderCell>
                  </CTableRow>
            
                 
                </CTableBody>
              </CTable>
              
            </CCardBody>
          </CCard>
        </CCol>}

    </CRow>

    </>
  )
}

export default Charts
