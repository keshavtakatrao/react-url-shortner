import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import Navbar from './navbar';


function Home(props) {
    let [url, setUrl] = useState('');
  let [shortUrl, setShortUrl] = useState('');
  let history = useHistory();
  if(!window.localStorage.getItem('curr_user')){
    history.push('/')
  }
  
  let handelSubmit = async () => {
    try {
      let data = {
        longUrl: url
      }
      await axios.post('https://urlshortzen.herokuapp.com/url', data)
        .then(response => setShortUrl('https://urlshortzen.herokuapp.com/' + response.data.shortUrl))
      await console.log(shortUrl);
    }
    catch (error) {
      console.log(error)
    }
  }
    return (
        <>
          <Navbar></Navbar>
            <form onSubmit={(e) => {
                e.preventDefault()
                handelSubmit()
            }}>
                <div class='container'>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="URL" onChange={(e) => setUrl(e.target.value)} />
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="submit">Shrink</button>
                        </div>
                    </div>
                </div>
            </form>
            {
                shortUrl.length > 0 ? <center><h1>Short URL :</h1><a href={shortUrl} target='_blank'><h2>{shortUrl}</h2></a></center> : null
            }
        </>)
}

export default Home;