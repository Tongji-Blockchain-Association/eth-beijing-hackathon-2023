import './readermode.module.css';
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

function Reader() {
    return (
        <div className="App">
            
            <Top />
            <div className="split-container">
                <Connect />
                <div className="spacer" />
                <TableRow />
            </div>

            <div className="parent-container">
                <div className="wireframe-container">
                    <div className="wireframe">
                        <News />
                    </div>
                </div>
                <div className="wireframe-container">
                    <div className="wireframe">
                        <NewsScore />
                    </div>
                </div>
            </div>

            <div className="parent-container">
                <div className="wireframe-container">
                    <div className="wireframe">
                        <Answer />
                        <Answer />
                    </div>
                </div>
            </div>

            <BottomInfo />
        </div>
    );
}

export default Reader;