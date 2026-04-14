import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         {/* navbar */}
            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <span class="navbar-brand" >Navbar</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/'} >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/todo'} >Todo</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <span class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </span>
                                <ul class="dropdown-menu">
                                    <li><span class="dropdown-item" >Action</span></li>
                                    <li><span class="dropdown-item" >Another action</span></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><span class="dropdown-item" >Something else here</span></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link disabled" aria-disabled="true">Disabled</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
      
    </div>
  )
}

export default Navbar
