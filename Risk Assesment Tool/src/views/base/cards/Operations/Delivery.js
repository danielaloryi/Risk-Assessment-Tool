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

const Delivery = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Delivery</strong>
             
            </CCardHeader>
            <CCardBody style={{ overflowX: "scroll" }}>
              <CTable hover>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col" style={{ minWidth: "14rem" }}>Key Business Risk Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "30rem" }}>Risk Description</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Distribution and channel effectiveness</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not establish effective distribution channels (including broker relationship management, broker credentialing and licensing), resulting in poorly positioned or developed distribution channels and reducing its capability to effectively and efficiently access current and potential customers or vendors and partners. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Quality operations</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not establish and enforce approved quality standards, threatening the quality of the service delivered and product sold, which could result in regulatory noncompliance, fines, prosecution and reputational damage.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Pre and After-sales support and customer support</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No provision of adequate after-sales support, impacting its customer satisfaction and potentially losing customers. Eg: No established customer service unit</CTableHeaderCell>
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

export default Delivery
