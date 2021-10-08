import React from 'react'
import Name from './Name';
import Designation from './Designation';
import Language from './Language';


function FormikControl (props) {
  const { control, ...rest } = props
  
  // console.log(props)
  switch (control) {
    case 'input':
      return <Name {...rest} />

    case 'number':
      return <Designation {...rest} />
    case 'select':
      return <Language {...rest} />
    default:
      return null
  }
}

export default FormikControl