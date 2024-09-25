import React from 'react';
import { FiEdit2 } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ChocolateCard = ({ chocolate, setChocolates, chocolates }) => {
    const { _id, name, photo, category, country } = chocolate;
 
    const handleDelete = _id => {
        
        Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to delete this record?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8a5f2d",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/chocolates/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                confirmButtonText: 'Ok',
                                confirmButtonColor: "#8a5f2d"
                            });
                            const remaining = chocolates.filter(choco => choco._id !== _id);
                            setChocolates(remaining);
                        }
                    })
            }
        });


    }

    return (
        <tbody>
            <tr>
                <td>
                    <div className="avatar">
                        <div className="mask rounded h-14 w-14">
                            <img
                                src={photo}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </td>
                <td>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </td>
                <td>{country}</td>
                <td>{category}</td>
                <td>
                    <div className='space-x-4 flex'>
                        <Link to={`/chocolates/${_id}`}>
                            <button className="p-2 text-xl text-[#8a5f2d] rounded-md bg-gradient-to-r from-[#e9d9c7] to-[#f3ece5]"><FiEdit2 /></button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="p-2 text-xl text-[#8a5f2d] rounded-md bg-gradient-to-r from-[#e9d9c7] to-[#f3ece5]"><IoMdClose /></button>
                    </div>

                </td>
            </tr>
        </tbody>
    );
};

export default ChocolateCard;