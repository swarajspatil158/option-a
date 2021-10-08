import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import Logo from "../assets/Logo.svg"



function Container() {
    const dropdownOptions = [
        {key:'',value:''},
        {key: 'English',value:'english'},
        {key: 'Hindi',value:'hindi'},
        {key: 'Marathi',value:'marathi'},
        {key: 'Bengali',value:'bengali'}
    ]
    const initialValues = {
        name:'',
        designation:0,
        language:""

    }
    const validationSchema = Yup.object({
        name:Yup.string().required('Required'),
        designation:Yup.number().required('Required'),
        language:Yup.string().required('Required')
    })
    // const onSubmit = values => {
    

        // document.querySelector('.App').innerHTML=`<div>${values.name}</div><div>${values.designation}</div><div>${values.language}</div>`
      
    // }
    const onSubmit = values => {
    
        const allData = [{name:values.name,
                          desi:values.designation,
                           lang:values.language}]
                           localStorage.setItem('allData', JSON.stringify(allData));
                          window.location.href = "/#/output";
        // document.querySelector('.App').innerHTML=`<div>${values.name}</div><div>${values.designation}</div><div>${values.language}</div>`
      
    }
    return (
        <div>
          <Formik 
          initialValues={initialValues} validationSchema = {validationSchema} 
          onSubmit = {onSubmit}
          >
              {
                  formik => {
                  return (
                    <div className="md:h-screen flex my-auto">
    <div className=" mx-auto my-24 md:m-auto xl:m-auto w-11/12 px-4 md:w-1/2 xl:w-1/4 md:px-8 xl:px-8 bg-white">
      <img src={Logo} alt="logo" className="block mx-auto w-2/3 mb-12" />
                    <Form>
                      <div
                        className="text-form-label xl:text-xl font-semibold text-blue-500"
                      >Name<sup className="text-pink-500 font-bold">*</sup></div>
                      <FormikControl
                        control='input'
                        type='name'
                        name='name'
                        className="border-2  py-2 xl:py-3 px-4 text-xs xl:text-sm rounded-full mt-1 w-full mb-6"
                      />
                      <div className="text-form-label xl:text-xl font-semibold text-blue-500">Designation<sup className="text-pink-500 font-bold">*</sup></div>
                      <FormikControl
                        control='input'
                        name='designation'
                        className="border-2 py-2 xl:py-3 px-4 text-xs xl:text-sm rounded-full mt-1 w-full mb-6"
                        />
                      <div className="text-form-label xl:text-xl font-semibold text-blue-500">Language<sup className="text-pink-500 font-bold">*</sup></div>
                        <FormikControl
                        control='select'
                        name='language'
                        className="border-2 py-2 xl:py-3 px-4 text-xs xl:text-sm rounded-full mt-1 w-full mb-6"
                        options={dropdownOptions}
                        />
                      <button type='submit' style={{ pointerEvents: (!formik.isValid)  ? 'none' : 'auto' }} disabled={!formik.isValid} className="flex items-center gap-2 justify-center bg-form-label py-2 xl:py-2 w-2/5 xl:w-1/2 bg-blue-500 text-white font-semibold rounded-full mx-auto mb-12 text-sm xl:text-base">
                      {/* <  Link to='/option-a/output' disabled > */}
                        Login
                      
                        {/* </  Link> */}
                        </button>
                    </Form>
                    <div className="flex gap-2 justify-center text-xs xl:text-base mt-4 font-light text-gray-600">Powered By <img src={Logo} alt="logo" className="h-4 xl:h-6" /></div> 
                    </div>
                    </div>
                  )
                  }
            }
        </Formik> 
        </div>
    )
}
export default Container
