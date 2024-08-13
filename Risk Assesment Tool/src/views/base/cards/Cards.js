
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
// import routes from '../../../routes'
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
    '&:hover': { color: 'red !important' },
  },
  hover:{
    color: "red"
  }
}


const Cards = () => {
  return (
    <>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", gap:"1.5rem"}}>
        <CRow >
          <CCol sm={6}>
            <a href="Strategy#/Strategy">
              <CCard className='cardStyling' style={cardStyles.cardStyling} >
                <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <CCardTitle>Strategy</CCardTitle>
                </CCardBody>
              </CCard>

            </a>
          </CCol>
          <CCol sm={6}>
            <a href="Compliance#/Compliance">
              <CCard style={cardStyles.cardStyling}>
                <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <CCardTitle>Compliance</CCardTitle>
                </CCardBody>
              </CCard>
              
            </a>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm={6}>
            <a href="Operations#/Operations">
              <CCard style={cardStyles.cardStyling}>
                <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <CCardTitle>Operations</CCardTitle>
                </CCardBody>
              </CCard>
              
            </a>
          </CCol>
          <CCol sm={6}>
          <a href="Financial#/Financial">
            <CCard style={cardStyles.cardStyling}>
              <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                <CCardTitle>Financial</CCardTitle>
              </CCardBody>
            </CCard>

          </a>
          </CCol>
        </CRow>

      </div>
      
    </>
  )
}

export default Cards
