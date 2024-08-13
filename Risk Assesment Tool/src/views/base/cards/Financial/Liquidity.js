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

const Liquidity = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Liquidity and credit</strong>
             
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
                    <CTableHeaderCell scope="row">Cash management</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not efficiently and effectively administer, monitor and manage cash flows, impacting its ability to maintain an adequate cash flow and liquidity position to pay obligations in a stressed liquidity environment.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Funding</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Inability to access the capital markets (including through offerings of equity and regulatory capital securities) to raise funds or liquidate unencumbered assets to meet liabilities.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Hedging</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not undertake hedging transactions effectively, impacting its ability to maintain stability in profits or losses arising from price fluctuations.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Credit and collections</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Ineffective management of credit and collections, leading suboptimal level of payment received as a result of a prior business transaction.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Insurance</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not obtain insurance coverage to protect the organization from incidents and claims.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Asset Quality</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not determine how many of its assets are at financial risk and how much allowance for potential losses it must make, resulting in no protection against defaults and overall stress on its operations.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Counterparty default</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not understand and monitor counterparty exposure, leading to a default from other parties involved in the transaction. Credit risk can be exacerbated by adverse economic or market trends, as well as increased volatility in relevant markets or instruments. </CTableHeaderCell>
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

export default Liquidity
