import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddChocolate = () => {

    const handleStandard = () =>{
        document.getElementById('select-btn').innerText = document.querySelector('.standard').innerText;

        document.querySelector('#save-btn').disabled = false;
    }
    const handlePremium = () =>{
        document.getElementById('select-btn').innerText = document.querySelector('.premium').innerText;

        document.querySelector('#save-btn').disabled = false;
    }

    const handleAddChocolate = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const photo = form.photo.value;
        const category = document.getElementById('select-btn').innerText;
        console.log(category)
        const newChocolate = { name, country, category, photo };

        fetch('http://localhost:5000/chocolates', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newChocolate)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Data Inserted Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: "#8a5f2d"
                    })
                    form.reset();
                }
            })

    }

    return (
        <div className='bg-slate-200 p-10'>
            <div className='bg-[#FFFFFF] p-3 rounded-lg'>
                <h1 className='text-lg font-semibold md:text-3xl md:font-bold text-center mb-12 mt-8 w-2/4 mx-auto py-4 rounded-md text-gray-300 bg-gradient-to-r from-[#7B3F00] via-orange-950 to-[#7B3F00]'>Chocolate Management System</h1>
                <div className='w-[90%] mx-auto mb-8'>
                    <Link to="/" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#8a4c0a] group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#8a4c0a] group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#8a4c0a] group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#8a4c0a] group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#8a4c0a] opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease ">All Chocolates</span>
                    </Link>
                </div>
                <div className='w-[90%] mx-auto mb-6'>
                    <hr className='h-[2px] bg-gray-300' />
                </div>
                <div className='bg-slate-200 w-[90%] mx-auto mb-9 rounded-lg'>
                    <div >
                        <div className='text-center py-9'>
                            <h3 className='text-2xl font font-semibold'>New Chocolates</h3>
                            <p className='text-gray-500 mt-2'>Use the below form to create a new product</p>
                        </div>
                        <form onSubmit={handleAddChocolate} className='w-[80%] mx-auto pb-9'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-semibold">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Hot Pink Chocolate" className="input rounded" required />
                            </div>
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="font-semibold">Country</span>
                                </label>
                                <input type="text" name='country' placeholder="Enter Country Name" className="input rounded" required />
                            </div>
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="font-semibold mb-1">Category</span>
                                </label>
                                <div className="dropdown dropdown-top dropdown-end">
                                    <div id='select-btn' tabIndex={0} role="button" className="btn m-1 w-full rounded">Select a category</div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-[1] w-full p-2 shadow">
                                        <li><a className='standard font-semibold text-lg' onClick={handleStandard}>Standard</a></li>
                                        <li><a onClick={handlePremium} className='premium font-semibold text-lg'>Premium</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="font-semibold mb-1">Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="Enter Photo URL" className="input rounded" required />
                            </div>
                            <button id='save-btn' className='bg-[#8a4c0a] w-full mt-7 py-2 text-white text-lg font-semibold tracking-wide rounded' disabled={true}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddChocolate;