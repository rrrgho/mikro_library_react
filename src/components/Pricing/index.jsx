import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BASE_URL from '../../config/Service/Base_Url'
import { connect } from 'react-redux'
import ActionType from '../../config/Redux/actionType'


const Pricing = (props) => {

    const [isRefresh, setIsRefresh] = useState(false)

    const check = () => {
        console.log(props.popularStateSMA)
    }

    const refreshData = async () => {
        setIsRefresh(true)
        await props.updateSMK()
        await props.updateSMA()
        await props.updateSMP()
        await props.updateSD()
        setIsRefresh(false)
    }

    const syncSMK = () => {
        props.updateSMK()
    }
    const syncSMA = () => {
        props.updateSMA()
    }
    const syncSMP = () => {
        props.updateSMP()
    }
    const syncSD = () => {
        props.updateSD()
    }

    useEffect(() => {
        props.updateSMK()
        props.updateSMA()
        props.updateSMP()
        props.updateSD()
    },[])

    return (
        <>
            <section id="pricing" className="pricing-area ">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="section-title text-center pb-25">
                        <h3 className="title">Siswa Terpopuler</h3>
                        <p className="text" onClick={() => [check()]}>Siswa Terpopuler berdasarkan jumlah point terbanyak akumulasi peminjaman</p>
                        {!isRefresh &&
                            <button className="btn btn-info" onClick={() => {refreshData()}}>
                                Hi, Click disini untuk merefresh data baru dari siswa terpopuler ya !
                            </button>
                        }
                        </div> 
                    </div>
                    </div> 
                    
                    {isRefresh 
                    ?
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <p>Loading...</p>
                            </div>
                        </div>
                    :
                        <>
                            <div className="row justify-content-center">
                                {props.popularStateSMK && props.popularStateSMK.length > 0 ? props.popularStateSMK.map((item,key) => {
                                    return (
                                        <div className="col-lg-4 col-md-7 col-sm-9" key={key}>
                                            <div className="pricing-style mt-30">
                                            <div className="pricing-header text-center">
                                                <h5 className="sub-title">{item.user.name}</h5>
                                                <p className="month"><span className="price">{item.point}</span> point</p>
                                            </div>
                                            <div className="pricing-list text-center">
                                                <ul>
                                                <li><i className="lni lni-check-mark-circle text-center" /> UNIT {item.user.unit_name}</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn rounded-buttons text-center">
                                                <a className="main-btn rounded-one">{item.user.class_name}</a>
                                            </div>    
                                            </div> 
                                        </div>
                                    )
                                }):
                                    <>
                                        <div className="col-lg-4 col-md-7 col-sm-9">
                                            <div className="pricing-style mt-30">
                                            <div className="pricing-header text-center">
                                                <h5 className="sub-title">?????</h5>
                                                <p className="month"><span className="price">1???</span> point</p>
                                            </div>
                                            <div className="pricing-list text-center">
                                                <ul>
                                                <li><i className="lni lni-check-mark-circle text-center" /> UNIT ???</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn rounded-buttons text-center">
                                                <a className="main-btn rounded-one">Kelas ???</a>
                                            </div>    
                                            </div> 
                                        </div>
                                        <div className="col-lg-4 col-md-7 col-sm-9">
                                            <div className="pricing-style mt-30">
                                            <div className="pricing-header text-center">
                                                <h5 className="sub-title">?????</h5>
                                                <p className="month"><span className="price">1???</span> point</p>
                                            </div>
                                            <div className="pricing-list text-center">
                                                <ul>
                                                <li><i className="lni lni-check-mark-circle text-center" /> UNIT ???</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn rounded-buttons text-center">
                                                <a className="main-btn rounded-one">Kelas ???</a>
                                            </div>    
                                            </div> 
                                        </div>
                                        <div className="col-lg-4 col-md-7 col-sm-9">
                                            <div className="pricing-style mt-30">
                                            <div className="pricing-header text-center">
                                                <h5 className="sub-title">?????</h5>
                                                <p className="month"><span className="price">1???</span> point</p>
                                            </div>
                                            <div className="pricing-list text-center">
                                                <ul>
                                                <li><i className="lni lni-check-mark-circle text-center" /> UNIT ???</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn rounded-buttons text-center">
                                                <a className="main-btn rounded-one">Kelas ???</a>
                                            </div>    
                                            </div> 
                                        </div>
                                    </>
                                }                
                            </div>

                            <div className="row justify-content-center">
                                {props.popularStateSMA && props.popularStateSMA.length > 0 ? props.popularStateSMA.map((item,key) => {
                                    return (
                                        <div className="col-lg-4 col-md-7 col-sm-9" key={key}>
                                            <div className="pricing-style mt-30">
                                            <div className="pricing-header text-center">
                                                <h5 className="sub-title">{item.user.name}</h5>
                                                <p className="month"><span className="price">{item.point}</span> point</p>
                                            </div>
                                            <div className="pricing-list text-center">
                                                <ul>
                                                <li><i className="lni lni-check-mark-circle text-center" /> UNIT {item.user.unit_name}</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn rounded-buttons text-center">
                                                <a className="main-btn rounded-one">{item.user.class_name}</a>
                                            </div>    
                                            </div> 
                                        </div>
                                    )
                                }):
                                    <>
                                        <div className="col-lg-4 col-md-7 col-sm-9">
                                            <div className="pricing-style mt-30">
                                            <div className="pricing-header text-center">
                                                <h5 className="sub-title">?????</h5>
                                                <p className="month"><span className="price">1???</span> point</p>
                                            </div>
                                            <div className="pricing-list text-center">
                                                <ul>
                                                <li><i className="lni lni-check-mark-circle text-center" /> UNIT ???</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn rounded-buttons text-center">
                                                <a className="main-btn rounded-one">Kelas ???</a>
                                            </div>    
                                            </div> 
                                        </div>
                                        <div className="col-lg-4 col-md-7 col-sm-9">
                                            <div className="pricing-style mt-30">
                                            <div className="pricing-header text-center">
                                                <h5 className="sub-title">?????</h5>
                                                <p className="month"><span className="price">1???</span> point</p>
                                            </div>
                                            <div className="pricing-list text-center">
                                                <ul>
                                                <li><i className="lni lni-check-mark-circle text-center" /> UNIT ???</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn rounded-buttons text-center">
                                                <a className="main-btn rounded-one">Kelas ???</a>
                                            </div>    
                                            </div> 
                                        </div>
                                        <div className="col-lg-4 col-md-7 col-sm-9">
                                            <div className="pricing-style mt-30">
                                            <div className="pricing-header text-center">
                                                <h5 className="sub-title">?????</h5>
                                                <p className="month"><span className="price">1???</span> point</p>
                                            </div>
                                            <div className="pricing-list text-center">
                                                <ul>
                                                <li><i className="lni lni-check-mark-circle text-center" /> UNIT ???</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn rounded-buttons text-center">
                                                <a className="main-btn rounded-one">Kelas ???</a>
                                            </div>    
                                            </div> 
                                        </div>
                                    </>
                                }              
                            </div>

                            <div className="row justify-content-center">
                                {props.popularStateSMP && props.popularStateSMP.length > 0 ? props.popularStateSMP.map((item,key) => {
                                    return (
                                        <div className="col-lg-4 col-md-7 col-sm-9" key={key}>
                                            <div className="pricing-style mt-30">
                                            <div className="pricing-header text-center">
                                                <h5 className="sub-title">{item.user.name}</h5>
                                                <p className="month"><span className="price">{item.point}</span> point</p>
                                            </div>
                                            <div className="pricing-list text-center">
                                                <ul>
                                                <li><i className="lni lni-check-mark-circle text-center" /> UNIT {item.user.unit_name}</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn rounded-buttons text-center">
                                                <a className="main-btn rounded-one">{item.user.class_name}</a>
                                            </div>    
                                            </div> 
                                        </div>
                                    )
                                }):
                                    <>
                                        <div className="col-lg-4 col-md-7 col-sm-9">
                                            <div className="pricing-style mt-30">
                                            <div className="pricing-header text-center">
                                                <h5 className="sub-title">?????</h5>
                                                <p className="month"><span className="price">1???</span> point</p>
                                            </div>
                                            <div className="pricing-list text-center">
                                                <ul>
                                                <li><i className="lni lni-check-mark-circle text-center" /> UNIT ???</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn rounded-buttons text-center">
                                                <a className="main-btn rounded-one">Kelas ???</a>
                                            </div>    
                                            </div> 
                                        </div>
                                        <div className="col-lg-4 col-md-7 col-sm-9">
                                            <div className="pricing-style mt-30">
                                            <div className="pricing-header text-center">
                                                <h5 className="sub-title">?????</h5>
                                                <p className="month"><span className="price">1???</span> point</p>
                                            </div>
                                            <div className="pricing-list text-center">
                                                <ul>
                                                <li><i className="lni lni-check-mark-circle text-center" /> UNIT ???</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn rounded-buttons text-center">
                                                <a className="main-btn rounded-one">Kelas ???</a>
                                            </div>    
                                            </div> 
                                        </div>
                                        <div className="col-lg-4 col-md-7 col-sm-9">
                                            <div className="pricing-style mt-30">
                                            <div className="pricing-header text-center">
                                                <h5 className="sub-title">?????</h5>
                                                <p className="month"><span className="price">1???</span> point</p>
                                            </div>
                                            <div className="pricing-list text-center">
                                                <ul>
                                                <li><i className="lni lni-check-mark-circle text-center" /> UNIT ???</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn rounded-buttons text-center">
                                                <a className="main-btn rounded-one">Kelas ???</a>
                                            </div>    
                                            </div> 
                                        </div>
                                    </>
                                }              
                            </div>
                        </>
                    }

                </div>
            </section>
        </>
    )
}

const getDataSD = () => async (dispatch) => {
    let request = await axios.get(BASE_URL+'student-popular/1');
    let data = request.data.data
    dispatch({type:ActionType.SET_POPULAR_STUDENT_SD, value:data})
}
const getDataSMP = () => async (dispatch) => {
    let request = await axios.get(BASE_URL+'student-popular/2');
    let data = request.data.data
    dispatch({type:ActionType.SET_POPULAR_STUDENT_SMP, value:data})
}
const getDataSMK = () => async (dispatch) => {
    let request = await axios.get(BASE_URL+'student-popular/3');
    let data = request.data.data
    dispatch({type:ActionType.SET_POPULAR_STUDENT_SMK, value:data})
}
const getDataSMA = () => async (dispatch) => {
    let request = await axios.get(BASE_URL+'student-popular/4');
    let data = request.data.data
    dispatch({type:ActionType.SET_POPULAR_STUDENT_SMA, value:data})
}

const mapStateToProps = (state) => {
    return {
        popularStateSMK : state.popularStudentReducer.dataSMK,
        popularStateSMA : state.popularStudentReducer.dataSMA,
        popularStateSMP : state.popularStudentReducer.dataSMP,
        popularStateSD : state.popularStudentReducer.dataSD
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSMK : () => {dispatch(getDataSMK())},
        updateSMA : () => {dispatch(getDataSMA())},
        updateSMP : () => {dispatch(getDataSMP())},
        updateSD : () => {dispatch(getDataSD())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pricing);