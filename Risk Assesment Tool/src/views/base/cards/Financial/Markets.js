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

const Markets = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Market</strong>
             
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
                    <CTableHeaderCell scope="row">Derivatives</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not anticipate and manage unfavourable prices of derivatives, leading to financial loss.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Foreign exchange</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Volatility in foreign exchange rates could adversely affect future results of operations or liquidity.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Interest rate</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Inadequate or no plans for or management of fluctuating interest or inflation rates; eg: unfavourable prices paid per unit of funds borrowed per year or other units of time; or the rate of return received on invested assets, and interest rates shifts beyond anticipated earnings rates, as required to support liabilities.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Price</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not plan or manage unfavourable fluctuations in the price of traded financial instruments </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Activist investors</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not have a consistent and proactive communication plan for shareholders and investors to effectively gauge investor and shareholder sentiments through monitoring of public and social media, proactively engage in dialogue with shareholders and investors in response to critical developments, and verify that information is sufficiently vetted by the bank's executives before being released to the public, leading to a decline of investor confidence, shareholder lawsuits and activism, regulatory intervention and sanctions, prolonged negative publicity and brand erosion, etc.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Cash management</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not efficiently and effectively administer, monitor and manage cash flows, impacting its ability to maintain an adequate cash flow and liquidity position to pay obligations in a stressed liquidity environment.</CTableHeaderCell>
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

export default Markets
