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

const Communication = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Communication and investor relations</strong>
             
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
                    <CTableHeaderCell scope="row">Adverse media coverage and media relations</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Management fails to anticipate and manage the information requirements of media and other stakeholders, resulting in information about the bank's products, services, actions and initiatives being misinterpreted and leading to an impact on revenues, costs and stakeholder relations.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Board communications</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank fails to provide adequate information to the board, resulting in untimely, inaccurate or ineffective decision-making by the board. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Credit rating agencies</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Management does not fully understand the credit rating criteria, threatening its ability to achieve its target ratings.  </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Employee communication</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"> Ineffective communication channels for internal personnel. Eg: E-mail and Internet abuse</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Agent and broker communications</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Management does not communicate effectively with agents and brokers</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Investor relations</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Management does not communicate effectively, accurately or timely with its investors, threatening its relationships with investors. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Analyst communications</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Management does not communicate effectively, accurately or timely with the investment bank analysts covering the bank, eventually impacting analyst recommendations</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Management reporting and communications</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Risk that communicated strategic, operational and financial performance metrics do not provide a reliable portrayal of business performance, or are not aligned with the bank's strategic, operating and financial plans</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Vendor communication</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Management’s communication channels for its vendors is ineffective, inaccurate and untimely, threatening its ability to communicate with vendors in accordance with its contractual agreement. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Social media strategy</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Failure to create and manage an appropriate social media strategy, including bank and product and service identity, customer and stakeholder engagement and timeliness of a response, threatening its ability to protect its brand, provide accurate and timely information, and maintain regulatory compliance. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Crisis communications </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No established crisis management processes, resulting in inability to communicate the right message in an effective manner in the event of a crisis or disruption due to physical or natural circumstances. </CTableHeaderCell>
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

export default Communication
