import React from "react";

import "./ExtensionPage.css";
import Header from "../components/Header";
import StatusCard from "../components/StatusCard";
import MediaCard from "../components/MediaCard";
import ConnectButton from "../components/ConnectButton";
import ToggleButton from "../components/ToggleButton";
import BottomLink from "../components/BottomLink";
import FloatingIcon from "./FloatingIcon";

function ExtensionPage({ isExt }) {
  const [isValidator, setIsValidator] = React.useState(false);
  const [expand, setExpand] = React.useState(false);
  const [status, setStatus] = React.useState("voting");

  const Icon = (
    <FloatingIcon status={status} setExpand={setExpand} isExt={isExt} />
  );

  const ReaderPart = (
    <div className="container-status factlens-row">
      <StatusCard status={status} isExt={isExt} />
      <MediaCard />
    </div>
  );

  const ValidatorPart = "";

  const DetailPage = (
    <div id="container">
      <Header setExpand={setExpand} />
      <div className="container-control">
        <ConnectButton />
        <ToggleButton
          isValidator={isValidator}
          setIsValidator={setIsValidator}
        />
      </div>
      {isValidator ? ValidatorPart : ReaderPart}
      <BottomLink />
    </div>
  );

  return expand ? DetailPage : Icon;
}

export default ExtensionPage;
