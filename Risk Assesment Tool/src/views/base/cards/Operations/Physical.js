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

const Physical = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Physical assets</strong>
             
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
                    <CTableHeaderCell scope="row">Real estate</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Inability to initiate a change in strategic or operational direction, impacting the bank's ability to leverage real estate to achieve its business objectives. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Maintenance and performance</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Failure to adequately fund repairs to existing facilities or recognize a need to upgrade assets to meet changing capability needs.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Inventory</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Management does not provide physical protection and stewardship for inventories. Eg: No three-way matching when inventory is received and disbursed.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Insurance</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Assets are not insured and protected from catastrophic events or unexpected circumstances arising from natural disasters or other unfortunate events.</CTableHeaderCell>
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

export default Physical
