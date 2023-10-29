import React from 'react'
import { useEffect } from 'react'

export default function CallPage({account}) {

    useEffect(() => {

        const util = async() => {

            function getUrlParams(url) {
                let urlStr = url.split('?')[1];
                const urlSearchParams = new URLSearchParams(urlStr);
                const result = Object.fromEntries(urlSearchParams.entries());
                return result;
            }

            const name = account.split(' ').join();


                const roomID = getUrlParams(window.location.href)['roomID'] || (Math.floor(Math.random() * 10000) + "");
                const userID = Math.floor(Math.random() * 10000) + "";
                const userName = name;
                const appID = 109889187;
                const serverSecret = "8d4e9cff6a36e996c9515c2c00f2c2cd";
                const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);
            
                const zp = ZegoUIKitPrebuilt.create(kitToken);
                    zp.joinRoom({
                        container: document.querySelector("#root"),
                        sharedLinks: [{
                            name: 'Personal link',
                            url: window.location.protocol + '//' + window.location.host  + window.location.pathname + '?roomID=' + roomID,
                        }],
                        scenario: {
                            mode: ZegoUIKitPrebuilt.VideoConference,
                        },
                            
                        turnOnMicrophoneWhenJoining: true,
                        turnOnCameraWhenJoining: true,
                        showMyCameraToggleButton: true,
                        showMyMicrophoneToggleButton: true,
                        showAudioVideoSettingsButton: true,
                        showScreenSharingButton: true,
                        showTextChat: true,
                        showUserList: true,
                        maxUsers: 2,
                        layout: "Auto",
                        showLayoutButton: false,
                        });

                    }
        util();
    }, []);

  return (
    <h1>hemlo</h1>
  )
}
