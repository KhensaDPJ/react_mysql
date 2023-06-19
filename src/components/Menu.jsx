import React from 'react'

const Menu = () => {
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
    <div className='w-[25%] pt-10 pb-10'>
        <h1 className='text-xl font-bold pb-5 text-center'>Other posts you you may like</h1>
        <div className='flex flex-col gap-5'>
            {posts.map(post=>(
                <div className='flex flex-col justify-center items-center bg-white/50 rounded-lg gap-5 drop-shadow-lg '>
                    <img src={post.img} alt="" />
                    <h1 className='font-bold text-lg line-clamp-2 pl-2 pr-2'>{post.title}</h1>
                    <button className='mb-5 border-2 w-32 h-8 drop-shadow-sm hover:bg-teal-200'>Read More</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Menu