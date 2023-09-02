import React from 'react';
// importing react

const Home = () => {
// home function

    return (
    // returning home function

        <header id='Home' name="Home" class="showcase">
            <div id="main-title">
                <h1 id='title-1'>Stop Talking</h1>
                <h1 id='title-2'>Start Doing</h1>
            </div>
            {/* main title */}

            <div class="main-subheading-1">Be Productive Today,</div>
            <div class="main-subheading-2">For A Better Tomorrow.</div>
            {/* subheadings */}

            <div>
                <img id="logo" src={require('./../images/logo.png')} alt="logo" />
            </div>
            {/* logo */}
        </header>
    )
}

export default Home;
// exporting home component