import React from 'react'
import Bronze  from '../../assets/images/bronze.png';

const Profile = (props) => {
    return(
        <>
            <section id="services" className="features-area bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12">
                            <div className="">
                                {/* <div className="card-body">
                                    {props.usernumber ?? 'Loading...'} <br/>
                                    <span className="text-bold">{props.name ?? 'Loading...'}</span> <br/>
                                    <span>{props.level ?? 'Loading...'}</span>
                                </div> */}
                                <div className="card-body text-center">
                                    <img style={{width:'200px', height:'200px'}} src={props.level ?? Bronze } alt="" srcset=""/> <br/>
                                    <span className="text-bold text-uppercase fs30">{props.name ?? 'Loading...'}</span> <br/>
                                    <span className="fs20">{props.usernumber ?? 'Loading...'}</span> <br/>
                                    <span className="text-secondary">Tingkatkan jumlah peminjamanmu untuk menaikan level, <br/> dan jangan lupa peraturannya, jika kamu tidak mempunyai history peminjaman dibulan ini, <br/> maka levelmu akan turun 1 level loh !</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12"></div>
                    </div>
                </div>   
            </section>                         
        </>
    )
}
export default Profile