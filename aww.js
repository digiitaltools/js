function afterLoadedData() {
    // 1. Container Popup
    const adContainer = document.createElement('div');
    adContainer.id = "popup-ad-container";
    
    // Styling Popup
    Object.assign(adContainer.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "10000",
        backgroundColor: "#fff",
        padding: "15px",
        boxShadow: "0px 0px 30px rgba(0,0,0,0.7)",
        borderRadius: "10px",
        display: "none",
        textAlign: "center"
    });

    // 2. Tombol Close
    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = "Tutup [X]";
    Object.assign(closeBtn.style, {
        fontSize: "12px",
        marginBottom: "5px",
        cursor: "pointer",
        color: "#666",
        textAlign: "right"
    });
    closeBtn.onclick = () => adContainer.remove();
    adContainer.appendChild(closeBtn);

    // 3. Setup Script Adsterra
    window.atOptions = {
        'key' : 'c6519a79b77606d968cf36c00f3894c6',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
    };

    const scriptInvoke = document.createElement('script');
    scriptInvoke.type = 'text/javascript';
    scriptInvoke.src = "https://www.highperformanceformat.com/c6519a79b77606d968cf36c00f3894c6/invoke.js";

    // 4. Eksekusi
    adContainer.appendChild(scriptInvoke);
    document.body.appendChild(adContainer);

    setTimeout(() => {
        adContainer.style.display = "block";
    }, 1000); 
}
