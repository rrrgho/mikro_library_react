import React, { useEffect, useState } from 'react'
import BookDetail from '../../components/BookDetail'
import { GET } from '../../config/Service/Axios'
import BASE_URL from '../../config/Service/Base_Url'


const BookDetailPage = (props) => {
    let book_id = props.match.params.id
    const [book,setBook] = useState()
    const getData = async () => {
        let send = await GET(`book-detail/${book_id}`)
        setBook(send.data)
    }

    useEffect(() => {
        getData()
    },[])


    const check = () => {
        console.log(book.data.category_relation)
    }
    return (
        <>
        <BookDetail 
        book_id={!book ? '' : book.data.id}
        title={!book ? '' : book.data.name} 
        description={!book ? '' : book.data.description}
        category={!book ? '' : book.data.category}
        locker={!book? '' : book.data.locker}
        stock={!book? '' : book.data.stock}
        cover={!book? '' : book.data.cover}
        />
        <p onClick={() => {check()}}>click</p>
        </>
    )
}

export default BookDetailPage