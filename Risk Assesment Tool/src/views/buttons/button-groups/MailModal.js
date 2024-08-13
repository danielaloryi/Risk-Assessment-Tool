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
const MailModal = () => {
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
        return [''];
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
                                    // value={Department}
                                    // onChange={handleChange}
                                    className={classes.selectEmpty}
                                    >
                                    <MenuItem value="">
                                        <em style={{ fontSize: "0.8rem"}}>None</em>
                                    </MenuItem>
                                    <MenuItem value={1} style={{ fontSize: "0.8rem"}}>Accra Region</MenuItem>
                                    <MenuItem value={2} style={{ fontSize: "0.8rem"}}>Admin</MenuItem>
                                    <MenuItem value={3} style={{ fontSize: "0.8rem"}}>Banking Operations</MenuItem>
                                    <MenuItem value={4} style={{ fontSize: "0.8rem"}}>Branch Operations</MenuItem>
                                    <MenuItem value={5} style={{ fontSize: "0.8rem"}}>Business Centre</MenuItem>
                                    <MenuItem value={6} style={{ fontSize: "0.8rem"}}>Compliance</MenuItem>
                                    <MenuItem value={7} style={{ fontSize: "0.8rem"}}>Compliance Dept</MenuItem>
                                    <MenuItem value={8} style={{ fontSize: "0.8rem"}}>Credit Admin</MenuItem>
                                    <MenuItem value={9} style={{ fontSize: "0.8rem"}}>Credit Analysis</MenuItem>
                                    <MenuItem value={10} style={{ fontSize: "0.8rem"}}>Credit Control & Monitoring</MenuItem>
                                    <MenuItem value={11} style={{ fontSize: "0.8rem"}}>Credit Border Trader & Business</MenuItem>
                                    <MenuItem value={12} style={{ fontSize: "0.8rem"}}>Degital</MenuItem>
                                    <MenuItem value={13} style={{ fontSize: "0.8rem"}}>Domestic Operations</MenuItem>
                                    <MenuItem value={14} style={{ fontSize: "0.8rem"}}>Enterprise Risk Management</MenuItem>
                                    <MenuItem value={15} style={{ fontSize: "0.8rem"}}>Finance Dept</MenuItem>
                                    <MenuItem value={16} style={{ fontSize: "0.8rem"}}>Foreign Operations</MenuItem>
                                    <MenuItem value={17} style={{ fontSize: "0.8rem"}}>HR</MenuItem>
                                    <MenuItem value={18} style={{ fontSize: "0.8rem"}}>IT & Systems</MenuItem>
                                    <MenuItem value={19} style={{ fontSize: "0.8rem"}}>Legal Dept</MenuItem>
                                    <MenuItem value={20} style={{ fontSize: "0.8rem"}}>Marketing & Comms</MenuItem>
                                    <MenuItem value={21} style={{ fontSize: "0.8rem"}}>MID Market</MenuItem>
                                    <MenuItem value={22} style={{ fontSize: "0.8rem"}}>Operation Dept</MenuItem>
                                    <MenuItem value={23} style={{ fontSize: "0.8rem"}}>ORG & Methods</MenuItem>
                                    <MenuItem value={24} style={{ fontSize: "0.8rem"}}>Out Stations</MenuItem>
                                    <MenuItem value={25} style={{ fontSize: "0.8rem"}}>Permenent Control</MenuItem>
                                    <MenuItem value={26} style={{ fontSize: "0.8rem"}}>PMO</MenuItem>
                                    <MenuItem value={27} style={{ fontSize: "0.8rem"}}>Reconciliation</MenuItem>
                                    <MenuItem value={28} style={{ fontSize: "0.8rem"}}>Retail Business (SME)</MenuItem>
                                    <MenuItem value={29} style={{ fontSize: "0.8rem"}}>Retail Support Cordination</MenuItem>
                                    <MenuItem value={30} style={{ fontSize: "0.8rem"}}>Risk Prevention Management</MenuItem>
                                    <MenuItem value={31} style={{ fontSize: "0.8rem"}}>Security</MenuItem>
                                    <MenuItem value={32} style={{ fontSize: "0.8rem"}}>Service Exellence</MenuItem>
                                    <MenuItem value={33} style={{ fontSize: "0.8rem"}}>Special Assets</MenuItem>
                                    
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                                    {/* <InputLabel id="demo-simple-select-required-label">Sub-Process</InputLabel> */}
                                    <TextField id="standard-basic" className={classes.textsizes} style={{ fontSize: "0.8rem"}}  label="Name" />
                                    <FormHelperText>Kindly Provide your Name.</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                                    {/* <InputLabel id="demo-simple-select-required-label">Sub-Process</InputLabel> */}
                                    <TextField id="standard-basic" className={classes.textsizes} style={{ fontSize: "0.8rem"}}  label="E-Mail" />
                                    <FormHelperText>Kindly Provide your E-Mail Address.</FormHelperText>
                                </FormControl>
                                <FormControl required className={classes.formControl}>
                                    {/* <InputLabel id="demo-simple-select-required-label">Sub-Process</InputLabel> */}
                                    <TextField id="standard-basic" className={classes.textsizes} style={{ fontSize: "0.8rem"}}  label="Secondary Owner" />
                                    <FormHelperText>Kindly Provide a Secondary Owner</FormHelperText>
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
                    <CModalTitle>Mail Information</CModalTitle>
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
                    <CButton color="primary">Save</CButton>
                </CModalFooter>
            </CModal>
        </>

    )
}

export default MailModal;

