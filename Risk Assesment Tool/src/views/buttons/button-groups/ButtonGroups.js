import React from 'react'
import { useState,useEffect } from 'react'
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
  CFormSelect,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import MailModal from './MailModal.js'
import axios from 'axios';

const ButtonGroups = () => {
  const [tableData,setTableData] = useState([]);
  useEffect(() =>{
    axios.get('http://127.0.0.1:8000/risk').then((response) =>{
      if(response) setTableData(response.data.risks);
  });
  },[])
   
   return (
    <>
    
    <MailModal />
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Mail Info</strong>
             
            </CCardHeader>
            <CCardBody style={{ overflowX: "scroll" }}>
              <CTable hover>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "5rem" }}>Department</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "5rem" }}>Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "5rem" }}>E-Mail</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "10rem" }}>Secondary Owner</CTableHeaderCell>
                    <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "10rem" }}>Secondary Owner</CTableHeaderCell>
                    
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                {Object.values(tableData).map((value, index) => {
                  return (
                    <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{value.id}</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">{value.department}</CTableHeaderCell>
                    <CTableDataCell colSpan="1">{value.name}</CTableDataCell>
                    <CTableDataCell colSpan="1">{value.email}</CTableDataCell>
                    <CTableDataCell colSpan="1">{value.secondaryowner}</CTableDataCell>
                    <CTableDataCell colSpan="1">{value.secondaryowner}</CTableDataCell>
                    
                  </CTableRow>
                  );
                })}
                  
                 
                </CTableBody>
              </CTable>
              
            </CCardBody>
          </CCard>
        </CCol>}

    </CRow>
    </>
    
  )
}


export default ButtonGroups
