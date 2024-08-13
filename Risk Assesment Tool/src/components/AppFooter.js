import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://deliotte.com" target="_blank" rel="noopener noreferrer">
          Copyright
        </a>
        <span className="ms-1">&copy;Deloitte 2022</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
