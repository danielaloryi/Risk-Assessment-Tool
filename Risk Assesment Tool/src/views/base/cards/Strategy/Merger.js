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

const Merger = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Merger & acquisitions and divestment</strong>
             
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
                    <CTableHeaderCell scope="row">Opportunity identification</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Failure of bank to identify business opportunities in the market e.g. identification of mergerd and acquisitions or investment opportunities on the market.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Valuation and pricing</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Management and key decision-makers are unable to reliably measure the value of a specific business or any of its significant segments in a strategic context, affecting the evaluation of owned businesses.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Due diligence risk </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Failure to perform thorough due diligence prior to executing strategic transaction activity, including failure to identify risk factors arising from different due diligence types.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Planning, implementation and incorporation</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Failure to execute and integrate specific transaction activities to capitalize on opportunities to expand the product portfolio or initiate a change in strategic or operational direction.</CTableHeaderCell>
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

export default Merger
