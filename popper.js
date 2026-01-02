(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        #custom-popup-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.7); display: flex; align-items: center;
            justify-content: center; z-index: 999999; font-family: sans-serif;
        }
        .custom-popup-content {
            background: #fff; padding: 25px; border-radius: 12px;
            max-width: 400px; width: 90%; text-align: center;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2); position: relative;
        }
        .custom-popup-title { font-size: 20px; font-weight: bold; margin-bottom: 15px; color: #333; }
        .custom-popup-text { font-size: 16px; color: #666; margin-bottom: 20px; line-height: 1.5; }
        .custom-popup-btn {
            background: #007bff; color: white; border: none; padding: 10px 25px;
            border-radius: 5px; cursor: pointer; font-size: 14px; transition: 0.3s;
        }
        .custom-popup-btn:hover { background: #0056b3; }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.id = 'custom-popup-overlay';
    
    overlay.innerHTML = `
        <div class="custom-popup-content">
            <div class="custom-popup-title">Informasi Penting</div>
            <div class="custom-popup-text">Halo! Ini adalah pesan popup yang diinjeksi melalui file akbbes.js.</div>
            <button class="custom-popup-btn" id="close-popup">Tutup</button>
        </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById('close-popup').addEventListener('click', function() {
        overlay.remove();
    });
})();
