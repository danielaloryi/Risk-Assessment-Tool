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

const People = () => {
  return (
    <>
    
    <CRow>
      {
        <CCol xs={12} >
          <CCard className="mb-4">
            <CCardHeader>
              <strong>People and human resources</strong>
             
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
                    <CTableHeaderCell scope="row">Accountability</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">"The bank does not establish, monitor or enforce clear responsibility for the execution of key strategies, processes and enabling technologies.The bank does not establish, monitor or enforce appropriate reporting relationships and authorization protocols. This results in a lack of accountability across the bank."</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Career development planning</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not have an effective performance management process, resulting in its inability to develop and enhance employee skills, as well as achieve optimal personnel and organizational strategies, goals and objectives.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Compensation and benefits</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not compensate and provide benefits to employees that align with employee expectations and the competitor environment, impairing an employee’s incentive to perform their job function at an optimal level or align remuneration with employee behaviour and the long term interests of shareholders and customers</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Culture</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not create, instill or maintain a culture that drives ethical decisions to do the right thing versus maximizing profit and bank or individual benefits at all cost, impeding the development of and adherence to desired values in employees. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Employee safety</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not create and provide an environment where employee safety is a top priority, resulting in unfortunate events and significant reputational risk. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Third-party and public safety</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not create a work environment where the safety of the public and any third parties is a top priority, resulting in unfortunate events and significant reputational risks. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Talent</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank is unable to recruit, retain and shift top talent, impeding its ability to effectively run the operations of the business and meet the needs of the bank as its business model evolves or changes.  Failure to attract or prevent the departure of appropriately qualified employees (especially the Tech/IT talent) who are dedicated to overseeing and managing current and future regulatory standards and expectations could negatively impact performance.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Performance incentives and metrics</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not establish and monitor effective metrics or an incentive strategy for employees or key partners, which leads to inconsistent adherence to bank values, ethical standards and actions that do not align with the proper business objectives. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Succession planning</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank is unable to create and implement a succession plan for key employees, creating a gap in knowledge or the ability to execute a key role within the bank.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Skills and competencies</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank is unable to identify skills and competencies needed to achieve business objectives, impeding its ability to recruit, retain and shift talent to meet its needs. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Labor unions</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not proactively negotiate acceptable terms and conditions with labor unions, leading to a strike in the workforce and the inability to operate the business effectively.</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Mobility</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">"The bank does not adapt its workforce, threatening its ability to meet the needs of the growing global environment. The bank does not adapt how work gets done, threatening its ability to align with the changing workforce demands. </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Work and life trends</CTableHeaderCell>
                    <CTableHeaderCell scope="row"colSpan="1">The bank does not adapt to evolving lifestyle trends and ways of working, which leads to a significant disadvantage in recruiting and talent retention. </CTableHeaderCell>
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

export default People
