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

const Capital = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Capital structure</strong>
             
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
                    <CTableHeaderCell scope="row">Cash flow management</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The risk that  funds of the bank will be ineffectively managed, hence difficulty in financing cash related obligations Eg: Revenue and capacity growth requiring investment in large and expensive resources.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Equity awards and stock options</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Improper initiation, evaluation, approval, distribution, modification and monitoring equity awards for senior executives and other personnel within the bank, resulting in an impairment of executive and personnel incentives to perform their role at an optimal level.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Pension funds</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No identification, establishment and maintenance of an optimal structure for pension funds adversely affecting employee performance.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Regulatory Capital management</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Inaccurate consideration of all available capital sources and their true cost of capital prior to establishing the required regulatory capital structure, leading to a suboptimal weighted average cost of capital. Eg: Using inappropriate depreciation method for fixed assets.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Leverage ratio</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No maintenance of acceptable stipulated leverage ratio and lower loss-absorbing capacity which are arguably less resilient to shocks.</CTableHeaderCell>
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

export default Capital
