import axios from 'axios';

export const Input = () => {



  const handlesubmit = (event: any) => {
    event.preventDefault()
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
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
      
      
     return event
  }
 
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <input type={'text'} placeholder='test' id="userInput"></input>
        <button type="submit">Submit</button>

      </form>
    </div>
  );
};
