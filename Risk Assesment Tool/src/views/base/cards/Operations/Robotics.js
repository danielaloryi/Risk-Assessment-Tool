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

const Robotics = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Robotics Process Automation (RPA)</strong>
             
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
                    <CTableHeaderCell scope="row">Policy and governance</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The Bank’s strategy does not align to the business requirements, A lack of governance over RPA can lead to ineffective and inefficient robotics implementations and ongoing operating and internal control procedures. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Access management</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">RPA users are provided with inappropriate access to the entity’s robot platform and application hosts due to non - configuration of bank systems to provide adequate logical security and security settings.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Detection and monitoring</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">TThe Bank is experiencing hardware or software issues, resulting in the loss of data or the ability to accurately process data. Attacks or malicious activity which modify the financial data/programs are not detected timely.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Change management </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The Bank has migrated inaccurate data to production or the changes promoted to production are not functioning properly.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Data and processing integrity</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The Bank’s computations or categorizations performed by the robot to create the data are inaccurate and the outputs are not valuable. The data output from the IT application to the robot is modified or lost in the transfer and impacting the processing integrity.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Threat and vulnerability management</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The Bank’s threat and vulnerability management is not sufficient to protect from attackers connecting to the systems and taking control over the robots.</CTableHeaderCell>
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

export default Robotics
