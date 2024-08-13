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

const Major = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Major initiatives</strong>
             
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
                    <CTableHeaderCell scope="row">Identifying opportunities</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not identify appropriate initiatives, impacting its ability to drive future growth, enhance operations, and optimize costs and resource utilization.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Vision and direction</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not establish a vision and direction for major initiatives, including services, products and programs, impacting the expected success of the initiatives.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Planning and execution</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not plan and execute major initiatives effectively and in an efficient manner or within the budgeted cost and time, impacting the timeline and efforts of the initiative’s implementation. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Change management</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not implement appropriate change management processes, impeding the expected value recovery from major initiatives.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Measurement and monitoring</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not identify appropriate metrics and periodically assess performance, quality and adherence to the standards set forth by the bank, resulting in an inability to measure the return on investment (ROI) towards initiatives. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">IT strategy</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not define an appropriate technology strategy, resulting in major initiatives not aligning with the bank's long-term strategy.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Business acceptance</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not implement adequate change management and communications processes, resulting in a lack of business acceptance of new business initiatives.</CTableHeaderCell>
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

export default Major
