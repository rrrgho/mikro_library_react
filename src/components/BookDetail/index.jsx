import React from 'react';
import QRCode from "react-qr-code";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { POSTAUTH } from '../../config/Service/Axios';



const BookDetail = (props) => {
    let book_id = props.book_id
    const history = useHistory()
    const orderBook = async () => {
        swal({
            title: "Are you sure?",
            text: "Yakin akan memimjam buku ini?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then(async (willDelete) => {
            if (willDelete) {
                const data = {
                    book_id: book_id,
                }
                try{
                    let send = await POSTAUTH('order',data)
                    if(send.data.error === false){
                        swal("Good job!", send.data.message, "success");
                        setTimeout(() => {
                            history.push('/my-order')
                        },1000)
                    }else{
                        swal({
                            title: "Mohon maaf?",
                            text: send.data.message,
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                        })
                    }
                }catch{
                    swal({
                        title: "Are you sure?",
                        text: "Mohon maaf, server tidak meresponse",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                }
            } else {
              swal("Ok, silahkan cari buku lain");
            }
          });
    }

    return (
        <>
        <section id="services" className="features-area">
            <div className="container mt-5">
                <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10">
                    <div className="section-title text-center pb-10">
                    <h3 className="title">Detail Buku</h3>
                    <p className="text">Lihat selengkapnya tentang buku ini </p>
                    </div> {/* row */}
                </div>
                </div> {/* row */}
                <div className="row justify-content-center">     
                    <div className="col-md-12 col-lg-6 text-lg-right text-center">
                        <img style={{width:'200px', height:'250px'}} className="rounded" src={props.cover ?? 'https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg'} alt=""/>
                    </div>
                    <div className="col-md-12 col-lg-6 text-lg-left text-center">
                        <h3 className="mt-2">{props.title ?? 'Judul Buku'}</h3>
                        <span>{props.description ?? 'Tidak ada deskripsi untuk buku ini'}</span>
                        <hr/>
                        <p>
                            Kategori : {props.category ?? 'Kategori tidak dikenali'} <br/>
                            Rak : {props.locker ?? 'Rak belum diatur'}
                        </p>
                        {props.stock > 0 ? 
                        <div className="alert alert-success">Buku ini tersedia sebanyak {props.stock}</div> 
                        : 
                        <div className="alert alert-danger">Mohon maaf, stok buku ini telah habis terpinjam </div> } 
                    </div>
                </div> 
                {props.stock > 0 &&
                    <div className="row justify-content-center mt-5">
                        <div className="col-12 text-center">
                            <QRCode
                                value={'asa'}
                            />
                        </div>
                        <div className="col-12 text-center">
                            <p className="mt-3">
                                Scan untuk meminjam, atau klik tombol PINJAM dibawah
                            </p>
                            <button className="btn btn-info" onClick={() => {orderBook()}}>PINJAM</button>
                        </div>
                    </div>
                }
            </div> 
        </section>
    </>
    )
}

export default BookDetail