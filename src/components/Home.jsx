import React from 'react'
import './home.css'

const Home = () => {
    return (
    <div className='home'>
        <div className="home__banner">
            <h1>Jose <strong>Campos</strong></h1>
        </div>
        <div className="home__subBanner">
            <p>Frontend Developer | UI Designer</p>
        </div>
        <div className="home__content">
            <div className="home__content__title">
                <h2>My Projects</h2>
            </div>
            <div className="home__content__clusters">
                <div className='projectOne'>
                    <a href="/">
                        <h3>Project One</h3>
                    </a>
                </div>
                <div className='projectTwo'>
                    <a href="/">
                        <h3>Project Two</h3>
                    </a>
                </div>
                <div className='projectThree'>
                    <a href="/">
                        <h3>Project Three</h3>
                    </a>
                </div>
                <div className='projectFour'>
                    <a href="/">
                        <h3>Project Four</h3>
                    </a>
                </div>
                <div className='projectFive'>
                    <a href="/">
                        <h3>Project Five</h3>
                    </a>
                </div>
                <div className='projectSix'>
                    <a href="/">
                        <h3>Project Six</h3>
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home
