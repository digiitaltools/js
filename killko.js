function afterLoadedData() {
    console.log("Injeksi iklan dimulai melalui HTTPS...");

    // 1. CONTAINER
    const adContainer = document.createElement('div');
    adContainer.style.textAlign = "center";
    adContainer.style.margin = "20px auto";
    adContainer.style.minHeight = "250px";

    // 2. KONFIGURASI ADSTERRA
    window.atOptions = {
        'key' : 'c6519a79b77606d968cf36c00f3894c6',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
    };

    // 3. LOAD SCRIP
    const scriptInvoke = document.createElement('script');
    scriptInvoke.type = 'text/javascript';
    scriptInvoke.src = "https://www.highperformanceformat.com/c6519a79b77606d968cf36c00f3894c6/invoke.js";

    adContainer.appendChild(scriptInvoke);

    const mainWrapper = document.querySelector('.js-page-wrapper') || document.body;
    mainWrapper.append(adContainer);

    console.log("Iklan berhasil di-append.");
}
