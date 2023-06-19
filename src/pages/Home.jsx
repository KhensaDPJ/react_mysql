import React from 'react'
import {Link} from 'react-router-dom'

export const Home = () => {
  const posts=[
    {
      id:1,
      title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi neque nulla doloribus impedit perferendis, quaerat distinctio error possimus. Perferendis consectetur ex eaque sed sunt harum quae itaque sit accusantium?",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi neque nulla doloribus impedit perferendis, quaerat distinctio error possimus. Perferendis consectetur ex eaque sed sunt harum quae itaque sit accusantium?",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Foods_%28cropped%29.jpg/330px-Foods_%28cropped%29.jpg"
    },
    {
      id:2,
      title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi neque nulla doloribus impedit perferendis, quaerat distinctio error possimus. Perferendis consectetur ex eaque sed sunt harum quae itaque sit accusantium?",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi neque nulla doloribus impedit perferendis, quaerat distinctio error possimus. Perferendis consectetur ex eaque sed sunt harum quae itaque sit accusantium?",
      img:"https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg?w=400&h=300&c=crop"
    },
    {
      id:3,
      title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi neque nulla doloribus impedit perferendis, quaerat distinctio error possimus. Perferendis consectetur ex eaque sed sunt harum quae itaque sit accusantium?",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi neque nulla doloribus impedit perferendis, quaerat distinctio error possimus. Perferendis consectetur ex eaque sed sunt harum quae itaque sit accusantium?",
      img:"https://www.eatingwell.com/thmb/YxkWBfh2AvNYrDKoHukRdmRvD5U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg"
    },
    {
      id:4,
      title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi neque nulla doloribus impedit perferendis, quaerat distinctio error possimus. Perferendis consectetur ex eaque sed sunt harum quae itaque sit accusantium?",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi neque nulla doloribus impedit perferendis, quaerat distinctio error possimus. Perferendis consectetur ex eaque sed sunt harum quae itaque sit accusantium?",
      img:"https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/tinned_tomato_risotto_50756_16x9.jpg"
    }
  ]
  return (
    <div>
      <div className='w-full h-auto flex flex-col justify-center gap-10 items-center pt-5 pb-5'>
        {posts.map(post=>(
          <div key={post.id} className='bg-white/70 md:w-[70%] w-[90%] p-2 drop-shadow-lg rounded-2xl object-cover max-w-xl'>
            <div >
              <img src={post.img} alt="" className='w-full max-h-72'/>
            </div>
            <div className='flex flex-col justify-items-center items-center'>
              <Link to={`/post/${post.id}`}>
              <h1 className='font-bold text-xl md:3xl line-clamp-2 pt-6 text-justify'>{post.title}</h1>
              <p className='line-clamp-3 pt-5 text-justify indent-10'>{post.desc}</p>
              </Link>
              <button className='mt-5 mb-5 border-2 w-40 h-10 drop-shadow-sm hover:bg-teal-200'>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home;
