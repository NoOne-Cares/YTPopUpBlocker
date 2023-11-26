(() => {

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, videoId } = obj;

        if (type === "NEW") {
            (function () {
                window.debug = true;
                if (debug) console.log("started");
                setInterval(() => {
                    if (!!popupFind()) {
                        if (debug) console.log("remove popup");
                        const popup = popupFind()
                        console.log(popup)
                        popup.parentNode.removeChild(popup)

                        if (debug) console.log("resume video");
                        pauseFind().click()
                        pauseFind().click()
                        if (debug) console.log("done ");
                    }
                }, 1000);
            })();
        
            function popupFind() {
            return document.querySelector("body > ytd-app > ytd-popup-container");
            }
        function pauseFind(){
        
        return document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button");

        }
    }
    });
})();
