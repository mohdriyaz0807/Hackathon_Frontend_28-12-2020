import React, { useState } from 'react';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
 
const SweetAlert = withSwalInstance(swal);
 
 function AlertDialogSlide(props){
     const[state,setState]=useState({show:false})
  return (
    <div>
      <SweetAlert
        show={props.status}
        title="Demo"
        text="SweetAlert in React"
        onConfirm={() => setState({ show: false })}
      />
    </div>
  );
}
export default AlertDialogSlide