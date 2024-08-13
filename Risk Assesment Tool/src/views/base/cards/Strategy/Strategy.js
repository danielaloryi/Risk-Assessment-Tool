
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


const Strategy = () => {
  return (
    <>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", gap:"1.5rem"}}>
        <CRow >
          <CCol sm={4} >
            <a href="Strategy#/Governance">
              <CCard className='cardStyling' style={cardStyles.cardStyling} >
                <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <CCardTitle>Governance</CCardTitle>
                </CCardBody>
              </CCard>

            </a>
          </CCol>
          <CCol sm={4}>
            <a href="Strategy#/Resource">
              <CCard style={cardStyles.cardStyling}>
                <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <CCardTitle>Resource planning and distribution</CCardTitle>
                </CCardBody>
              </CCard>
              
            </a>
          </CCol>
          <CCol sm={4}>
            <a href="Strategy#/Merger">
              <CCard style={cardStyles.cardStyling}>
                <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <CCardTitle>Merger & acquisitions and divestment</CCardTitle>
                </CCardBody>
              </CCard>
              
            </a>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm={4}>
            <a href="Strategy#/Market">
              <CCard style={cardStyles.cardStyling}>
                <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <CCardTitle>Market dynamics</CCardTitle>
                </CCardBody>
              </CCard>
              
            </a>
          </CCol>
            <CCol sm={4}>
                <a href="Strategy#/Communication">
                    <CCard style={cardStyles.cardStyling}>
                    <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                        <CCardTitle>Communication and investor relations</CCardTitle>
                    </CCardBody>
                    </CCard>

                </a>
            </CCol>
            <CCol sm={4}>
                <a href="Strategy#/Research">
                    <CCard style={cardStyles.cardStyling}>
                    <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                        <CCardTitle>Research and development</CCardTitle>
                    </CCardBody>
                    </CCard>

                </a>
            </CCol>
        </CRow>
        <CRow>
            <CCol sm={4}>
                <a href="Strategy#/Major">
                <CCard style={cardStyles.cardStyling}>
                    <CCardBody style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                    <CCardTitle>Major initiatives</CCardTitle>
                    </CCardBody>
                </CCard>
                
                </a>
            </CCol>
        </CRow>

      </div>
      
    </>
  )
}

export default Strategy
