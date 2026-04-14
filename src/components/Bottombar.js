import React from 'react'

const Bottombar = () => {
  return (
    <div>
         {/* footer */}

            <div className='bg-dark mt-5 py-3 d-flex justify-content-around' style={{height:"20vh"}} data-bs-theme="dark">
                <div className="card border-0">
                    <h2>Links</h2>
                </div>
                <div className="card border-0">
                    <h2>Email</h2>
                </div>
                <div className="card border-0">
                    <h2>Logo and address</h2>
                </div>
            </div>
      
    </div>
  )
}

export default Bottombar
