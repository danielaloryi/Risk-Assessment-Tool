
import React, { useEffect, useState, createRef } from 'react'
import {
  CTableDataCell,
  CTableBody,
  CTableHeaderCell,
  CTableRow,
  CTableHead,
  CTable,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'
// import routes from '../../../../routes'
// import { hover } from '@testing-library/user-event/dist/types/convenience';
// import { hover } from '@testing-library/user-event/dist/types/setup/directApi'


const cardStyles = {
  cardStyling: {
    height:"12rem",
    width: "13rem",
    display: "flex",
    justifyContent:"center", 
    alignItems: "center",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    cursor:"pointer",
    textAlign: "center"
  },
  hover:{
    color: "red"
  }
}


const Operations = () => {
  return (
    <>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", gap:"1.5rem"}}>
        <CRow >
          <CCol sm={4} >
            <a href="Operations#/Physical">
              <CCard className='cardStyling' style={cardStyles.cardStyling} >
                <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <CCardTitle>Physical assets</CCardTitle>
                </CCardBody>
              </CCard>

            </a>
          </CCol>
          <CCol sm={4}>
            <a href="Operations#/Information">
              <CCard style={cardStyles.cardStyling}>
                <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <CCardTitle>Information Technology systems</CCardTitle>
                </CCardBody>
              </CCard>
              
            </a>
          </CCol>
          <CCol sm={4}>
            <a href="Operations#/People">
              <CCard style={cardStyles.cardStyling}>
                <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <CCardTitle>People and human resources</CCardTitle>
                </CCardBody>
              </CCard>
              
            </a>
          </CCol>
          
        </CRow>
        <CRow >
          <CCol sm={4} >
            <a href="Operations#/Delivery">
              <CCard className='cardStyling' style={cardStyles.cardStyling} >
                <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <CCardTitle>Delivery</CCardTitle>
                </CCardBody>
              </CCard>

            </a>
          </CCol>
          <CCol sm={4}>
            <a href="Operations#/Hazards">
              <CCard style={cardStyles.cardStyling}>
                <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <CCardTitle>Hazards</CCardTitle>
                </CCardBody>
              </CCard>
              
            </a>
          </CCol>
          <CCol sm={4}>
            <a href="Operations#/Sales">
              <CCard style={cardStyles.cardStyling}>
                <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <CCardTitle>Sales and marketing</CCardTitle>
                </CCardBody>
              </CCard>
              
            </a>
          </CCol>
          
        </CRow>
        
        <CRow>
            <CCol sm={6}>
                <a href="Operations#/ThirdParty">
                <CCard style={cardStyles.cardStyling}>
                    <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                    <CCardTitle>Third-party and managed services </CCardTitle>
                    </CCardBody>
                </CCard>
                
                </a>
            </CCol>
            <CCol sm={6}>
                <a href="Operations#/Robotics">
                <CCard style={cardStyles.cardStyling}>
                    <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                    <CCardTitle>Robotics Process Automation (RPA)</CCardTitle>
                    </CCardBody>
                </CCard>
                
                </a>
            </CCol>
        </CRow>

      </div>
      
    </>
  )
}

export default Operations
