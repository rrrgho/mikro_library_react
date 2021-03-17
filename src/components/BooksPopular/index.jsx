import React from 'react'

const BooksPopular = () => {
    return (
        <>
        <section id="services" className="features-area">
            <div className="container mt-5">
                <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10">
                    <div className="section-title text-center pb-10">
                    <h3 className="title">Our Services</h3>
                    <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                    </div> {/* row */}
                </div>
                </div> {/* row */}
                <div className="row justify-content-center">
                <div className="col-lg-4 col-md-7 col-sm-9">
                    <div className="single-features mt-40">
                    <div className="features-title-icon d-flex justify-content-between">
                        <h4 className="features-title"><a href="/">Graphics Design</a></h4>
                        <div className="features-icon">
                        <i className="lni lni-brush" />
                        <img className="shape" src="assets/images/f-shape-1.svg" alt="Shape" />
                        </div>
                    </div>
                    <div className="features-content">
                        <p className="text">Short description for the ones who look for something new. Short description for the ones who look for something new.</p>
                        <a className="features-btn">LEARN MORE</a>
                    </div>
                    </div> {/* single features */}
                </div>
                <div className="col-lg-4 col-md-7 col-sm-9">
                    <div className="single-features mt-40">
                    <div className="features-title-icon d-flex justify-content-between">
                        <h4 className="features-title"><a href="/">Website Design</a></h4>
                        <div className="features-icon">
                        <i className="lni lni-layout" />
                        <img className="shape" src="assets/images/f-shape-1.svg" alt="Shape" />
                        </div>
                    </div>
                    <div className="features-content">
                        <p className="text">Short description for the ones who look for something new. Short description for the ones who look for something new.</p>
                        <a className="features-btn" href="/">LEARN MORE</a>
                    </div>
                    </div> {/* single features */}
                </div>
                <div className="col-lg-4 col-md-7 col-sm-9">
                    <div className="single-features mt-40">
                    <div className="features-title-icon d-flex justify-content-between">
                        <h4 className="features-title"><a href="/">Digital Marketing</a></h4>
                        <div className="features-icon">
                        <i className="lni lni-bolt" />
                        <img className="shape" src="assets/images/f-shape-1.svg" alt="Shape" />
                        </div>
                    </div>
                    <div className="features-content">
                        <p className="text">Short description for the ones who look for something new. Short description for the ones who look for something new.</p>
                        <a className="features-btn" href="/">LEARN MORE</a>
                    </div>
                    </div> {/* single features */}
                </div>
                </div> {/* row */}
            </div> {/* container */}
        </section>
    </>
    )
}

export default BooksPopular