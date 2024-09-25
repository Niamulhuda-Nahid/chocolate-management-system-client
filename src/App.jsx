import { Link, useLoaderData } from 'react-router-dom'
import ChocolateCard from './components/ChocolateCard';
import { useState } from 'react';

function App() {

  const loadedChocolate = useLoaderData();

  const [chocolates, setChocolates] = useState(loadedChocolate)

  return (
    <div className='bg-slate-200 p-10'>
      <div className='bg-[#FFFFFF] p-3 rounded-lg'>
        <h1 className='text-lg font-semibold md:text-3xl md:font-bold text-center mb-12 mt-8 w-2/4 mx-auto py-4 rounded-md text-gray-300 bg-gradient-to-r from-[#7B3F00] via-orange-950 to-[#7B3F00]'>Chocolate Management System</h1>
        <div className='w-[90%] mx-auto mb-8'>
          <Link to="/chocolates" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#8a4c0a] group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#8a4c0a] group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#8a4c0a] group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#8a4c0a] group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#8a4c0a] opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease "> + New Chocolate</span>
          </Link>
        </div>
        <div className=' w-[90%] mx-auto mb-9'>
          <div >
            <div className=''>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead className='bg-[#e2c7a9]'>
                    <tr className='font-semibold text-base text-black '>
                      <th >Image</th>
                      <th>Name</th>
                      <th>Country/Factory</th>
                      <th>Category</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {
                    chocolates.map(chocolate=> <ChocolateCard
                      key={chocolate._id}
                      chocolate={chocolate}
                      chocolates={chocolates}
                      setChocolates={setChocolates}
                    ></ChocolateCard>)
                  }
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
