import React from "react";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {
    CButton,
    CModal,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CFormSelect,
    CCard,
    CNav,
    CNavLink,
    CNavItem,
    CCardBody,
    CCardText,
    CCardTitle,
    CCardHeader,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody,
    CForm,
    CFormInput,
} from '@coreui/react';

import axios from "axios";



const RiskModal = () => {
    const [visible, setVisible] = useState(false)
    const [visibleLg, setVisibleLg] = useState(false)
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
        },
        grids: {
            flexGrow: 1,
          },
        backButton: {
          marginRight: theme.spacing(1),
        },
        instructions: {
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(1),
        },
        formControl: {
            margin: theme.spacing(0.5),
            minWidth: 120,
          },
        selectEmpty: {
        marginTop: theme.spacing(1),
        fontSize: "0.8rem"
        },
        textsizes: {
            fontSize: "0.8rem"
        },
        sizes:{
            width: "5rem"
        }
      }));
      
      function getSteps() {
        return ['Basic Risk Registry Information', 'Inherent Risk', 'Control Effectiveness'];
      }
      const [Department,setDepartment] = useState("");
      const [Process, setProcess] =useState("");
      const [SubProcess, setSubProcess] =useState("");
      const [RiskDescription, setRiskDescription] =useState("");
      const [RiskSource, setRiskSource] =useState("");
      const [Likelihood, setLikelihood] =useState("");
      const [Impact, setImpact] = useState("");
      const [RiskImpactArea, setRiskImpactArea] = useState("");
      const [Velocity, setVelocity] = useState("");
      const [KeycontrolsOrMitigationActions, setKeycontrolsOrMitigationActions] = useState("");
      const [ControlForm, setControlForm] = useState(""); //NOt present in the datbase yet
      const [CurrentControlType, setCurrentControlType] = useState("");
      const [ControlNature, setControlNature] = useState("");
      const [PreventRiskOccuring, setPreventRiskOccuring] = useState(""); // Not present in the database yet
      const [ControlEffectivenessOutcome, setControlEffectivenessOutcome] = useState("");
      const [ResidualRiskRating, setResidualRiskRating] = useState("");
      const [RiskTreatmentTargetRating, setRiskTreatmentTargetRating] = useState("");
      const [RiskLevel, setRiskLevel] = useState("");
      const [RiskRespondsMatrix, setRiskRespondsMatrix] = useState("");
      const [ RiskTreatmentDecision, setRiskTreatmentDecision] = useState("");
      const [RiskTreatmentActionAndCost, setRiskTreatmentActionAndCost] = useState("");
      const [DueDate, setDueDate] = useState("");
      const [MaximumDueDate, setMaximumDueDate] = useState("");
      const [ActionOwner, setActionOwner] = useState("");
      const [RiskEscalation, setRiskEscalation] = useState("");
      const [Status, setStatus] = useState("");
      //Data
      const Data ={
        department : Department,
        process : Process,
        sub_process : SubProcess,
        risk_description : RiskDescription,
        risk_source : RiskSource,
        likelihood : Likelihood,
        impact : Impact,
        impact_area : RiskImpactArea,
        velocity : Velocity,
        key_controls : KeycontrolsOrMitigationActions,
        mitigation_actions : KeycontrolsOrMitigationActions,
        current_control_type : CurrentControlType,
        control_nature : ControlNature,
        control_effectivness : ControlEffectivenessOutcome,
        residual_risk_rating : ResidualRiskRating,
        risk_treatment_rating : RiskTreatmentTargetRating,
        risk_level : RiskLevel,
        risk_responds_metrix : RiskRespondsMatrix,
        risk_treatment_decision : RiskTreatmentDecision,
        risk_treatment_action_cost : RiskTreatmentActionAndCost,
        due_date : DueDate,
        maximum_due_date : MaximumDueDate,
        action_owner :ActionOwner,
        risk_escalation : RiskEscalation,
        status : Status,
      };

      const SubmitForm = (e) =>{
        console.log(Data);
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/risk', Data)
        .then((Response) =>{
            console.log(Response);
        })
        .catch((err) => console.log(err));

        
      }
      
      function getStepContent(stepIndex) {
        switch (stepIndex) {
          case 0:
            return (
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container justifyContent="center" spacing={4}>
                        <Grid key={1} item > 
                            <Grid container justifyContent="center"  direction="column">
                                <FormControl required className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem"}}>Department</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={Department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    className={classes.selectEmpty}
                                    >
                                    <MenuItem value="">
                                        <em style={{ fontSize: "0.8rem"}}>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Accra Region'} style={{ fontSize: "0.8rem"}}>Accra Region</MenuItem>
                                    <MenuItem value={'Admin'} style={{ fontSize: "0.8rem"}}>Admin</MenuItem>
                                    <MenuItem value={'Banking Operations'} style={{ fontSize: "0.8rem"}}>Banking Operations</MenuItem>
                                    <MenuItem value={'Branch Operations'} style={{ fontSize: "0.8rem"}}>Branch Operations</MenuItem>
                                    <MenuItem value={'Business Centre'} style={{ fontSize: "0.8rem"}}>Business Centre</MenuItem>
                                    <MenuItem value={'Compliance'} style={{ fontSize: "0.8rem"}}>Compliance</MenuItem>
                                    <MenuItem value={'Compliance Dept'} style={{ fontSize: "0.8rem"}}>Compliance Dept</MenuItem>
                                    <MenuItem value={'Credit Admin'} style={{ fontSize: "0.8rem"}}>Credit Admin</MenuItem>
                                    <MenuItem value={'Credit Analysis'} style={{ fontSize: "0.8rem"}}>Credit Analysis</MenuItem>
                                    <MenuItem value={'Credit Control & Monitoring'} style={{ fontSize: "0.8rem"}}>Credit Control & Monitoring</MenuItem>
                                    <MenuItem value={'Credit Border Trader & Business'} style={{ fontSize: "0.8rem"}}>Credit Border Trader & Business</MenuItem>
                                    <MenuItem value={'Degital'} style={{ fontSize: "0.8rem"}}>Degital</MenuItem>
                                    <MenuItem value={'Domestic Operations'} style={{ fontSize: "0.8rem"}}>Domestic Operations</MenuItem>
                                    <MenuItem value={'Enterprise Risk Management'} style={{ fontSize: "0.8rem"}}>Enterprise Risk Management</MenuItem>
                                    <MenuItem value={'Finance Dept'} style={{ fontSize: "0.8rem"}}>Finance Dept</MenuItem>
                                    <MenuItem value={'Foreign Operations'} style={{ fontSize: "0.8rem"}}>Foreign Operations</MenuItem>
                                    <MenuItem value={'HR'} style={{ fontSize: "0.8rem"}}>HR</MenuItem>
                                    <MenuItem value={'IT & Systems'} style={{ fontSize: "0.8rem"}}>IT & Systems</MenuItem>
                                    <MenuItem value={'Legal Dept'} style={{ fontSize: "0.8rem"}}>Legal Dept</MenuItem>
                                    <MenuItem value={'Marketing & Comms'} style={{ fontSize: "0.8rem"}}>Marketing & Comms</MenuItem>
                                    <MenuItem value={'MID Market'} style={{ fontSize: "0.8rem"}}>MID Market</MenuItem>
                                    <MenuItem value={'Operation Dept'} style={{ fontSize: "0.8rem"}}>Operation Dept</MenuItem>
                                    <MenuItem value={'ORG & Methods'} style={{ fontSize: "0.8rem"}}>ORG & Methods</MenuItem>
                                    <MenuItem value={'Out Stations'} style={{ fontSize: "0.8rem"}}>Out Stations</MenuItem>
                                    <MenuItem value={'Permenent Control'} style={{ fontSize: "0.8rem"}}>Permenent Control</MenuItem>
                                    <MenuItem value={'PMO'} style={{ fontSize: "0.8rem"}}>PMO</MenuItem>
                                    <MenuItem value={'Reconciliation'} style={{ fontSize: "0.8rem"}}>Reconciliation</MenuItem>
                                    <MenuItem value={'Retail Business (SME)'} style={{ fontSize: "0.8rem"}}>Retail Business (SME)</MenuItem>
                                    <MenuItem value={'Retail Support Cordination'} style={{ fontSize: "0.8rem"}}>Retail Support Cordination</MenuItem>
                                    <MenuItem value={'Risk Prevention Management'} style={{ fontSize: "0.8rem"}}>Risk Prevention Management</MenuItem>
                                    <MenuItem value={'Security'} style={{ fontSize: "0.8rem"}}>Security</MenuItem>
                                    <MenuItem value={'Service Exellence'} style={{ fontSize: "0.8rem"}}>Service Exellence</MenuItem>
                                    <MenuItem value={'Special Assets'} style={{ fontSize: "0.8rem"}}>Special Assets</MenuItem>
                                    
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                            
                                    <TextField id="standard-basic" value={Process} onChange={(e) => setProcess(e.target.value)} className={classes.textsizes} style={{ fontSize: "0.8rem"}}  label="Process" />
                                    <FormHelperText>Document the process associated with the risk.</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                            
                                    <TextField id="standard-basic"value={SubProcess} onChange={e => setSubProcess((e.target.value))} className={classes.textsizes} style={{ fontSize: "0.8rem"}}  label="Sub-Process" />
                                    <FormHelperText>Document the sub-process associated with the risk.</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                            
                                    <TextField id="standard-basic" value={RiskDescription} onChange={e => setRiskDescription(e.target.value)} className={classes.textsizes} style={{ fontSize: "0.8rem"}}  label="Risk Descriptions" />
                                    <FormHelperText>Description of a Key Risk in the given Risk Sub-Category.</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                            
                                    <TextField id="standard-basic" value={RiskSource} onChange={e => setRiskSource(e.target.value)} className={classes.textsizes} style={{ fontSize: "0.8rem"}}  label="Risk Source" />
                                    <FormHelperText>Description of a Risk Source in the given Risk Sub-Category.</FormHelperText>
                                </FormControl>

                            </Grid>
                        </Grid>
                        <Grid key={2} item>
                            <Grid container justifyContent="center"  direction="column"style={{width:"20rem"}}>
                                <FormControl required className={classes.formControl} >
                                    <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem"}}>Key Risk Drivers</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    // value={Department}
                                    // onChange={handleChange}
                                    className={classes.selectEmpty}
                                    >
                                    <MenuItem value="">
                                        <em style={{ fontSize: "0.8rem"}}>None</em>
                                    </MenuItem>
                                    <MenuItem value={1} style={{ fontSize: "0.8rem"}}>Customer Behavior</MenuItem>
                                    <MenuItem value={2} style={{ fontSize: "0.8rem"}}>Stuff Behavior</MenuItem>
                                    <MenuItem value={3} style={{ fontSize: "0.8rem"}}>Governance Process</MenuItem>
                                    <MenuItem value={4} style={{ fontSize: "0.8rem"}}>Business Operation Process</MenuItem>
                                    <MenuItem value={5} style={{ fontSize: "0.8rem"}}>Regualtory Environment</MenuItem>
                                    <MenuItem value={6} style={{ fontSize: "0.8rem"}}>Competition & Market Factor</MenuItem>
                                    <MenuItem value={7} style={{ fontSize: "0.8rem"}}>Country & System Issues</MenuItem>
                                    <MenuItem value={8} style={{ fontSize: "0.8rem"}}>Exixting Technology</MenuItem>
                                    <MenuItem value={9} style={{ fontSize: "0.8rem"}}>Third Party Service (Vendor)</MenuItem>
                                    
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>

                                <FormControl required className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem"}}>Risk Family</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    // value={Department}
                                    // onChange={handleChange}
                                    className={classes.selectEmpty}
                                    >
                                    <MenuItem value="">
                                        <em style={{ fontSize: "0.8rem"}}>None</em>
                                    </MenuItem>
                                    <MenuItem value={1} style={{ fontSize: "0.8rem"}}>Strategy</MenuItem>
                                    <MenuItem value={2} style={{ fontSize: "0.8rem"}}>Financial</MenuItem>
                                    <MenuItem value={3} style={{ fontSize: "0.8rem"}}>Operational</MenuItem>
                                    <MenuItem value={4} style={{ fontSize: "0.8rem"}}>Legal & Compliance</MenuItem>
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                                

                                <FormControl required className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem"}}>Risk Grade</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    // value={Department}
                                    // onChange={handleChange}
                                    className={classes.selectEmpty}
                                    >
                                    <MenuItem value="">
                                        <em style={{ fontSize: "0.8rem"}}>None</em>
                                    </MenuItem>
                                    <MenuItem value={1} style={{ fontSize: "0.8rem"}}>Grade 1</MenuItem>
                                    <MenuItem value={2} style={{ fontSize: "0.8rem"}}>Grade 2</MenuItem>
                                    <MenuItem value={3} style={{ fontSize: "0.8rem"}}>Grade 3</MenuItem>
                                    <MenuItem value={4} style={{ fontSize: "0.8rem"}}>Grade 4</MenuItem>
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                            
                                    <TextField id="standard-basic" className={classes.textsizes}  label="Risk Owner" />
                                    <FormHelperText>Owner of the risk.</FormHelperText>
                                </FormControl>

                                
                            </Grid>
                        </Grid>
                    </Grid>
                </form>

            );
          case 1:
            return (
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container justifyContent="center"  direction="column" style={{width:"20rem", margin: "0 auto"}}>
                            <FormControl required className={classes.formControl}>
                                <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem"}}>Likelihood</InputLabel>
                                <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={Likelihood}
                                onChange={e =>setLikelihood(e.target.value) }
                                className={classes.selectEmpty}
                                >
                                <MenuItem value="">
                                    <em style={{ fontSize: "0.8rem"}}>None</em>
                                </MenuItem>
                                <MenuItem value={'Rare'} style={{ fontSize: "0.8rem"}}>Rare</MenuItem>
                                <MenuItem value={'Unlikely'} style={{ fontSize: "0.8rem"}}>Unlikely</MenuItem>
                                <MenuItem value={'Possible'} style={{ fontSize: "0.8rem"}}>Possible</MenuItem>
                                <MenuItem value={'Likely'} style={{ fontSize: "0.8rem"}}>Likely</MenuItem>
                                <MenuItem value={'Almost Certain'} style={{ fontSize: "0.8rem"}}>Almost Certain</MenuItem>
                                </Select>
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>
                            <FormControl required className={classes.formControl}>
                                <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem"}}>Impact</InputLabel>
                                <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={Impact}
                                onChange={e => setImpact(e.target.value)}
                                className={classes.selectEmpty}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Catastrophic'}>Catastrophic</MenuItem>
                                <MenuItem value={'Severe'}>Severe</MenuItem>
                                <MenuItem value={'Significant'}>Significant</MenuItem>
                                <MenuItem value={'Little'}>Little</MenuItem>
                                <MenuItem value={'No impact'}>No impact</MenuItem>
                                </Select>
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>

                            <FormControl required className={classes.formControl}>
                                <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem"}}>Risk Impact Area</InputLabel>
                                <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={RiskImpactArea}
                                onChange={e => setRiskImpactArea(e.target.value)}
                                className={classes.selectEmpty}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Catastrophic'} style={{ fontSize: "0.8rem"}}>Catastrophic</MenuItem>
                                <MenuItem value={'Severe'} style={{ fontSize: "0.8rem"}}>Severe</MenuItem>
                                <MenuItem value={'Significant'} style={{ fontSize: "0.8rem"}}>Significant</MenuItem>
                                <MenuItem value={'Little'} style={{ fontSize: "0.8rem"}}>Little</MenuItem>
                                <MenuItem value={'No impact'} style={{ fontSize: "0.8rem"}}>No impact</MenuItem>
                                </Select>
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>

                            <FormControl required className={classes.formControl}>
                                <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem"}}>Velocity</InputLabel>
                                <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={Velocity}
                                onChange={e => setVelocity(e.target.value)}
                                className={classes.selectEmpty}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Very Rapid'} style={{ fontSize: "0.8rem"}}>Very Rapid</MenuItem>
                                <MenuItem value={'Rapid'} style={{ fontSize: "0.8rem"}}>Rapid</MenuItem>
                                <MenuItem value={'Moderate'} style={{ fontSize: "0.8rem"}}>Moderate</MenuItem>
                                <MenuItem value={'Slow'} style={{ fontSize: "0.8rem"}}>Slow</MenuItem>
                                <MenuItem value={'very Slow'} style={{ fontSize: "0.8rem"}}>very Slow</MenuItem>
                                </Select>
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>
                    </Grid>
                    
                </form>

            );
          case 2:
            return (
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container justifyContent="center" spacing={4}>
                        <Grid key={1} item > 
                            <Grid container justifyContent="center"  direction="column" style={{width:"23rem"}}>
                                <FormControl required className={classes.formControl}>
                            
                                    <TextField id="standard-basic" value={KeycontrolsOrMitigationActions} onChange={e => setKeycontrolsOrMitigationActions(e.target.value)} className={classes.textsizes} style={{ fontSize: "0.8rem"}}  label="Key Controls or Mitigation actions" />
                                    {/* <FormHelperText>Document the sub-process associated with the risk.</FormHelperText> */}
                                </FormControl>

                                <FormControl required className={classes.formControl}>
                                <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem"}}>Control Form</InputLabel>
                                <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={ControlForm}
                                onChange={e => setControlForm(e.target.value)}
                                className={classes.selectEmpty}
                                >
                                <MenuItem value="">
                                    <em style={{ fontSize: "0.8rem"}}>None</em>
                                </MenuItem>
                                <MenuItem value={'Policy'} style={{ fontSize: "0.8rem"}}>Policy</MenuItem>
                                <MenuItem value={'Maker-Checker (Human dependant)'} style={{ fontSize: "0.8rem"}}>Maker-Checker (Human dependant)</MenuItem>
                                <MenuItem value={'Maker-Checker (System dependant)'} style={{ fontSize: "0.8rem"}}>Maker-Checker (System dependant)</MenuItem>
                             
                                </Select>
                                <FormHelperText>Required</FormHelperText>
                                </FormControl>

                                <FormControl required className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem"}}>What is the current Control Type?</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={CurrentControlType}
                                    onChange={e => setCurrentControlType(e.target.value)}
                                    className={classes.selectEmpty}
                                    >
                                    <MenuItem value="">
                                        <em style={{ fontSize: "0.8rem"}}>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Manual'} style={{ fontSize: "0.8rem"}}>Manual</MenuItem>
                                    <MenuItem value={'>Semi-Automated'} style={{ fontSize: "0.8rem"}}>Semi-Automated</MenuItem>
                                    <MenuItem value={'Automated'} style={{ fontSize: "0.8rem"}}>Automated</MenuItem>
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-required-label">Control Nature?</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={ControlNature}
                                    onChange={e => setControlNature(e.target.value)}
                                    className={classes.selectEmpty}
                                    >
                                    <MenuItem value="">
                                        <em style={{ fontSize: "0.8rem"}}>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Correctives'} style={{ fontSize: "0.8rem"}}>Correctives</MenuItem>
                                    <MenuItem value={'Detective'} style={{ fontSize: "0.8rem"}}>Detective</MenuItem>
                                    <MenuItem value={'Preventive'} style={{ fontSize: "0.8rem"}}>Preventive</MenuItem>
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem"}}>Has the current control prevented the risk from occuring?</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={PreventRiskOccuring}
                                    onChange={e => setPreventRiskOccuring(e.target.value)}
                                    className={classes.selectEmpty}
                                    >
                                    <MenuItem value="">
                                        <em style={{ fontSize: "0.8rem"}}>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Yes'} style={{ fontSize: "0.8rem"}}>Yes</MenuItem>
                                    <MenuItem value={'No'} style={{ fontSize: "0.8rem"}}>No</MenuItem>
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                                
                                <FormControl required className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem"}}>Control Effectiveness Outcome</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={ControlEffectivenessOutcome}
                                    onChange={e => setControlEffectivenessOutcome(e.target.value)}
                                    className={classes.selectEmpty}
                                    >
                                    <MenuItem value="">
                                        <em style={{ fontSize: "0.8rem"}}>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Treat/Mitigate'} style={{ fontSize: "0.8rem"}}>Treat/Mitigate</MenuItem>
                                    <MenuItem value={'Terminate/Mitigate'} style={{ fontSize: "0.8rem"}}>Terminate/Mitigate</MenuItem>
'                                    <MenuItem value={'Terminate/Avoid'} style={{ fontSize: "0.8rem"}}>Terminate/Avoid</MenuItem>
'                                    <MenuItem value={'Transfer/Share'} style={{ fontSize: "0.8rem"}}>Transfer/Share</MenuItem>
                                    <MenuItem value={'Tolerate/Accept'} style={{ fontSize: "0.8rem"}}>Tolerate/Accept</MenuItem>
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                            
                                    <TextField id="standard-basic"  value={ResidualRiskRating} onChange={ e => setResidualRiskRating(e.target.value)} className={classes.textsizes} style={{ fontSize: "0.8rem"}} label="Residual Risk Rating" />
                                    <FormHelperText>Document the sub-process associated with the risk.</FormHelperText>
                                </FormControl>

                                <FormControl required className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem"}}>Risk Treatment Target Rating</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={RiskTreatmentTargetRating}
                                    onChange={e => setRiskTreatmentTargetRating(e.target.value)}
                                    className={classes.selectEmpty}
                                    >
                                    <MenuItem value="">
                                        <em style={{ fontSize: "0.8rem"}}>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Very Low'} style={{ fontSize: "0.8rem"}}>Very Low</MenuItem>
                                    <MenuItem value={'Low'} style={{ fontSize: "0.8rem"}}>Low</MenuItem>
'                                    <MenuItem value={'Medium'} style={{ fontSize: "0.8rem"}}>Medium</MenuItem>
'                                    <MenuItem value={'High'} style={{ fontSize: "0.8rem"}}>High</MenuItem>
                                    <MenuItem value={'Critical'} style={{ fontSize: "0.8rem"}}>Critical</MenuItem>
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>

                                <FormControl required className={classes.formControl}>
                            
                                    <TextField id="standard-basic" value={RiskLevel} onChange={e => setRiskLevel(e.target.value)} className={classes.textsizes} style={{ fontSize: "0.8rem"}} label="Risk Level" />
                                    <FormHelperText>Document the sub-process associated with the risk.</FormHelperText>
                                </FormControl>
                                
                              

                            </Grid>
                        </Grid>
                        <Grid key={2} item>
                            <Grid container justifyContent="center"  direction="column"style={{ fontSize: "0.8rem"}}>
                                <FormControl required className={classes.formControl}>
                            
                                    <TextField id="standard-basic" value={RiskRespondsMatrix} onChange={e => setRiskRespondsMatrix(e.target.value)} className={classes.textsizes} style={{ fontSize: "0.8rem"}} label="Risk Responds Matrix" />
                                    <FormHelperText>Document the sub-process associated with the risk.</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem"}}>Risk Treatment Decision</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={RiskTreatmentDecision}
                                    onChange={e => setRiskTreatmentDecision(e.target.value)}
                                    className={classes.selectEmpty}
                                    >
                                    <MenuItem value="">
                                        <em style={{ fontSize: "0.8rem"}}>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Treat/Mitigate'} style={{ fontSize: "0.8rem"}}>Treat/Mitigate</MenuItem>
                                    <MenuItem value={'Terminate/Mitigate'} style={{ fontSize: "0.8rem"}}>Terminate/Mitigate</MenuItem>
                                    <MenuItem value={'Terminate/Avoid'} style={{ fontSize: "0.8rem"}}>Terminate/Avoid</MenuItem>
                                    <MenuItem value={'Transfer/Share'} style={{ fontSize: "0.8rem"}}>Transfer/Share</MenuItem>
                                    <MenuItem value={'Tolerate/Accept'} style={{ fontSize: "0.8rem"}}>Tolerate/Accept</MenuItem>
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                            
                                    <TextField id="standard-basic" value={RiskTreatmentActionAndCost} onChange={e => setRiskTreatmentActionAndCost(e.target.value)} className={classes.textsizes} style={{ fontSize: "0.8rem"}} label="Risk Treatment Actions & Cost" />
                                    <FormHelperText>Document the Risk Treatment Actions & Cost.</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                            
                                    <TextField id="standard-basic" type='date' value={DueDate} onChange={e => setDueDate(e.target.value)} className={classes.textsizes} style={{ fontSize: "0.8rem"}}  />
                                    <FormHelperText>Due Date</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                            
                                    <TextField id="standard-basic" type='date' value={MaximumDueDate} onChange={e => setMaximumDueDate(e.target.value)} className={classes.textsizes} style={{ fontSize: "0.8rem"}}  />
                                    <FormHelperText>--Maximum Due Date--</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                            
                                    <TextField id="standard-basic" value={ActionOwner} onChange={e => setActionOwner(e.target.value)} className={classes.textsizes} style={{ fontSize: "0.8rem"}} label="Action Owner" />
                                    <FormHelperText>State Risk Owner</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                            
                                    <TextField id="standard-basic" value={RiskEscalation} onChange={e => setRiskEscalation(e.target.value)} className={classes.textsizes} style={{ fontSize: "0.8rem"}} label="Risk Escalation" />
                                    <FormHelperText>Describe Risk Escalation </FormHelperText>
                                </FormControl>

                                <FormControl required className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-required-label" style={{ fontSize: "0.8rem"}}>Status</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={Status}
                                    onChange={e => setStatus(e.target.value)}
                                    className={classes.selectEmpty}
                                    >
                                    <MenuItem value="">
                                        <em style={{ fontSize: "0.8rem"}}>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Not Started'} style={{ fontSize: "0.8rem"}}>Not Started</MenuItem>
                                    <MenuItem value={'On-Track'} style={{ fontSize: "0.8rem"}}>On-Track</MenuItem>
                                    <MenuItem value={'At Risk'} style={{ fontSize: "0.8rem"}}>At Risk</MenuItem>
                                    <MenuItem value={'Delayed'} style={{ fontSize: "0.8rem"}}>Delayed</MenuItem>
                                    <MenuItem value={'Completed'} style={{ fontSize: "0.8rem"}}>Completed</MenuItem>
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>

                            </Grid>
                        </Grid>
                    </Grid>
                </form>

            );
          default:
            return 'Unknown stepIndex';
        }
      }
        const classes = useStyles();
        const [activeStep, setActiveStep] = React.useState(0);
        const steps = getSteps();
      
        const handleNext = () => {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        };
      
        const handleBack = () => {
          setActiveStep((prevActiveStep) => prevActiveStep - 1);
        };
      
        const handleReset = () => {
          setActiveStep(0);
        };
    return (
        <>
            <CButton onClick={() => setVisibleLg(!visibleLg)} style={{outline: "hidden",margin: "1rem"}}>Add Risk</CButton>
            
            <CModal size="lg"  visible={visibleLg} onClose={() => setVisible(false)}>
                <CModalHeader>
                    <CModalTitle>Level Risk Register</CModalTitle>
                </CModalHeader>
                <CModalBody >
                    <div className={classes.root}>
                        <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                        </Stepper>
                        <div>
                        {activeStep === steps.length ? (
                            <div>
                            <Typography className={classes.instructions}>All steps completed</Typography>
                            <Button onClick={handleReset}>Reset</Button>
                            </div>
                        ) : (
                            <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                                >
                                Back
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                            </div>
                        )}
                        </div>
                    </div>

                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary"  aria-label="Close" onClick={() => setVisibleLg(false)}>
                        Close
                    </CButton>
                    <CButton color="primary" onClick={SubmitForm}>Save</CButton>
                </CModalFooter>
            </CModal>
        </>

    )
}

export default RiskModal;

