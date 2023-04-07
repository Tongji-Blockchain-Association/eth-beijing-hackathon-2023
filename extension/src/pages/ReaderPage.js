import React from "react";

import "./ReaderPage.css";
import Header from "../components/Header";
import StatusCard from "../components/StatusCard";
import MediaCard from "../components/MediaCard";
import ConnectButton from "../components/ConnectButton";
import ToggleButton from "../components/ToggleButton";
import BottomLink from "../components/BottomLink";

function ReaderPage() {
  const [isValidator, setIsValidator] = React.useState(false);

  return (
    <div id="container">
      <Header />
      <div className="container-control">
        <ConnectButton />
        <ToggleButton
          isValidator={isValidator}
          setIsValidator={setIsValidator}
        />
      </div>
      {isValidator ? (
        ""
      ) : (
        <div className="container-status factlens-row">
          <StatusCard />
          <MediaCard />
        </div>
      )}

      <BottomLink />
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
