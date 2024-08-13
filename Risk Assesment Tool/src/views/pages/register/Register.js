import React, {useState, useEffect} from 'react'
// const [firstName, setFirstName] = useState(null);
// const [username, setUserName] = useState(null);
// const [email, setEmail] = useState(null);
// const [password,setPassword] = useState(null);
// const [confirmpassword,setConfirmPassword] = useState(null);

// const handleInputChange = (e) => {
//   const {id , value} = e.target;
//   if(id === "username"){
//     setUserName(value);
//   }
//   if(id === "email"){
//       setEmail(value);
//   }
//   if(id === "password"){
//       setPassword(value);
//   }
//   if(id === "confirmpassword"){
//       setConfirmPassword(value);
//   }

// }

// const handleSubmit  = () => {
//   console.log(username,email,password,confirmpassword);
// }
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'


const Register = () => {
  
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput type="text" id="username" placeholder="Username" autoComplete="username" required/>
                  </CInputGroup>                         
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput type="email" id="email"  placeholder="Email" autoComplete="email" required/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      id="password"
                      // value={password} onChange = {(e) => handleInputChange(e)}
                      placeholder="Password"
                      autoComplete="new-password"
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      id="confirmpassword"
                
                      placeholder="Confirm password"
                      autoComplete="new-password"
                      required
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" calss="btn" color="success">Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
