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

const Tax = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Tax</strong>
             
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
                    <CTableHeaderCell scope="row">Property taxes</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No established appropriate procedures to capture, record, and process and monitor all information relevant for proper tax reporting and planning</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Tax optimization</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No established tax optimization process, impeding its ability to minimize tax obligations consistent with its business risk appetite.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Tax strategy and planning</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not evaluate and execute tax-planning strategies, leading to misalignment of tax objectives and strategies with the overall business objectives, strategies and initiatives.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Transfer pricing</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No established transfer pricing procedures, leading to inter-bank transfer prices not meeting federal, state or local country regulatory compliance standards or not being optimized to minimize the overall tax liability. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Intellectual property migration and management</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No established intellectual property strategy, leading to interbank cost sharing, licensing, option strategies, methods, documentation and prices not in compliance with regulation requirements.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Indirect taxes</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No identification of risks and opportunities associated with global indirect taxes, leading to noncompliance with regulatory requirements and suboptimal tax strategy. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Tax department operations</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank's tax organizational structure, competency and resources are not responsive to needs of stakeholders and business partners, impacting its relationships.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Tax technology and knowledge management</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not maintain its tax technology, impeding its ability to access data in a timely manner or receive relevant information or data to support tax function requirements.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Billing and collections</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Inappropriate identification, application, reconciliation and reporting of charges and revenue based on member benefits and customer contract terms, leading to inaccurate and incomplete billing and collections. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Charge capture and coding</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Inability to capture charges for products in a timely, accurate or complete manner, resulting in lost revenue, increased costs and significant regulatory compliance implications.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Pricing and margin pressure</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank's pricing strategies are not based on market intelligence and other systematically-obtained cost and utilization trend and customer-focused information, resulting in prices or rates that customers are unwilling to pay or do not cover the costs and risks undertaken by the bank. </CTableHeaderCell>
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

export default Tax
