import React, {useState} from 'react';
import GetURLs from "./components/URLs/GetShortUrls";
import ShowShortUrl from "./components/URLs/ShowShortUrl";


function App() {
  const [result,setResult] = useState({result:'',urlCode:''});

  const getShortUrl = (shortUrl,urlCode) => {
      setResult({result:shortUrl,urlCode:urlCode})
  };

  return (
    <div>
      <GetURLs onGetShortUrl={getShortUrl}/>
      {result.result !== '' &&
        <ShowShortUrl result={result}/>
      }
    </div>
  );
}

export default App;
