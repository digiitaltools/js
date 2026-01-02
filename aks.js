window.afterLoadedData = function() {
    if (document.getElementById('ads-overlay-wrapper')) return;

    // 1. BUAT OVERLAY
    const overlay = document.createElement('div');
    overlay.id = 'ads-overlay-wrapper';
    Object.assign(overlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.8)", 
        zIndex: "999999", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    });

    // 2. BUAT CONTAINER POPUP
    const adContainer = document.createElement('div');
    Object.assign(adContainer.style, {
        position: "relative",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        textAlign: "center",
        minWidth: "320px",
        minHeight: "270px"
    });

    // 3. TOMBOL TUTUP
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = "×"; 
    Object.assign(closeBtn.style, {
        position: "absolute",
        top: "-15px",
        right: "-15px",
        width: "30px",
        height: "30px",
        background: "#ff0000",
        color: "white",
        border: "2px solid white",
        borderRadius: "50%",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "1"
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

    // 5. LOAD SCRIPT ADSTERRA
    const scriptInvoke = document.createElement('script');
    scriptInvoke.type = 'text/javascript';
    scriptInvoke.src = "https://www.highperformanceformat.com/c6519a79b77606d968cf36c00f3894c6/invoke.js";

    // 6. ELEMEN
    adContainer.appendChild(closeBtn);
    adContainer.appendChild(scriptInvoke);
    overlay.appendChild(adContainer);
    
    if (document.body) {
        document.body.appendChild(overlay);
    } else {
        window.addEventListener('DOMContentLoaded', () => document.body.appendChild(overlay));
    }
}
