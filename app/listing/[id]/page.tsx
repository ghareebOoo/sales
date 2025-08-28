import React from 'react'
import DepartmentDeatils from './DepartmentDetails'

export default async function page({params}:{params : {id : string}}) {

    const {id} = await params
  return (
    <div>
        <DepartmentDeatils id={id}/>
    </div>
  )
}
