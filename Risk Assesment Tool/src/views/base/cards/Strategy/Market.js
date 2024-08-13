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

const Market = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Market dynamics</strong>
             
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
                    <CTableHeaderCell scope="row">Macroeconomic factors</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Risk from failure to identify macroeconomic factors that affect the bank's ability to maintain or increase revenue and profitability in a specific business environment, sector or geographical region.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Sociopolitical factors</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Geopolitical unrest and terrorist activities may cause the economic conditions to deteriorate. Eg: Trade wars, Terrorist attacks, etc.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Regulatory factors</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Risk of loss or poor financial performance due to Regulatory and legal developments. Eg: changes in laws and regulations, restrictions posed by laws governing financial institutions. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Recovery Resolution Planning</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Management is not prepared with adequate level of recovery resolution plans. Eg. Inadequate Business Continuity Plans </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Competition</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Management does not recognize or respond to competitive threats or new entrants, affecting its ability to maintain and grow its market share.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Alliances and partnerships</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Poorly monitored alliances, joint ventures, affiliations or relationships with outside entities, impeding the bank from achieving the intended objectives</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Globalization and brand dilution</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank fails to effectively support brands globally or strike the right balance between globalization and customization by country, threatening the bank's brand alignment with its markets.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Customer expectations and preferences</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not recognize or adapt to new or evolving customer expectations driven by factors such as technological developments, economic trends, demographic patterns and cultural concerns, threatening the bank's brand and product alignment with its customers’ expectations. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Adverse media coverage and media relations</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Management fails to anticipate and manage the information requirements of media and other stakeholders, resulting in information about the bank's products, services, actions and initiatives being misinterpreted and leading to an impact on revenues, costs and stakeholder relations.</CTableHeaderCell>
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

export default Market
