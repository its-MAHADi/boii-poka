import React from 'react'
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams()
    const bookId = parseInt(id)
    const data = useLoaderData()
    const singleBook = data.find(book => book.bookId=== bookId);
    const {image,bookName} = singleBook;
  return (
    <div className='border-2  mx-auto'>
     <img className='w-48' src= {image} alt="" />
     <h3>{bookName}</h3>
     <button className="btn btn-accent m-2">Read</button>
     <button className="btn btn-info m-2">wishList</button>
    </div>
  )
}

export default BookDetails;
