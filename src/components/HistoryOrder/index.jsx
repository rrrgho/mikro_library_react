import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { SET_HISTORY_DATA } from '../../config/Redux/action'
import ActionType from '../../config/Redux/actionType'
import { POSTAUTH } from '../../config/Service/Axios'
// import io from 'socket.io-client'


const HistoryOrder = (props) => {

    useEffect(() => {
        console.log(props.historyUser.lastPage, props.historyUser.page);
        if(props.historyUser.page === 1)
            props.updateHistory(props.historyUser.page,props.historyUser.lastPage)
    },[])

    const testing = () => {
        console.log(props.historyUser.lastPage,props.historyUser.lastPage);
    }
    
    return (
        <>
            <section id="services" className="features-area">
                <div className="container mt-5">
                    <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="section-title text-center pb-10">
                        <h3 className="title" onClick={() => {testing()}}>Peminjaman Ku</h3>
                        <p className="text">Lihat langkah kemajuanmu dalam membaca buku disini </p>
                        </div> {/* row */}
                    </div>
                    </div> {/* row */}

                    {!props.historyUser.books ? 'Loading..' : props.historyUser.books.map((item,i) => {
                        return (
                            <div className="row justify-content-center border-bottom pb-3" key={i}>     
                                <div className="col-md-12 col-lg-3 text-center">
                                    <img style={{width:'200px', height:'250px'}} className="rounded" src={props.cover ?? 'https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg'} alt=""/>
                                </div>
                                <div className="col-md-12 col-lg-9 text-lg-left text-center">
                                    <h3 className="mt-2">{item.book.name}</h3>
                                    <span>{props.description ?? 'Tidak ada deskripsi untuk buku ini'}</span>
                                    <hr/>
                                    {item.status == 'PENDING' ? 
                                    <div className="alert alert-warning" >Belum Disetujui</div> 
                                    : 
                                    <div className="alert alert-success">Disetujui</div> } 
                                </div>
                            </div> 
                        )
                    })}
                    {props.historyUser.page <= props.historyUser.lastPage && 
                    <div className="row justify-content-center">
                        <div className="col-12 text-center mt-4">
                            <button className="btn btn-info" onClick={() => {props.updateHistory(props.historyUser.page,props.historyUser.lastPage);}}>Load more</button>
                        </div>
                    </div>                    
                    }
                    
                </div> 
            </section>
        </>
    )
}


const getHistory = (page,lastPage) => async (dispatch) => {
    let send = await POSTAUTH(`history-user?page=${page}`,{}).then((res) => {
        let result = res.data.data
        let dataHistoryState = {
            data : result,
            page : page + 1 
        }
        dispatch({type:ActionType.SET_HISTORY,value:dataHistoryState})
    });
}



const mapStateToProps = (state) => {
    return {
        historyUser: state.historyReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // updateHistory : (value) => {dispatch(SET_HISTORY_DATA(value))}
        updateHistory : (value) => {dispatch(getHistory(value))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HistoryOrder)