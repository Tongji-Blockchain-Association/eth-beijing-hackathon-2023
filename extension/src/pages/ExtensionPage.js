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
import SubmitButtons from "../components/SubmitButtons";

function ExtensionPage({ isExt }) {
  const [isValidator, setIsValidator] = React.useState(false);
  const [expand, setExpand] = React.useState(false);
//   const [status, setStatus] = React.useState("fact");
const [status, setStatus] = React.useState("fake");
    // const [status, setStatus] = React.useState("voting");

  const [voted, setVoted] = React.useState(false);
  const [selectFake, setSelectFake] = React.useState(false);
  const [selectFact, setSelectFact] = React.useState(false);

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

  let active = !voted;
  const ValidatorPart = (
    <>
      <div className="container-status factlens-row">
        <FactButton
          selectFake={selectFake}
          selectFact={selectFact}
          setSelectFake={setSelectFake}
          setSelectFact={setSelectFact}
          active={active}
        />
        <FakeButton
          selectFake={selectFake}
          selectFact={selectFact}
          setSelectFake={setSelectFake}
          setSelectFact={setSelectFact}
          active={active}
        />
      </div>
      <SubmitButtons
        setIsValidator={setIsValidator}
        setSelectFake={setSelectFake}
        setSelectFact={setSelectFact}
      />
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
          disabled={status != "voting"}
        />
      </div>
      {isValidator && status == "voting" ? ValidatorPart : ReaderPart}
      <BottomLink />
    </div>
  );

  return expand ? DetailPage : Icon;
}

export default ExtensionPage;
