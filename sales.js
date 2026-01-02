function afterLoadedData() {
    console.log("Injeksi iklan popup dimulai...");

    // 1. CONTAINER POPUP
    const adContainer = document.createElement('div');
    adContainer.id = "popup-ad-container";
    
    // Styling melayang
    Object.assign(adContainer.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "9999",
        backgroundColor: "white",
        padding: "10px",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        borderRadius: "8px",
        display: "none"
    });

    // 2. TOMBOL CLOSE
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = "&times;";
    Object.assign(closeBtn.style, {
        position: "absolute",
        top: "-10px",
        right: "-10px",
        background: "red",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "25px",
        height: "25px",
        cursor: "pointer",
        fontWeight: "bold"
    });
    closeBtn.onclick = () => adContainer.remove();
    adContainer.appendChild(closeBtn);

    // 3. KONFIGURASI ADSTERRA
    window.atOptions = {
        'key' : 'c6519a79b77606d968cf36c00f3894c6',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
    };

    // 4. LOAD SCRIPT UTAMA
    const scriptInvoke = document.createElement('script');
    scriptInvoke.type = 'text/javascript';
    scriptInvoke.src = "https://www.highperformanceformat.com/c6519a79b77606d968cf36c00f3894c6/invoke.js";

    scriptInvoke.onload = () => {
        adContainer.style.display = "block";
    };

    adContainer.appendChild(scriptInvoke);
    document.body.appendChild(adContainer);

    console.log("Iklan popup berhasil dipasang.");
}
