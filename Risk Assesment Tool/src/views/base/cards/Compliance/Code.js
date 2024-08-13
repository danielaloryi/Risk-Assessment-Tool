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

const Code = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Code of conduct</strong>
             
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
                    <CTableHeaderCell scope="row">Conduct</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank has not established formal standards for employee behavior intended to direct and influence the way business is conducted, above and beyond the letter of the law, resulting in its employees’ lack of knowledge and adherence to ethical behavior, and an inability to report and address unethical behavior. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Financial Crime</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Failure to detect or prevent activities such as fraud, money laundering, sanction breaches, market abuse, bribery/corruption and tax evasion, resulting in the risk of regulatory noncompliance, financial losses, fines and reputational damage.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Compliance</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Poor monitoring of adherence of code of conduct, including relevant laws and regulations</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Conflicts of interest</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Relationships are subject to bias or conflicts of interest (in fact or in appearance) as a result of gift giving or other matters, leaving an organization vulnerable to accusations of unfairness, partiality, deceit, bribery and corruption, possible fines, prosecution and reputational damage.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Harassment</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Failure to prevent and deal with situations of harassment, resulting in a negative impact on an organization.  Eg: racial harassment, unwarranted sexual advances towards work colleague, etc.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Social media</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Management does not establish, communicate and enforce its formal social media policy, resulting in: privacy violations, leaking company data online, excessive use of social media in the workplace, etc.</CTableHeaderCell>
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

export default Code
