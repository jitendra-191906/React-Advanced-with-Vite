import React from 'react'

function Children({id,children}) {
  return (
      <>
    <div>User {id} Details</div>
    <div id="childre"> {children}</div>  
      </>
  )
}

export default Children