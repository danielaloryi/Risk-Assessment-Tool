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

const Accounting = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Accounting and reporting</strong>
             
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
                    <CTableHeaderCell scope="row">Accounting</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not establish appropriate procedures to capture, record, process and monitor all relevant information for proper financial reporting, disclosure and accounting practices, resulting in inaccurate, incomplete and untimely financial reporting. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Delegation of authority</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not establish policies governing approval for expenditures, including appropriately establishing and assigning clear authorities, limits and boundaries, and monitoring adherence to binding authority, resulting in unauthorized expenditures. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Financial reporting and disclosure</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not establish a financial reporting and disclosure process, leading to financial reports issued to existing and prospective investors, lenders and regulatory bodies. Eg: material misstatements, omitting material facts, or being noncompliant with applicable accounting and reporting requirements (e.g., Sarbanes-Oxley Act). </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Management information systems</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Poor maintenance of management information system, impairing its ability to capture accurately and present to management in a timely manner critical information relating to the business, leading to incorrect decisions being made by the management and the overall weakening of the business control environment being overlooked by management.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Valuation and impairment</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not establish proper valuation and impairment processes, leading to inaccurate or non-timely updating of valuation and realization of intangibles and other long-lived assets, which will ultimately affect the reported results.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Internal control requirements</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not establish, communicate and monitor adherence to the financial internal control framework, leading to significant or material weaknesses and impacting management’s assessment and reporting under country regulations.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">IFRS 9</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Inappropriate systems and processes in place to incorporate new accounting standards.</CTableHeaderCell>
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

export default Accounting
