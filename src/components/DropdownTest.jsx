import React from 'react';

const DropdownTest = () => {

    const handleItem1 = () =>{
        const dropdown = document.getElementById('dropdown')
        const item1 = document.querySelector('.item1').innerText;
        const addBtn = document.querySelector(".add-btn");
        dropdown.innerText = item1;
        // console.log(newDvalue) 
        
        addBtn.disabled = false
    }
    const handleItem2 = () =>{
        const dropdown = document.getElementById('dropdown')
        const item2 = document.querySelector('.item2').innerText;
        dropdown.innerText = item2;
        // console.log(newDvalue) 
        const addBtn = document.querySelector(".add-btn");
        addBtn.disabled = false
    }
    
    return (
        <div className='flex flex-col items-center gap-7 mt-20 justify-center'>
            <details className="dropdown">
                <summary id='dropdown' className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a className='item1' onClick={handleItem1}>Item 1</a></li>
                    <li><a className='item2' onClick={handleItem2}>Item 2</a></li>
                    
                </ul>
            </details>
            <button disabled={true} className='btn add-btn'>add</button>
        </div>
    );
};

export default DropdownTest;