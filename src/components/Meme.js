import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Meme(){
    const [memesData, setMemesData] = useState([]);

    const [meme , setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    });

    useEffect(() => {
        const fetchMemes = async () => {
            const response = await axios.get('https://api.imgflip.com/get_memes');
            console.log(response.data);
            setMemesData(response.data.data.memes);
        }
        fetchMemes();
    }, [])

    function getNewUrl(){
        const memesArray = memesData;
        let randomIndex = Math.floor(Math.random() * memesArray.length)
        let newUrl = memesArray[randomIndex].url

        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage:newUrl
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return(
        <main>
            <div className="form">
                <input 
                type="text" 
                placeholder="top-text" 
                className="form--input"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />

                <input 
                type="text" 
                placeholder="bottom-text" 
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />

                <button 
                className="form-button" 
                onClick={getNewUrl}
                >
                    Generate a new meme image 🖼 
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}