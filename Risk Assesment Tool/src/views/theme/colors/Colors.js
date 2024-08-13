
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
  CCol,
  CRow,
} from '@coreui/react'



const Colors = () => {
  return (
    <>
    
      <CRow>
        {
          <CCol xs={12} >
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Instructions for the Risk Register</strong>
              
              </CCardHeader>
              <CCardBody style={{ overflowX: "scroll" }}>
                <CTable hover>
                  <CTableHead color="dark">
                    <CTableRow>
                      <CTableHeaderCell scope="col" style={{ minWidth: "12.6rem" }}></CTableHeaderCell>
                      <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "12rem" }}>Header</CTableHeaderCell>
                      <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "19rem" }}>Instruction</CTableHeaderCell>
                      <CTableHeaderCell scope="col"colSpan="1" style={{ minWidth: "16rem" }}>Comment</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">No.</CTableHeaderCell>
                      <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                      <CTableDataCell colSpan="1">This is a running reference number. No action required.</CTableDataCell>
                      <CTableDataCell colSpan="1"></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">Department</CTableHeaderCell>
                      <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                      <CTableDataCell colSpan="1">Select your Department from the dropdown</CTableDataCell>
                      <CTableDataCell colSpan="1"></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">Sub-Process</CTableHeaderCell>
                      <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                      <CTableDataCell colSpan="1">Document the sub-process associated with the risk.</CTableDataCell>
                      <CTableDataCell colSpan="1"></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">Risk Descriptions</CTableHeaderCell>
                      <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                      <CTableDataCell colSpan="1">Description of a Key Risk in the given Risk Sub-Category. Make as specific as possible</CTableDataCell>
                      <CTableDataCell colSpan="1"></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">Risk Family</CTableHeaderCell>
                      <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                      <CTableDataCell colSpan="1">The risk class from the 'Risk Universe'. There are 4 risk classes: Strategic, Financial, Operational and Compliance</CTableDataCell>
                      <CTableDataCell colSpan="1"></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">Risk Category</CTableHeaderCell>
                      <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                      <CTableDataCell colSpan="1">The risk category from the 'Risk Universe'. The risk categories are aligned to  4 risk classes.</CTableDataCell>
                      <CTableDataCell colSpan="1"></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row"></CTableHeaderCell>
                      <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                      <CTableDataCell colSpan="1"></CTableDataCell>
                      <CTableDataCell colSpan="1"></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">Risk Owner</CTableHeaderCell>
                      <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                      <CTableDataCell colSpan="1">Owner of the risk. </CTableDataCell>
                      <CTableDataCell colSpan="1"></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row" style={{display: "flex" ,alignItems: "center",height: "12.4rem"}}>Inherent Risk Assessment</CTableHeaderCell>
                      <CTableHeaderCell scope="row"colSpan="1">
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "2.6rem",width: "12rem"}}>Likelihood</CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "2.6rem",width: "12rem"}}>Impact</CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "2.6rem",width: "12rem"}}>Velocity</CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "2.6rem",width: "12rem"}}>Rating</CTableDataCell>
                        </CTableRow>
                      </CTableHeaderCell>
                      <CTableDataCell colSpan="1">
                      <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke"}}>For each Key Risk please assess potential inherent Likelihood/Probability. </CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke"}}>For each Key Risk please assess potential inherent Impact/Consequence. </CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke"}}>For each Key Risk please assess the potential velocity at which the risk could crystalize </CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke"}}>Risk rating score will be automatically calculated and cell should get coloured accordingly.</CTableDataCell>
                        </CTableRow>
                      </CTableDataCell>
                      <CTableDataCell colSpan="1" style={{textAlign: "justify" ,paddingTop: "3rem"}}>
                        Comment: Inherent Risk Assessment is the assessment of its likelihood and impact assuming no mitigation or controls are in place to reduce it or assuming that all existing mitigation or controls fail.
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row" style={{display: "flex" ,alignItems: "center",height: "12.6rem"}}>Control Effectiveness</CTableHeaderCell>
                      <CTableHeaderCell scope="row"colSpan="1">
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "2.6rem",width: "12rem"}}>Key Controls or Mitigating Actions</CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "1.35rem",width: "12rem"}}>Current Control Type</CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "1.35rem",width: "12rem"}}>Current Control Nature</CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "2.6rem",width: "12rem"}}>Is this the Optimal control?</CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "2.6rem",width: "12rem"}}>Control Effectiveness Outcome</CTableDataCell>
                        </CTableRow>
                      </CTableHeaderCell>
                      <CTableDataCell colSpan="1">
                      <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke"}}>Input existing controls and mitigating actions to manage respective key risk </CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke"}}>Select current control type from drop-down.</CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke"}}>Select current control nature from drop-down. </CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",height: "2.6rem"}}>Indicate either "Yes" or "No" in answer to the question.</CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",height: "2.6rem"}}>Automatically populated based on selected options</CTableDataCell>
                        </CTableRow>
                      </CTableDataCell>
                      <CTableDataCell colSpan="1" style={{textAlign: "justify" ,paddingTop: "3rem"}}>
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row" style={{display: "flex" ,alignItems: "center",height:"3.8rem"}}>Residual Risk</CTableHeaderCell>
                      <CTableHeaderCell scope="row"colSpan="1"></CTableHeaderCell>
                      <CTableDataCell colSpan="1">Automatically populated based on control effectiveness outcome and Inherent risk</CTableDataCell>
                      <CTableDataCell colSpan="1"></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row" style={{display: "flex" ,alignItems: "center",height: "33.7rem"}}>Risk Reduction</CTableHeaderCell>
                      <CTableHeaderCell scope="row"colSpan="1">
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "5rem",width: "12rem"}}>Is the Residual Risk {"<"} Tolerance? </CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "2.5rem",width: "12rem"}}>Risk Treatment Target Rating </CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "2.8rem",width: "12rem"}}>Risk Response Matrix- Guideline </CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "3.9rem",width: "12rem"}}>Risk Treatment Decision</CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "5rem",width: "12rem"}}>Risk Treatment Actions & Cost</CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "1.6rem",width: "12rem"}}></CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "2.6rem",width: "12rem"}}>Due Date </CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "1.6rem",width: "12rem"}}></CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "1.6rem",width: "12rem"}}>Action Owner</CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "2.8rem",width: "12rem"}}></CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "2.8rem",width: "12rem"}}>Action Status</CTableDataCell>
                        </CTableRow>
                      </CTableHeaderCell>
                      <CTableDataCell colSpan="1">
                      <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",height: "5rem"}}>In absence of formalised tolerance risk levels, using your professional judgement, please assess if the risk is currently at a tolerable level. Please enter Yes or No. </CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",height: "2.5rem"}}>Select the Risk Treatment Target Rating from the Drop-Down. </CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",height: "2.8rem"}}>The Risk Response Matrix automatically populates based on selected options.  </CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",height: "3.9rem"}}>Based on your assessment please state the risk management decision. Select from the options in the dropdown.</CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",height: "5rem"}}>If in Risk Decision you selected Treat, Transfer/Share or Terminate please describe actions to be take to implement that decision and estimated cost.</CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "1.6rem",width: "12rem"}}></CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",height: "2.6rem"}}>State the deadline for implementation of the risk reduction plan</CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",display: "flex" ,alignItems: "center",height: "1.6rem",width: "12rem"}}></CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",height: "1.6rem"}}>State the name of the action owner</CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",height: "2.8rem"}}>Senior Management member responsible for action oversight (if required) </CTableDataCell>
                        </CTableRow>
                        <CTableRow >
                          <CTableDataCell scope="col" style={{borderBottom: "1.5px solid whitesmoke",height: "2.8em"}}>State the current status of the risk reduction action from the dropdown </CTableDataCell>
                        </CTableRow>
                      </CTableDataCell>
                      <CTableDataCell colSpan="1" style={{textAlign: "justify" ,paddingTop: "3rem"}}>
                        </CTableDataCell>
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

export default Colors
