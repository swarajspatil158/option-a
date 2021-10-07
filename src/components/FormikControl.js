import React from 'react'
import Name from './Name';
import Designation from './Designation';
import Language from './Language';


function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Name {...rest} />
    case 'textarea':
      return <Designation {...rest} />
    case 'select':
      return <Language {...rest} />
    default:
      return null
  }
}

export default FormikControl