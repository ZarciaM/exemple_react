    import profilepic from './assets/profile.jpg'
    function Card(){
        return(
            <div className="card">
                <img className='card-image' src={profilepic} alt="profile picture"></img>
                <h2 className='card-title'>Hello I'm zarcia maevason</h2>
                <p className='card-text'>I'm the best</p>
            </div>
        );

    }

    export default Card;