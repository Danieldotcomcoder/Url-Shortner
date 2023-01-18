import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../components/input.css';

export const Input = () => {
  const [result, setResult] = useState('');
  const [message, setMessage] = useState('');

 const copytoclipboard = (event: any) => {
  navigator.clipboard.writeText(event.target.innerHTML);
  setMessage('Copied :)')
  setTimeout(()=> setMessage(''),1000);
 }
  

  const handlesubmit = (event: any) => {
    event.preventDefault();
    const encodedParams = new URLSearchParams();
    encodedParams.append('url', event.currentTarget.elements.userInput.value);

    const options = {
      method: 'POST',
      url: 'https://url-shortener-service.p.rapidapi.com/shorten',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '03518c50f0mshb2f93a5c3fbb56fp1a5e6ajsn175d3c928506',
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com',
      },
      data: encodedParams,
    };

    axios
      .request(options)
      .then(function (response) {
        setResult(response.data.result_url);
      })
      .catch(function (error) {
        console.error(error);
      });

    event.currentTarget.elements.userInput.value = '';
    return event;
  };

  return (
    <div className='main'>
      <h1>URL Shortener</h1>
      <form className='form' onSubmit={handlesubmit}>
        <input className='input' type={'text'} placeholder="Paste your URL here" id="userInput"></input>
        <Button className='button' variant="primary" type='submit'>Shorten Url</Button>
      </form>
      <div className="result">
        <p className='message'>
        {message}
        </p>
        <p onClick={copytoclipboard}>
        {result}
        </p>
        </div>
    </div>
  );
};
