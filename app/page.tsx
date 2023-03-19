import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
        <div className='flex flex-col justify-center items-center'>
            <DocumentMagnifyingGlassIcon className='h-64 w-64 text-indigo-600/20'/>
            <h1 className='text-3xl text-center mt-2 text-black/50 font-bold mb-5'>Welcome to Amazon Web Scraper</h1>
            <h2 className='text-lg text-center italic text-black/50'>A platform that gives you access to some scrapped AMAZON DATA</h2>
            <h3 className='text-lg text-center italic text-black/50'>https://www.amazon.com/</h3>
        </div>
  )
}

export default HomePage