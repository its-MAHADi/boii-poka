import React from 'react'
import BookImage from "../../assets/books.jpg"

const Banner = () => {
  return (
    <div >
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse gap-24">
    <img
      src= {BookImage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-semibold">Books to freshen up <br /> your bookshelf</h1>
      <p className="py-6">
        {/* Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi. */}
      </p>
      <button className="btn bg-[#23BE0A] text-white">View The List</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner
