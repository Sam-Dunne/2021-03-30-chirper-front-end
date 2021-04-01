import React, { useState } from 'react';


const App = () => {

    const [userName, setUserName] = useState('Your Username');
    const handleSetUserName = e => setUserName(e.target.value);

    const [newChirp, setNewChirp] = useState('Tell the Interwebs');
    const handleSetNewChirp = e => setNewChirp(e.target.value);

    const [chirpArrayUpdate, setChirpArrayUpdate] = useState([
        {
            user: 'MachoTA_69',
            chirp: 'Coors Banquet is the best beer EVER. PERIOD.'
        },
        {
            user: 'Janet da Cat Lady',
            chirp: 'Where are you Mr.Whiskers????'
        },
        {
            user: 'VoteandBleedRedDan',
            chirp: 'Ohhh...These gas prices!?!. Damn you Joe...Damn you!!!'
        }
    ])


    const [submitPost, setSubmitPost] = useState(false);

    const handleSubmit = e => {
        //conditions for UI: Inputs not default nor empty, independently. 
        if(userName !== 'Your Username' && userName !== undefined && newChirp !== 'Tell the Interwebs' && newChirp !== undefined){
            let chirpObject = {
                user: userName,
                chirp: newChirp
            }
            e.preventDefault();
            setSubmitPost(true);
            setChirpArrayUpdate([chirpObject, ...chirpArrayUpdate])
            setUserName(userName);
            setNewChirp('Tell the Interwebs');
            

        } else {
        // failed UI conditions, half-assed.  proof of concept with Chirp Field
            e.preventDefault();
            setNewChirp('***Required Field***')
            alert('*User Input Required Field(s): ')
            
        }
    };





    if (submitPost === false) {
        return (
            <>
                <div className="container-fluid flex p-3"
                    id="app-wrapper">
                        <h1 className='text-center'>Chirper</h1>
                        <h3 className="text-center">Because the Interwebs NEED your opinion</h3>
                    <div className="row p-5">
                        <form
                            id="chirp-form"
                            className="col-md-3 bg-info m-5 width-25 p-5">
                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    aria-describedby="emailHelp" 
                                    value={userName}
                                    onChange={handleSetUserName}                                   
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={newChirp} onChange={handleSetNewChirp}
                                />
                            </div>
                            <div className="mb-3 form-check">
                            </div>
                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="btn btn-primary">
                                Chirpr It
                            </button>
                        </form>
                        <div className="posts-section width-50">
                            {/* Add old chirps here */}

                            {chirpArrayUpdate.map(singleChirp => (
                                <div className="rounded shadow-lg mx-5 mt-5 mb-2" id="posts-card">
                                    <h4 className="col-md-8 rounded py-1 my- px-2">
                                        {singleChirp.user}
                                    </h4>
                                    <p className="col-md-8 bg-light rounded width-50 h-50 mx-4 mb-4 px-3" id="post-input" type="text" >
                                        {singleChirp.chirp}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            <div className="container-fluid flex p-3"
                id="app-wrapper">
                    <h1 className='text-center'>Chirper</h1>
                        <h3 className="text-center">Because the Interwebs NEED your opinion</h3>
                <div className="row p-5">
                    <form
                        id="chirp-form"
                        className="col-md-3 bg-info m-5 width-25 p-5">
                        <div className="mb-3">
                            <input className="form-control"
                                aria-describedby="emailHelp"
                                value={userName}
                                onChange={handleSetUserName} />
                        </div>
                        <div className="mb-3">
                            <input type="text"
                                className="form-control" id="exampleInputPassword1"
                                value={newChirp}
                                onChange={handleSetNewChirp} />
                        </div>
                        <div className="mb-3 form-check">
                        </div>
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="btn btn-primary">Chirpr It</button>
                    </form>

                    <div className="posts-section width-50">
                        {chirpArrayUpdate.map(singleChirp => (
                            <div className="rounded shadow-lg m-5" id="posts-card">
                                <h2 className="col-md-8 rounded py-1 my-3 px-4">
                                    {singleChirp.user}
                                </h2>
                                <p className="col-md-8 bg-light rounded width-75 h-50 mb-4 mx-4 px-3" id="post-input" type="text" >
                                    {singleChirp.chirp}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;

// <div className="col-xl-6 flex rounded shadow-lg m-5 py-3" id="posts-card">
//     <h2 className="col-md-8 rounded py-1 my-3 px-2">
//         {chirpsArray[i].userName}
//     </h2>
//     <p className="col-md-8 bg-light rounded width-50 h-50 mb-4 px-3" id="post-input" type="text" >
//         {chirpsArray[i].chirp}
//     </p>
// </div>