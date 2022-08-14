import React from 'react'

export default function Toast() {
  return (
    <div className="toast-container position-fixed bottom-0 me-4 end-0 mb-4">
        <div className="toast align-items-center  text-white bg-primary">{/* add show class to show toast */}
            <div className="d-flex justify-content-between align-items-center">
                <button  type= "button" className="btn-close btn-close-white ms-3"></button>
                <div className="toast-body">succes to add Product in Card</div> 
            </div>

        </div>
    </div>
  )
}