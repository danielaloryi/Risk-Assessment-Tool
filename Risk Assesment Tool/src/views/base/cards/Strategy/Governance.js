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

const Governance = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Governance</strong>
             
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
                    <CTableHeaderCell scope="row">Board performance</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The risk that the Board of directors do not discharge their obligations and duties owed to the bank and its stakeholders in good faith due to insufficient  knowledge thereby impairing a board’s performance to serve the bank effectively.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Tone at the top</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The Board and senior management do not have a consistent understanding and commitment towards managing risk</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Corporate social responsibility</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Risk of unfavourable corporate perception or image due to failure to perform corporate social responsibilities</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Organizational alignment</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Misalignment of risk, strategy and performance objectives of the bank</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Reputation</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Failure of management to recognize and appropriately manage events that could impact the reputation of the bank</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Financial reporting</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Failure to adopt appropriate accounting policies and effective controls leading to inaccurate financial reporting</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Risk appetite and stress testing</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Failure to appropriately define and determine the bank's acceptable level of risk and stress testing of capital in the event of adverse conditions </CTableHeaderCell>
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

export default Governance
