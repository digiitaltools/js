(function() {
    const popupOverlay = document.createElement('div');
    popupOverlay.id = 'custom-popup-overlay';

    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    
    const title = document.createElement('h3');
    title.innerText = 'Informasi Penting';
    
    const message = document.createElement('p');

    const closeBtn = document.createElement('button');
    closeBtn.innerText = 'Tutup';
    closeBtn.style.marginTop = '15px';
    closeBtn.onclick = function() {
        popupOverlay.remove(); 
    };

    popupContent.append(title, message, closeBtn);
    popupOverlay.append(popupContent);

    Object.assign(popupOverlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '9999'
    });

    Object.assign(popupContent.style, {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        maxWidth: '400px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        fontFamily: 'Arial, sans-serif'
    });

    document.body.append(popupOverlay);
})();
