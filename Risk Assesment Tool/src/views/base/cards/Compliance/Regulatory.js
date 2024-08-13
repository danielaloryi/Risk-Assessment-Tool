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

const Regulatory = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Regulatory</strong>
             
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
                    <CTableHeaderCell scope="row">Labor </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Failure to negotiate extensions of labor agreements. Eg: Payment of wages below accepted minimum wages.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Securities</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Non - adherence to local and international securities regulatory requirements.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Competitive practices/antitrust</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Non - adhere to local and international rules and regulations for competitive practices and anti-trade (e.g., risk of violating federal laws related to fair competition and pricing, antitrust fair competition, competitive and business intelligence and price-fixing)</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Data protection and privacy</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Improper standards to keep data confidential and secure between the bank and third parties that have access to such information. Eg: Use of unauthorised data transfer channels.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">International</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not effectively manage international business dealings, resulting in an exposure to geopolitical, regulatory and fraud risks.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Regulatory responset</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank's response process to regulators (data requests, filings and examinations) is inaccurate, inconsistent or untimely, impacting its reputation, relational or financial risks. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Regulatory reporting</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Statutory or other regulatory reporting by the bank includes errors or gaps, resulting in fines and reputational damage, as well as sub­optimal business planning. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">State and local</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Ineffective management of compliance to state and local regulatory requirements.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Regulatory changes</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Inadequate processes and resources to handle the ever evolving nature of regulatory reporting and compliance requirements. Eg: Failure to develop and update a compliance dashboard.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Trade</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Non - adherence to governmental regulatory requirements for trade practices.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Tax compliance</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Non - adherence to local jurisdictional and national government rules and regulations for tax compliance and dealings with jurisdictional tax authorities. Eg: Failure to file taxes on timely basis</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Industry</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not effectively manage adherence to industry regulatory requirements, resulting in noncompliance, fines, prosecution or reputational damage. </CTableHeaderCell>
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

export default Regulatory
