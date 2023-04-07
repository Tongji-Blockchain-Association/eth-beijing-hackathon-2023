import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { create } from "ipfs-http-client";
import Answer from './components/Answer';
import News from './components/News';
import Top from './components/Top';
import NewsScore from './components/NewsScore';
import Commit from './components/Commit';
import BottomInfo from './components/BottomInfo';
import Connect from './components/Connect';
import SubmitButtons from './components/SubmitButtons';
import TableRow from './components/TableRow';
import FakeButton from './components/FakeButton';
import FactButton from './components/FactButton';
import DeleteButton from './components/DeleteButton';
import Wrapper from './components/Wrapper';
import WrapperStyle from './components/Wrapper.module.css';
import Reader from './pages/readermode.js';
import Validator from './pages/validatormode';
import Votedpage from './pages/votedpage';

const client = create('https://ipfs.infura.io:5001/api/v0');

function App() {
  const [file, setFile] = useState(null);
  const [urlArr, setUrlArr] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const created = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${created.path}`;
      setUrlArr(prev => [...prev, url]);      
    } catch (error) {
      console.log(error.message);
    }
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      console.log("Buffer data: ", Buffer(reader.result));
    }

    e.preventDefault();  
  }
  return (
    <div className="App">
      <Reader/>
      {/* <Validator/> */}
      {/* <Votedpage/> */}
      {/* <Connect /> */}
      {/* <TableRow /> */}
      {/* <Commit /> */}
      {/* <BottomInfo /> */}
      {/* <NewsScore /> */}
      {/* <News /> */}
      {/* <Answer /> */}
      {/* <FactButton /> */}
      {/* <FakeButton /> */}
      {/* <DeleteButton /> */}
      {/* <SubmitButtons /> */}
      
      

      {/* <div classname="main">
        <form className="form" onSubmit={handleSubmit}>
          <input type="file" name="data" onChange={retrieveFile} />
          <button type="submit" className="btn">Upload file</button>
        </form>
      </div>

      <div className="display">
        {urlArr.length !== 0
          ? urlArr.map((el) => <img src={el} alt="nfts" />)
          : <h3>Upload data</h3>}
      </div> */}
      
    </div>
  );
}

export default App;