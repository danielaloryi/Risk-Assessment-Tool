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

const Sales = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Sales and marketing</strong>
             
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
                    <CTableHeaderCell scope="row">Business development</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No established business development strategy, impacting its ability to maintain or increase its market share, or improve its net promotor score</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Promotion</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not establish a promotion strategy, resulting in selected modes of promotion that are not aligned with the target audience or the promotion failing to achieve its intended results. The bank does not establish a promotion communication strategy, impeding its ability to articulate a message that communicates a consistent and compelling incentive for potential customers.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Sales and marketing execution</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">"The bank does not establish a sales and marketing plan, resulting in marketing and selling products and services that do not meet growth and profitability targets.The bank's sales and marketing practices are out of touch with the current market dynamics, customer needs or distribution channel dynamics, impairing its ability to meet growth and profitability targets. This includes sales and marketing strategy (market research and brand management), salesforce management (pipeline management, identification and qualification of customers and management of customer relationships and contracts) and sales processes (proposal generation and sales contracting). "</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Sales and marketing conduct </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Sales and marketing practices are not in line with customer interest. These mis-selling practices which include hidden fees, inadequate communication of risks and lack of transparency may lead to financial penalties and erode customer trust.</CTableHeaderCell>
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

export default Sales
