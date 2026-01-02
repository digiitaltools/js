(function() {
    // 1. CSS Styling
    const style = document.createElement('style');
    style.innerHTML = `
        #popup-overlay-ads {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.8); display: flex; align-items: center;
            justify-content: center; z-index: 999999;
        }
        .popup-box-ads {
            width: 320px; /* Sedikit lebih lebar dari iklan untuk padding */
            height: 300px; /* Sedikit lebih tinggi untuk tombol tutup */
            background: #fff; border-radius: 8px; position: relative;
            display: flex; flex-direction: column; align-items: center;
            justify-content: center; box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        }
        .close-ad-btn {
            position: absolute; top: -35px; right: 0;
            color: white; cursor: pointer; font-family: sans-serif;
            font-size: 14px; background: #000; padding: 5px 10px; border-radius: 4px;
        }
    `;
    document.head.appendChild(style);

    // 2. Buat Struktur Popup
    const overlay = document.createElement('div');
    overlay.id = 'popup-overlay-ads';
    
    const popupBox = document.createElement('div');
    popupBox.className = 'popup-box-ads';
    
    // Tombol tutup
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close-ad-btn';
    closeBtn.innerHTML = 'Tutup Iklan [X]';
    closeBtn.onclick = function() { overlay.remove(); };

    // Container Iklan 
    const adContainer = document.createElement('div');
    adContainer.id = 'ad-space-300-250';

    popupBox.appendChild(closeBtn);
    popupBox.appendChild(adContainer);
    overlay.appendChild(popupBox);
    document.body.appendChild(overlay);

    // 3. INJEKSI SCRIPT IKLAN
    window.atOptions = {
        'key' : 'c6519a79b77606d968cf36c00f3894c6',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
    };

    const adScript = document.createElement('script');
    adScript.type = 'text/javascript';
    adScript.src = 'https://www.highperformanceformat.com/c6519a79b77606d968cf36c00f3894c6/invoke.js';
    
    adContainer.appendChild(adScript);

    overlay.onclick = function(e) {
        if (e.target === overlay) overlay.remove();
    };
})();
