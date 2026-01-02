function afterLoadedData() {
    console.log("Konten terdeteksi, memulai injeksi iklan...");

    // --- BANNER ADS (300x250) ---
    const adContainer = document.createElement('div');
    adContainer.id = "ads-wrapper-bottom";
    adContainer.style.textAlign = "center";
    adContainer.style.margin = "20px 0";
    adContainer.style.clear = "both";

    window.atOptions = {
        'key' : 'c6519a79b77606d968cf36c00f3894c6',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
    };

    // Membuat elemen
    const scriptInvoke = document.createElement('script');
    scriptInvoke.type = 'text/javascript';
    scriptInvoke.src = "https://www.highperformanceformat.com/c6519a79b77606d968cf36c00f3894c6/invoke.js";

    adContainer.appendChild(scriptInvoke);

    document.body.append(adContainer);


    // --- POPUP / POPUNDER ADS ---
    const popScript = document.createElement('script');
    popScript.type = 'text/javascript';
    popScript.src = '//pl25619525.highperformanceformat.com/de/33/88/de3388661608d00000000000000.js'; 
    document.body.append(popScript);
}
