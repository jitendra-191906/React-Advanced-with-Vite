import React from 'react'
import { PropsPatterns } from './PropsPatterns'

export const SpredOp=({id,...props} )=> {
  return (
      <>
    <div>User{id} Details</div>
    <PropsPatterns {...props} />
 </>

  )

}

