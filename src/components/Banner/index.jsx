import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import BASE_URL from '../../config/Service/Base_Url'
import ActionType from '../../config/Redux/actionType'
import { FormCheck } from 'react-bootstrap'

const Banner = (props) => {

    const check = () => {
        console.log(props.bannerSate.data.length)
    }

    useEffect(() => {
        props.updateBanner()
    },[])
    
    return (
        <div>
            <section id="home" className="slider_area">
            <div id="carouselThree" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {props.bannerSate && props.bannerSate.data.map((item,key) =>{
                    if(key === 0){
                        return (
                            <li data-target="#carouselThree" data-slide-to={key} className="active" />
                        )
                    }else{
                        return (
                            <li data-target="#carouselThree" data-slide-to={key} />
                        )
                    }
                })
                }
            </ol>
            <div className="carousel-inner" style={{'max-height':'600px'}}>
            {props.bannerSate &&
                props.bannerSate.data.map((item,key) => {
                    if(key === 0){
                    return (
                        <div className="carousel-item active" style={{'background-image':`url(${item.images}`,'background-size':'cover', 'max-height':'600px', 'background-repeat':'no-repeat'}} key={key}>
                            <div className="">
                                <div className="row" style={{background:'rgba(0,0,0,0.4)'}}>
                                    <div className="col-lg-12">
                                        <div className="col" style={{'padding-left':'100px'}}>
                                            <div className="slider-content" >
                                            <h1 className="title" onClick={() => {check()}}>{item.title}</h1>
                                            <p className="text">{item.description}</p>
                                            <ul className="slider-btn rounded-buttons">
                                                {/* <li><a className="main-btn rounded-one" href="">GET STARTED</a></li> */}
                                                {/* <li><a className="main-btn rounded-two" href="">DOWNLOAD</a></li> */}
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                        </div>
                    )
                }else{
                    return (
                        <div className="carousel-item" style={{'background-image':`url(${item.images}`,'background-size':'cover', 'max-height':'600px', 'background-repeat':'no-repeat'}} key={key}>
                            <div className="">
                                <div className="row" style={{background:'rgba(0,0,0,0.4)'}}>
                                    <div className="col-lg-12">
                                        <div className="col" style={{'padding-left':'100px'}}>
                                            <div className="slider-content" >
                                            <h1 className="title" onClick={() => {check()}}>{item.title}</h1>
                                            <p className="text">{item.description}</p>
                                            <ul className="slider-btn rounded-buttons">
                                                {/* <li><a className="main-btn rounded-one" href="">GET STARTED</a></li> */}
                                                {/* <li><a className="main-btn rounded-two" href="">DOWNLOAD</a></li> */}
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                        </div>
                    )
                }
                })
             }
            </div>
            <a className="carousel-control-prev" href="#carouselThree" role="button" data-slide="prev">
                <i className="lni lni-arrow-left" />
            </a>
            <a className="carousel-control-next" href="#carouselThree" role="button" data-slide="next">
                <i className="lni lni-arrow-right" />
            </a>
            </div>
        </section>
        </div>

    )
}

const setBanner = () =>  async (dispatch) => {
    let request = await axios.get(BASE_URL+'slide-banner')
    let data = request.data.data
    dispatch({type:ActionType.SET_BANNER, value:data})
}

const mapStateToProps = (state) => {
    return {
        bannerSate : state.bannerReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateBanner : () => {dispatch(setBanner())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Banner)