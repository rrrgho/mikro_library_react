import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SET_BOOK_DATA, SET_REMOVE_BOOK, SET_SEARCH_BOOK } from '../../config/Redux/action';
import { GET, POSTAUTH } from '../../config/Service/Axios';

const Books = (props) => {
    const history = useHistory()
    const [books] = useState();
    const [inSearch,setInSearch] = useState(false)

    const getBook = async () => {
        await GET(`book-data?page=${props.booksData.page}`)
        .then(response => {
            let result = response.data.data
            let array = books ?? []
            result.data.map(item =>{
                array.push(item)
            })
            let dataBookState = {
                data : array,
                page : props.booksData.page + 1
            }
            props.updateBook(dataBookState)
        })
        .catch((error) => {
            alert("Tidak ada jaringan internet !")
        })
        

        
    }

    const searchBook = async () => {
        let bookInSearch = document.getElementById('book_search_input').value
        if(!inSearch){
            if(bookInSearch.length > 0){
                let data = {
                    judul : bookInSearch
                }
                let send = await POSTAUTH(`search-book`, data);
                let result = send.data.data
                console.log(result)
                let array = []
                result.data.map(item => {
                    array.push(item)
                })
                let dataState = {
                    data : array,
                    page : props.booksData.pageSearch + 1
                }
                props.updateBookSearch(dataState)
                setInSearch(bookInSearch)
            }else{
                alert('Judul buku tidak boleh kosong')
            }
        }else{
            removeSearchBook()
            if(bookInSearch.length > 0){
                let data = {
                    judul : bookInSearch
                }
                let send = await POSTAUTH(`search-book`, data);
                let result = send.data.data
                console.log(result)
                let array = []
                result.data.map(item => {
                    array.push(item)
                })
                let dataState = {
                    data : array,
                    page : props.booksData.pageSearch + 1
                }
                props.updateBookSearch(dataState)
                setInSearch(bookInSearch)
            }else{
                alert('Judul buku tidak boleh kosong')
            }
        }
    }

    const removeSearchBook = () => {
        props.updateRemoveSearch()
        setInSearch(false)
        setTimeout(() => {
            console.log(props.booksData.books)
            console.log(props.booksData.booksTmp)
        },500)
    }

    useEffect(() => {
        if(props.booksData.page === 1){
            getBook()
        }
    },[])

    const goDetailBook = (book_id) => {
        history.push(`/book-detail/${book_id}`)
    }

    
    return (
        <>
            <section id="services" className="features-area">
                <div className="container mt-5">
                    <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="section-title text-center pb-10">
                        <h3 className="title">Cari Buku</h3>
                        <p className="text">Temukan buku yang kamu cari dengan mengetikan judul buku !</p>
                        <input type="text" className="form-control" id="book_search_input" placeholder="Hanya cari berdasarkan judul buku .." autoFocus/>
                        <button className="btn btn-info btn-block mt-3" onClick={() => {searchBook()}}>Cari Buku</button>
                        {
                            inSearch && <button className="btn btn-warning mt-2" onClick={() => {removeSearchBook()}}>Hapus hasil pencarian</button>
                        }
                        </div> {/* row */}
                    </div>
                    </div> {/* row */}
                    <div className="row justify-content-center">                    
                    {
                        !props.booksData.books ? <span>Loading...</span> :
                        props.booksData.books.map((item, i) => {
                            return (
                                    <div className="col-lg-4 col-md-7 col-sm-9" onClick={() => {goDetailBook(item.id)}} key={i}>
                                        <div className="single-features mt-40 rounded">
                                        <div className="row">
                                            <div className="col-8">
                                                <h5 className="text-secondary" style={{'fontSize':'25px'}}>{item.name}</h5>
                                                <p className="text-secondary">{item.description ?? 'Tidak ada deskripsi buku'}</p>
                                            </div>
                                            <div className="col-4">
                                                <img src={item.cover ?? 'https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg'} style={{width:'150px', height:'170px'}} alt=""/>
                                            </div>
                                        </div>
                                        <div className="features-content">
                                            <span className="text-secondary">Creator : {item.creator ?? 'Tidak diketahui'}</span>
                                            <span className="text-secondary">Kode : {item.code_of_book ?? 'Tidak diketahui'}</span> <br/><br/>
                                            {
                                                item.ready ? <span className="badge badge-success">Tersedia</span>
                                                : <span className="badge badge-danger">Tidak tersedia</span>
                                            }
                                        </div>
                                        </div> 
                                    </div>
                            )
                        })
                    }  
                    </div> 
                    {
                        !inSearch &&
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-12 text-center">
                                <button className="btn btn-info mt-3" onClick={() => {getBook()}}>Load More</button>
                            </div>
                        </div>
                    }
                </div> 
            </section>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        booksData : state.bookReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateBook: (value) => {dispatch(SET_BOOK_DATA(value))},
        updateBookSearch: (value) => {dispatch(SET_SEARCH_BOOK(value))},
        updateRemoveSearch: () => {dispatch(SET_REMOVE_BOOK())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Books);