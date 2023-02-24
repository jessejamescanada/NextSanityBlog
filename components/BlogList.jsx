import Image from 'next/image'
import urlFor from '../lib/urlFor'
import ClientSideRoute from './ClientSideRoute'
const BlogList = ({ posts }) => {
  return (
    <div>
      <hr className='border-[#f7ab0a mb-10' />
      <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24'>
        {/* {posts} */}
        {posts.map((item) => (
          <ClientSideRoute
            key={item._id}
            route={`/post/${item.slug.current}`}
          >
            <div className='group flex flex-col cursor-pointer'>
              <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
                <Image
                  className='object-cover object-left lg:object-center'
                  src={urlFor(item.mainImage).url()}
                  alt={item.author.name}
                  fill
                />
                <div className='absolute bottom-0 w-full bg-opacity-20 bg-black  rounded drop-shadow-lg text-white p-5 flex justify-between'>
                  <div>
                    <p className='font-bold'>{item.title}</p>
                    <p>
                      {new Date(item._createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
                    {item.categories.map((category) => (
                      <div
                        key={category.title}
                        className='bg-[#f7ab0a] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='mt-5 flex-1'>
                <p className='underline text-lg font-bold'>{item.title}</p>

                <p className='text-gray-500'>
                  {item.description?.length > 40
                    ? item.description.substring(0, 200)
                    : item.description}
                </p>
              </div>

              <p className='mt-5 font-bold flex items-center hover:underline'>
                Read Post...
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  )
}

export default BlogList
