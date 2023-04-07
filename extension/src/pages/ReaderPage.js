import React from "react";

import "./ReaderPage.css";
import Answer from "../components/Answer";
import News from "../components/News";
import Top from "../components/Top";
import NewsScore from "../components/NewsScore";
import ConnectButton from "../components/ConnectButton";
import ToggleButton from "../components/ToggleButton";
import BottomLink from "../components/BottomLink";

function ReaderPage() {
  return (
    <div id="container">
      <div className="container-control">
        <ConnectButton />
        <ToggleButton />
      </div>
      <BottomLink />
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
