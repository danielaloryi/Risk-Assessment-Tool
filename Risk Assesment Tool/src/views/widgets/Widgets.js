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

const Widgets = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <strong>Historical Risk Trend</strong>
             
            </CCardHeader>
            <CCardBody style={{ overflowX: "scroll" }}>
              <CTable hover>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col" style={{ minWidth: "10rem" }}></CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "11rem" }}>1a</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "11rem" }}>1b</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "11rem" }}>1c</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "11rem" }}>1d</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "11rem" }}>1c</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "11rem" }}>1d</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "11rem" }}>1c</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Dec/20</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                 
                  <CTableRow>
                    <CTableHeaderCell scope="row">Jan/21</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                 
                  <CTableRow>
                    <CTableHeaderCell scope="row">Feb/21</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                 
                  <CTableRow>
                    <CTableHeaderCell scope="row">Mar/21</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                 
                  <CTableRow>
                    <CTableHeaderCell scope="row">Apr/21</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                 
                  <CTableRow>
                    <CTableHeaderCell scope="row">May/21</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                 
                  <CTableRow>
                    <CTableHeaderCell scope="row">Jun/21</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                 
                  <CTableRow>
                    <CTableHeaderCell scope="row">Jul/21</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                 
                  <CTableRow>
                    <CTableHeaderCell scope="row">Aug/21</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                 
                  <CTableRow>
                    <CTableHeaderCell scope="row">Sep/21</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                 
                  <CTableRow>
                    <CTableHeaderCell scope="row">Oct/21</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                 
                  <CTableRow>
                    <CTableHeaderCell scope="row">Nov/21</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                 
                  <CTableRow>
                    <CTableHeaderCell scope="row">Dec/21</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Jan/22</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Feb/22</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Mar/22</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Apr/22</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">May/22</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Jun/22</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Jul/22</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Aug/22</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Sep/22</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Oct/22</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Nov/22</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Dec/22</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Jan/23</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Feb/23</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Mar/23</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Apr/23</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">May/23</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Jun/23</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Jul/23</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Aug/23</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Sep/23</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Oct/23</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Nov/23</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Dec/23</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
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

export default Widgets
