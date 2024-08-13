import React from 'react'
import { useState,useEffect } from 'react'
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
import RiskModal from './RiskModal.js'
import axios from 'axios';

const Buttons = () => {
  const [tableData,setTableData] = useState([]);
  useEffect(() =>{
    axios.get('http://127.0.0.1:8000/risk').then((response) =>{
      if(response) setTableData(response.data.risks);
      // console.log(response.data.risks)
  });
  },[])
   
   return (
    <>
    
    <RiskModal />
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Risk Registry</strong>
             
            </CCardHeader>
            <CCardBody style={{ overflowX: "scroll" }}>
              <CTable hover>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "5rem" }}>Department</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "5rem" }}>Process</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "7rem" }}>Sub-Process</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "10rem" }}>Risk Descriptions</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "10rem" }}>Risk Source</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "10rem" }}>Key Risk Drivers</CTableHeaderCell>
                    {/* <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "7rem" }}>Risk Category</CTableHeaderCell> */}
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "7rem" }}>Risk Family</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "7rem" }}>Risk Grade</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1"style={{ minWidth: "6rem" }}>Risk Owner</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "7rem" }}>Likelihood</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "7rem" }}>Impact</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "9rem" }}>Risk Impact Area</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "7rem" }}>Velocity</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "7rem" }}>Rating</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="2" style={{ minWidth: "9rem" }}>Mitigation actions</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="2" style={{ minWidth: "9rem" }}>Control Form</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="2" style={{ minWidth: "9rem" }}>Current Control Type</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="2" style={{ minWidth: "7rem" }}>Control Nature</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="2"style={{ minWidth: "11rem" }}>Impact of current control</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="2" style={{ minWidth: "13rem" }}>Control Effectiveness Outcome</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="2" style={{ minWidth: "9rem" }}>Residual Risk Rating</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="2" style={{ minWidth: "12rem" }}>Risk Treatment Target Rating</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "16rem" }}>Risk Level</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="2" style={{ minWidth: "9rem" }}>Risk Response Matrix</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="2" style={{ minWidth: "10rem" }}>Risk Treatment Decision</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="2" style={{ minWidth: "22rem" }}>Risk Treatment Actions & Cost</CTableHeaderCell>
                    {/* <CTableHeaderCell scope="col"colSpan="2" style={{ minWidth: "10rem" }}>Risk Treatment Priority</CTableHeaderCell> */}
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "5rem" }}>Due Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "7rem" }}>Maximum Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "6rem" }}>Action Owner</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="5" style={{ minWidth: "10rem" }}>Risk Escalation</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "7rem" }}>Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                {Object.values(tableData).map((value, index) => {
                  return (
                    <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">{value.department}</CTableHeaderCell>
                    <CTableDataCell colSpan="1">{value.process}</CTableDataCell>
                    <CTableDataCell colSpan="1">{value.sub_process}</CTableDataCell>
                    <CTableDataCell colSpan="1">{value.risk_description}</CTableDataCell>
                    {/* <CTableDataCell colSpan="1">{value.risk_category}</CTableDataCell> */}
                    <CTableDataCell colSpan="1">{value.risk_source}</CTableDataCell>
                    <CTableDataCell colSpan="1">{value.key_risk_drivers}</CTableDataCell>
                    <CTableDataCell colSpan="1">{value.risk_family}</CTableDataCell>
                    <CTableDataCell colSpan="1">{value.risk_grade}</CTableDataCell>
                    <CTableDataCell colSpan="1">{value.risk_owner}</CTableDataCell>
                    <CTableDataCell colSpan="1">{value.likelihood} </CTableDataCell>
                    <CTableDataCell colSpan="1">{value.impact} </CTableDataCell>
                    <CTableDataCell colSpan="1">{value.risk_impact_area}</CTableDataCell>
                    <CTableDataCell colSpan="1">{value.velocity} </CTableDataCell>
                    <CTableDataCell colSpan="1">{value.rating}</CTableDataCell>
                    <CTableDataCell colSpan="2">{value.mitigation_actions}</CTableDataCell>
                    <CTableDataCell colSpan="2">{value.control_form}</CTableDataCell>
                    <CTableDataCell colSpan="2">{value.current_control_type}</CTableDataCell>
                    <CTableDataCell colSpan="2">{value.control_nature} </CTableDataCell>
                    <CTableDataCell colSpan="2">{value.impact_of_current_control}</CTableDataCell>
                    <CTableDataCell colSpan="2">{value.control_effectivness}</CTableDataCell>
                    <CTableDataCell colSpan="2">{value.residual_risk_rating}</CTableDataCell>
                    <CTableDataCell colSpan="2">{value.risk_treatment_rating}</CTableDataCell>
                    <CTableDataCell colSpan="1">{value.risk_level}</CTableDataCell>
                    <CTableDataCell colSpan="2">{value.risk_responds_metrix}</CTableDataCell>
                    <CTableDataCell colSpan="2">{value.risk_treatment_decision}</CTableDataCell>
                    <CTableDataCell colSpan="2">{value.risk_treatment_action_cost}</CTableDataCell>
                    {/* <CTableDataCell colSpan="2">{value.key_controls}</CTableDataCell> */}
                    <CTableDataCell colSpan="1">{value.due_date}</CTableDataCell>
                    <CTableDataCell colSpan="1">{value.maximum_due_date}</CTableDataCell>
                    <CTableDataCell colSpan="1">{value.action_owner}</CTableDataCell>
                    <CTableDataCell colSpan="5">{value.risk_escalation}</CTableDataCell>
                    <CTableDataCell colSpan="1">{value.status}</CTableDataCell>
                  </CTableRow>
                  );
                })}
                  
                 
                </CTableBody>
              </CTable>
              
            </CCardBody>
          </CCard>
        </CCol>}

    </CRow>
    </>
    
  )
}

export default Buttons
