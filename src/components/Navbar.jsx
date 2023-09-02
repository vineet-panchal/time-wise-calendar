import React from 'react';
// importing react

const Navbar = () => {
    // navbar function

    return (
    // returning navbar content

        <div class="navbar" >
            <div class="title">
                <h1>Time Wise</h1>
            </div>
            {/* navbar title */}
            
            <div>
                <ul class="nav-links">
                    <li>
                        <a href="" class="btn-1">Home</a>
                    </li>
                    <li>
                        <a href="" class="btn-2">Calender</a>
                    </li>
                </ul>
            </div>
            {/* navbar links */}
        </div>
    )
}

export default Navbar
// exporting navbar component