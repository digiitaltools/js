(function() {
    try {
        var existingMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
        if (!existingMeta) {
            var meta = document.createElement('meta');
            meta.httpEquiv = "Content-Security-Policy";
            meta.content = "upgrade-insecure-requests";
            document.head.prepend(meta);
            console.log("CSP Upgrade-Insecure-Requests injected.");
        }
    } catch (e) {
        console.error("Gagal injeksi CSP:", e);
    }

    const secureSrc = "https://www.highperformanceformat.com/c6519a79b77606d968cf36c00f3894c6/invoke.js";

    const style = document.createElement('style');
    style.innerHTML = `
        #popup-overlay-ads {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.85); display: flex; align-items: center;
            justify-content: center; z-index: 999999;
        }
        .popup-box-ads {
            width: 300px; height: 250px; background: #fff; 
            position: relative; box-shadow: 0 0 20px rgba(0,0,0,0.5);
        }
        .close-ad-x {
            position: absolute; top: -30px; right: 0; color: #fff;
            background: #ff0000; padding: 2px 8px; cursor: pointer;
            font-size: 12px; font-family: sans-serif; border-radius: 3px;
        }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.id = 'popup-overlay-ads';
    
    const popupBox = document.createElement('div');
    popupBox.className = 'popup-box-ads';
    
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close-ad-x';
    closeBtn.innerHTML = 'CLOSE [X]';
    closeBtn.onclick = () => overlay.remove();

    const adContainer = document.createElement('div');
    adContainer.id = 'ad-space-300-250';

    popupBox.appendChild(closeBtn);
    popupBox.appendChild(adContainer);
    overlay.appendChild(popupBox);
    document.body.appendChild(overlay);

    window.atOptions = {
        'key' : 'c6519a79b77606d968cf36c00f3894c6',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
    };

    const adScript = document.createElement('script');
	adScript.setAttribute('type', 'text/javascript');
	adScript.setAttribute('src', secureSrc);
    
    adContainer.appendChild(adScript);
})();
