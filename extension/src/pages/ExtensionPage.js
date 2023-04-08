import React from "react";

import "./ExtensionPage.css";
import Header from "../components/Header";
import StatusCard from "../components/StatusCard";
import MediaCard from "../components/MediaCard";
import ConnectButton from "../components/ConnectButton";
import ToggleButton from "../components/ToggleButton";
import BottomLink from "../components/BottomLink";
import FloatingIcon from "./FloatingIcon";
import CommentBox from "../components/CommentBox";

import FactButton from "../components/FactButton";
import FakeButton from "../components/FakeButton";

function ExtensionPage({ isExt }) {
  const [isValidator, setIsValidator] = React.useState(true);
  const [expand, setExpand] = React.useState(true);
  const [status, setStatus] = React.useState("fact");

  const Icon = (
    <FloatingIcon status={status} setExpand={setExpand} isExt={isExt} />
  );

  const ReaderPart = (
    <>
      <div className="container-status factlens-row">
        <StatusCard status={status} isExt={isExt} />
        <MediaCard />
      </div>
      {status == "voting" ? "" : <CommentBox isExt={isExt} />}
    </>
  );

  const ValidatorPart = (
    <>
      <div className="container-status factlens-row">
        <FactButton />
        <FakeButton />
      </div>
    </>
  );

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
