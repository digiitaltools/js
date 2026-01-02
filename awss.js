function afterLoadedData() {
    // 1. BUAT OVERLAY
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: "9998",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    });

    // 2. BUAT CONTAINER POPUP
    const adContainer = document.createElement('div');
    Object.assign(adContainer.style, {
        position: "relative",
        backgroundColor: "white",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        textAlign: "center"
    });

    // 3. TOMBOL TUTUP
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = "Tutup";
    Object.assign(closeBtn.style, {
        position: "absolute",
        top: "-10px",
        right: "-10px",
        padding: "5px 10px",
        background: "#ff0000",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold"
    });
    closeBtn.onclick = () => overlay.remove();

    // 4. KONFIGURASI ADSTERRA
    window.atOptions = {
        'key' : 'c6519a79b77606d968cf36c00f3894c6',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
    };

    // 5. LOAD SCRIPT ADSTERRA (WAJIB HTTPS)
    const scriptInvoke = document.createElement('script');
    scriptInvoke.type = 'text/javascript';
    scriptInvoke.src = "https://www.highperformanceformat.com/c6519a79b77606d968cf36c00f3894c6/invoke.js";

    adContainer.appendChild(closeBtn);
    adContainer.appendChild(scriptInvoke);
    overlay.appendChild(adContainer);
    document.body.appendChild(overlay);
}
