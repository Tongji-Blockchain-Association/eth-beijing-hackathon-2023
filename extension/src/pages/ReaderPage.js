import React from "react";

import "./ReaderPage.css";
import Answer from "../components/Answer";
import News from "../components/News";
import Top from "../components/Top";
import NewsScore from "../components/NewsScore";
import BottomInfo from "../components/BottomInfo";
import Connect from "../components/Connect";
import TableRow from "../components/TableRow";

function ReaderPage() {
  return (
    <div id="container">
      <Top />
      {/* <Top />
      <div className={styles.splitContainer}>
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

      <BottomInfo /> */}
    </div>
  );
}

export default ReaderPage;
