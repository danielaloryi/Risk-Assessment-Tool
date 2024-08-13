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

const ThirdParty = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Third-party and managed services </strong>
             
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
                    <CTableHeaderCell scope="row">Contract life cycle </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No formal, end-to-end contracting processes in place, including planning, vendor due diligence, contracting, authorizing, implementation, and vendor performance monitoring and termination, resulting in overlaps or gaps in services provided by third parties, budget overruns, unauthorized contracts or non-performance of a contract going undetected. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Contract compliance — delivery</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No formal process and tools to monitor contracts for compliance, resulting in contractual, regulatory and bank policy noncompliance. The bank does not establish monitoring mechanisms to measure vendor performance according to a contract, resulting in vendors not meeting the bank's needs from a service delivery perspective. Common metrics include service-level-agreements, scalability and overall performance reviews.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Contract compliance — vendor reliability</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The third-party does not have a process in place to respond to an event, resulting in its inability to fulfil their contract. Events could include regulatory, country, information security, financial, disaster or reputational events. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Third-party value </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not establish oversight of third-parties, including regular monitoring of service quality, threatening the quality of the service delivered and product sold by bank, which could result in regulatory noncompliance, fines, prosecution and reputational damage.The bank does not effectively manage third-parties, resulting in value delivered not meeting expectations of the bank.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Ethical sourcing </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No consideration for ethical sourcing as part of the contracting life cycle and cost of labour benefits.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Procurement</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No established effective procurement and inventory process, resulting in suboptimal purchase and management of inventory, lack of supplies and services needed to keep the bank operating, and lack of support for the bank’s operational and financial objectives.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Cost Control </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No implemented cost-control measures, including organizational restructuring, inventory reductions, contract renegotiation, headcount rationalization, all of which impact its ability to maintain stable gross margins.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Single Source Dependence</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank depends on a limited number of vendors, limiting the bargaining power of the bank and thereby affecting its cost competitiveness</CTableHeaderCell>
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

export default ThirdParty
