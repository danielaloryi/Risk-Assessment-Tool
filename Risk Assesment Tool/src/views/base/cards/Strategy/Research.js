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

const Research = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Research and development</strong>
             
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
                    <CTableHeaderCell scope="row">Discovery</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank fails to identify early stage, commercially viable products and services in a timely manner, threatening its ability to identify products aligned with the bank's overall strategy.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Pipeline</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not build a robust pipeline, impeding its ability to continuously develop new products and services at the right time. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Market responsiveness</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank's research and development does not effectively respond to changes to consumer preferences or competitor activity, impacting the bank's ability to respond to the market timely. </CTableHeaderCell>
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

export default Research
