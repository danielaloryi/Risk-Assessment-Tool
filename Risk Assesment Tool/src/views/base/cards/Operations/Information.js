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

const Information = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Information Technology systems</strong>
             
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
                    <CTableHeaderCell scope="row">Program management</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No established program management practices, impacting its ability to deliver IT programs and projects on time, on budget and according to expected and required benefits.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Application development</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Application development process does not include collection and validation of business requirements, development of testing criteria, and monitoring of time and effort, resulting in applications that do not meet the needs of the business, and development of those applications does not meet time, cost or quality criteria.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Data governance and management</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Undefined enterprise-wide strategy for the management of data, including data architecture, data integration or metadata management for proper use of data for analysis, resulting in inappropriate storage, use or sharing of data. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Data integrity</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No data integrity protocols established. Eg: Weak Firewall; No data encryption software used.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Data quality</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No use of high quality risk and financial data in models which has impact on the accuracy and completeness of the risk and financial metrics. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Infrastructure and architecture</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No scalable and flexible IT infrastructure to capture, retain and transfer data in a secure and reliable environment that meets the business needs at a reasonable cost, resulting in an IT infrastructure unable to meet security requirements or support current and future achievement of strategic business objectives.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">IT reliability and recovery</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Lack of capability to recover critical data, programs and applications, and data processing capabilities in a timely manner to minimize business disruptions, resulting in applications, systems or data-processing capabilities not being available to end users when they’re needed. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">IT security</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No testing and monitoring of systems for vulnerabilities or inappropriate access, resulting in inadequate identity and access management and the failure to protect the bank from viruses or sabotage. Eg: No Antivirus installed</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Data protection and privacy</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No secure access to IT systems and applications adequately, resulting in data breaches leading to financial penalties and damaging customer trust. Eg: No use of access authenticators.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Knowledge and intellectual property management</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Documentation practices (e.g., generation, storage, retention, retrieval, distribution, and disclosure and destruction of electronic or paper documents and verbal communications) do not serve and protect the bank's interests, threatening its ability to capture, institutionalize and protect sources of knowledge and intellectual property as well as protect propriety rights to databases.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">IT supply chain management</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">"The bank does not adequately staff or train requisite resources to meet business objectives. In addition, there is an ineffective or nonexistent process to prioritize IT activities according to those that most significantly impact the achievement of the business objectives. The IT organization does not clearly illustrate the business case for critical IT initiatives, thereby failing to secure the capital needed to complete these initiatives or directing limited capital to projects that do not contribute to the achievement of the critical business objectives. "</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Cloud computing</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Ineffective management of  cloud computing arrangements, resulting in: cloud architecture or deployment challenges, increase risk that the bank's systems will not work with the provider's system, etc.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Digital and mobile</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">No Digital or mobile policy, resulting in: potential loss or leakage of important business information, security challenges, etc.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Technological change</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not embrace technological change, resulting in an inability to keep up with competitors and disruptors in the marketplace (e.g., adoption of social media channels, mobile banking, block chain, etc.). Eg: Lack of regular market survey</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Cybersecurity</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank is unable to prevent or detect cyber threats perpetrated by a malicious threat actor using a digital communication channel. Failure to adequately manage this risk, and to continually review and update processes, could result in increased fraud losses, inability to perform critical economic functions, customer detriment, potential regulatory censure and penalty, legal liability and reputational damage.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Software asset management</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not monitor its software assets, resulting in noncompliance with software license contracts in which there are more users than purchased licenses or there are more licenses than users.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Outsourcing IT policy review</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">Failure to monitor and control suppliers and third-parties which could potentially lead to client information, or critical infrastructures and services, not being adequately protected. </CTableHeaderCell>
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

export default Information
