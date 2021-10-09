import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import "./Lang.css"

function Language (props) {
  const { label, name, options, ...rest } = props
  return (
    <div className='form-control'>
      
      <label htmlFor={name}>{label}</label>
      <Field as='select' id={name} name={name} {...rest} placeholder="select">
        {/* {options.map(option => { */}
          return (
            <>
            <option className="font-medium bg-transparent m-4 border-0" key="English" value="english">
              {/* {option.key} */}
              English
            </option>

            <option  className="font-medium bg-transparent m-4 border-0" key="Hindi" value="hindi">
              {/* {option.key} */}
              Hindi
            </option>
             <option  className="font-medium bg-transparent m-4 border-0" key="Marathi" value="marathi">
              {/* {option.key} */}
              Marathi
            </option> 
            <option  className="font-medium bg-transparent m-4 border-0" key="Bengali" value="bengali">
              {/* {option.key} */}
              Bengali
            </option>
             {/* <option  key={option.value} value={option.value}> */}
              {/* {option.key} */}
            {/* </option> */}
            {/* <option  key={option.value} value={option.value}> */}
              {/* {option.key} */}
            {/* </option> */}
            </>
          )
        {/* } */}
        )
        {/* } */}
      </Field>
                      {/* <div className="border-2 py-2 xl:py-3 px-4 text-xs xl:text-sm rounded-full mt-1 w-full appearance-none place-content-center relative"
                      >English</div>
                      <div className="border-2 py-2 xl:py-3 px-4 text-xs xl:text-sm rounded-full mt-1 w-full appearance-none place-content-center relative">Hindi</div>
                      <div className="border-2 py-2 xl:py-3 px-4 text-xs xl:text-sm rounded-full mt-1 w-full appearance-none place-content-center relative">
                       Marathi</div>
                      <div className="border-2 py-2 xl:py-3 px-4 text-xs xl:text-sm rounded-full mt-1 w-full appearance-none place-content-center relative"
                      >Bengali</div> */}
                      
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Language