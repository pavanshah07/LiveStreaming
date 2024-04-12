import React, { useImperativeHandle } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { appid, secret } from "../helper";

const Room = () => {
  const { roomid } = useParams();
  //refrence room
  const mylivestream = async (element) => {
    //kit token
    const appID = appid;
    const serverSecret = secret;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomid,
      Date.now().toString(),
      "Pavan Shah"
    );
    // instance
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    //join
    zc.joinRoom({
      container: element,
      sharedLinks:[
        {
        name:"Copy Link",
        url:`https://pavanlivecall.netlify.app/room/${roomid}`
        }
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming
      },
      showScreenSharingButton:true
    })
  }

  return (
    <div>
      <div ref={mylivestream} />
    </div>
  );
};

export default Room;
