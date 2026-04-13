import React from 'react'
import img1 from "../assets/123.png"
import "./home.css"

const Home = () => {
    return (
        <div>
            {/* navbar */}
            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* hero section */}
            <div id="carouselExampleCaptions" class="carousel-dark slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} height={500} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img1} height={500} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img1} height={500} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* about us section */}
            <div className='container mt-5'>
                <h1 className='text-center'>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id odit aut officiis! Dolores repudiandae tenetur sunt aliquam dicta quaerat cupiditate, quam repellendus distinctio, similique, ducimus quis atque autem at nisi?</p>
            </div>
            {/* Services section */}
            <div className='container mt-5 mb-5'>
                <h1 className='text-center'>Services</h1>
                <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" style={{width: "90%"}}>HTML 5</div>
                </div><br />

                 <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" style={{width: "80%"}}>CSS 3</div>
                </div><br />

                    <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{width: "70%"}}>JavaScript</div>
                </div><br />

                        <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-secondary progress-bar-striped progress-bar-animated" style={{width: "60%"}}>React JS</div></div>
            </div>
            {/* contact us section */}

            <div className="container">
                <h1 className='text-center'>Contact Us</h1>

                <div className="card p-3">
                <form>
  <div class="mb-3">
        <label for="exampleInputText1" class="form-label">username</label>
    <input type="text" class="form-control" id="exampleInputText1" aria-describedby="TextHelp" />

    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputTextArea" class="form-label">Message</label>
      <textarea class="form-control" rows={10} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
 
    {/* <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" /> */}
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div class="d-grid gap-2 mb-5">
  <button class="btn btn-primary" type="button">Submit</button>
</div>
</form>
</div>

            </div>
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

export default Home
