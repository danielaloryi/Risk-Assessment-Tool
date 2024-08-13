import React from 'react'
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

const Legal = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Legal</strong>
             
            </CCardHeader>
            <CCardBody style={{ overflowX: "scroll" }}>
              <CTable hover>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col" style={{ minWidth: "10rem" }}>Key Business Risk Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "20rem" }}>Risk Description</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Contract</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank lacks contracting practices or structures, contracts are not negotiated consistently with proscribed policies, and they are not reviewed or authorized timely, exposing the bank's interests from a financial, tax, operational, strategic or legal perspective.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Intellectual property and patent</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not define required parameters around the creation, capture, enhancement, leverage and protection of the collective knowledge, expertise and ideas of the bank, resulting in inadequate exposure to intellectual property and patent theft and misuse. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Litigation</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Adverse affect on financial condition and operations due to litigation, including product liability and warranty claims.</CTableHeaderCell>
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

export default Legal
