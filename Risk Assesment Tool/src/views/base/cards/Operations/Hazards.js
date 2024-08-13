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

const Hazards = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Hazards</strong>
             
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
                    <CTableHeaderCell scope="row">Business interruption</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Adverse effect on the ability to generate revenue and meet customer demand due to material disruptions. Eg: outdated business continuity plan</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Controllable catastrophic loss</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Inability to prevent controllable events, such as sabotage, fire, high litigation costs, significant investment losses and business fraud, all of which impact its ability to sustain critical operations and provide essential products and services, or cause the bank to incur additional operating costs.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Environmental hazard</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No plan for uncontrollable events (e.g., earthquakes, ash clouds, floods, severe weather), which impairs the bank's capability to sustain critical operations and provide essential products and services, or causes the bank to incur additional operating expenses.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Geopolitical </CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not secure personal and physical assets from potential sabotage or terrorist acts, other acts of war or hostility, geopolitical, pandemic or other such events, which could interrupt operations and its ability to meet demands. </CTableHeaderCell>
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

export default Hazards
