import './validormode.module.css';
import Answer from '../components/Answer';
import News from '../components/News';
import Top from '../components/Top';
import NewsScore from '../components/NewsScore';
import Commit from '../components/Commit';
import BottomInfo from '../components/BottomInfo';
import Connect from '../components/Connect';
import SubmitButtons from '../components/SubmitButtons';
import TableRow from '../components/TableRow';
import FakeButton from '../components/FakeButton';
import FactButton from '../components/FactButton';
import DeleteButton from '../components/DeleteButton';
import Wrapper from '../components/Wrapper';
import WrapperStyle from '../components/Wrapper.module.css';

function Validator() {
  return (
    <div className="App">
        <Top />
        <div className="split-container">
            <Connect />
                <div className="spacer" />
            <TableRow />
        </div>
        <div className="split-container">
            <FakeButton />
                <div className="spacer2" />
            <FactButton />
        </div>

        <div className="split-container">
            <Commit />
                <div className="spacer2" />
            <DeleteButton />
                <div className="spacer2" />
        </div>

        
        <div className="parent-container">
                <div className="wireframe-container">
                        <SubmitButtons />
                </div>
        </div>

      <BottomInfo />
    </div>
  );
}

export default Validator;