// Ganti nama dari afterLoadedData menjadi runMyAds
const runMyAds = async () => {
    
    // --- FUNGSI 1: INJEKSI BANNER ---
    const injectBannerAds = async () => {
        const targets = [
            { selector: ".js-react-kodiak-banner-top", width: 468, height: 60, key: 'c6519a79b77606d968cf36c00f3894c6' },
            { selector: ".rss2html-embed-feed-description", width: 728, height: 90, key: 'c6519a79b77606d968cf36c00f3894c6' }
        ];

        for (const item of targets) {
            let attempt = 0;
            let elementFound = null;
            while (attempt < 3) {
                elementFound = document.querySelector(item.selector);
                if (elementFound) break;
                await new Promise(r => setTimeout(r, 1000));
                attempt++;
            }

            if (elementFound) {
                const adContainer = document.createElement("div");
                adContainer.style.textAlign = "center";
                adContainer.style.margin = "10px 0";
                
                const scriptOptions = document.createElement("script");
                scriptOptions.text = `atOptions = { 'key' : '${item.key}', 'format' : 'iframe', 'height' : ${item.height}, 'width' : ${item.width}, 'params' : {} };`;
                
                const scriptSource = document.createElement("script");
                scriptSource.src = `https://www.highperformanceformat.com/${item.key}/invoke.js`;

                adContainer.appendChild(scriptOptions);
                adContainer.appendChild(scriptSource);
                elementFound.appendChild(adContainer);
            }
        }
    };

    // --- FUNGSI 2: POP-UP ---
    const createPopUpAds = () => {
        if (document.getElementById('ad-overlay')) return; // Mencegah duplikat

        const style = document.createElement('style');
        style.innerHTML = `
            #ad-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 9998; }
            #fixedban { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999; background: #fff; padding: 10px; border-radius: 10px; }
            .close-ad { position: absolute; top: -10px; right: -10px; width: 30px; height: 30px; background: #000; color: #fff; border-radius: 50%; text-align: center; line-height: 30px; cursor: pointer; border: 2px solid #fff; }
        `;
        document.head.appendChild(style);

        const overlay = document.createElement('div');
        overlay.id = 'ad-overlay';
        const fixedban = document.createElement('div');
        fixedban.id = 'fixedban';
        const closeBtn = document.createElement('div');
        closeBtn.className = 'close-ad';
        closeBtn.innerHTML = '×';
        
        closeBtn.onclick = () => { overlay.remove(); fixedban.remove(); };
        overlay.onclick = () => { overlay.remove(); fixedban.remove(); };

        const scriptOptions = document.createElement("script");
        scriptOptions.text = `atOptions = { 'key' : 'c6519a79b77606d968cf36c00f3894c6', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };`;
        
        const scriptSource = document.createElement("script");
        scriptSource.src = "https://www.highperformanceformat.com/c6519a79b77606d968cf36c00f3894c6/invoke.js";

        fixedban.appendChild(closeBtn);
        fixedban.appendChild(scriptOptions);
        fixedban.appendChild(scriptSource);
        document.body.appendChild(overlay);
        document.body.appendChild(fixedban);
    };

    await injectBannerAds();
    createPopUpAds();
};

// Panggil fungsi baru ini secara manual atau masukkan ke dalam afterLoadedData yang asli
runMyAds();
