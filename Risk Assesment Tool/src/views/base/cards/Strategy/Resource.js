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

const Resource = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Resource planning and distribution</strong>
             
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
                    <CTableHeaderCell scope="row">Organizational structure</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Organisational structure does not sure effective management of resources eg. Poor segregatio of duties, lack of well defined roles, poor co-ordination among functions.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Strategy growth</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Poorly managed or lack of strategic plan which could enable the bank achieve its growth objectives</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Budget management </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Poor budget management due to inability of management to develop realistic forecast, incomplete data, poor planning and lack of discipline</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Change Management</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Ineffective change management process due to high level of resistance and lack of awareness, desire or commitment from stakeholders to support change within the bank</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Resource distribution</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Resources are not efficiently distributed by mangement to ensure achievement of business and strategic objectives</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Resource capacity</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not have sufficient or excess capacity to execute its business plans or effectively manage them.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Operations forecasting</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank's operating plan is not realistic, operative and adaptable to changes in the bank's risk profile and misalined to strategic objectives and financial plan </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Third-party risks</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not effectively manage risks related to contracted third party services e.g. poor due diligence on vendors, weak oversight and monitoring of third parties</CTableHeaderCell>
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

export default Resource
