import React from 'react'
import Bronze  from '../../assets/images/bronze.png';
import axios from 'axios'
import { POSTAUTH } from '../../config/Service/Axios';
import swal from 'sweetalert';

const Profile = (props) => {

    const changePassword = async () => {
        let oldPass = document.getElementById('oldpassword').value
        let newPass = document.getElementById('newpassword').value
        let data = {
            old_password : oldPass,
            new_password : newPass,
            confirm_password : newPass,
        }

        let request = await POSTAUTH('change-password',data);
        let result = request.data
        if(result.status !== 200){
            swal({
                title: "Sorry !!",
                text: result.message,
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
        }else{
            swal({
                title: "Good job!",
                text: result.message,
                icon: "success",
                button: "Aww yiss!",
              });
        }

    }
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
                        <div className="col-lg-6 col-md-12 m-auto text-center mt-5">
                            <h3>Change Password</h3>
                            <div className="col">
                                <input type="text" id="oldpassword" placeholder="old Password .." className="form-control"/>
                            </div>
                            <div className="col mt-2">
                                <input type="text" id="newpassword" placeholder="new password .." className="form-control"/>
                            </div>
                            <div className="col mt-4">
                                <button className="btn btn-info" onClick={() => {changePassword()}}>Change</button>
                            </div>
                        </div>
                    </div>
                </div>   
            </section>                         
        </>
    )
}
export default Profile