import React from "react";
import "./memesData"
import memesData from "./memesData";

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemes, setAllMemes] = React.useState(memesData)
   
    function getNewImage() {
        const memeArray = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(prevState => ({
            ...prevState,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
            
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    id="topText"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    id="bottomText"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="form--button" onClick={getNewImage}> Get a new meme image </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top"> {meme.topText} </h2>
                <h2 className="meme--text bottom"> {meme.bottomText} </h2>
            </div>
        </main>
    )
}
