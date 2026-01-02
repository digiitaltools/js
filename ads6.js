(function() {
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName) {
        const element = originalCreateElement.call(document, tagName);
        if (tagName.toLowerCase() === 'script') {
            const originalSetAttribute = element.setAttribute;
            element.setAttribute = function(name, value) {
                if (name === 'src' && typeof value === 'string') {
                    value = value.replace('http://cdn.statically.io', 'https://cdn.statically.io');
                }
                originalSetAttribute.call(element, name, value);
            };
            
            // Properti .src langsung juga harus dipantau
            Object.defineProperty(element, 'src', {
                set: function(value) {
                    const secureValue = value.replace('http://cdn.statically.io', 'https://cdn.statically.io');
                    element.setAttribute('src', secureValue);
                },
                get: function() {
                    return element.getAttribute('src');
                }
            });
        }
        return element;
    };

    const style = document.createElement('style');
    style.innerHTML = `
        #popup-overlay-ads {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.85); display: flex; align-items: center;
            justify-content: center; z-index: 999999;
        }
        .popup-box-ads {
            width: 300px; height: 250px; background: #fff; 
            position: relative; box-shadow: 0 0 20px rgba(0,0,0,0.5);
        }
        .close-ad-x {
            position: absolute; top: -30px; right: 0; color: #fff;
            background: #ff0000; padding: 2px 8px; cursor: pointer;
            font-size: 12px; font-family: sans-serif; border-radius: 3px;
        }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.id = 'popup-overlay-ads';
    
    const popupBox = document.createElement('div');
    popupBox.className = 'popup-box-ads';
    
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close-ad-x';
    closeBtn.innerHTML = 'CLOSE [X]';
    closeBtn.onclick = () => overlay.remove();

    const adContainer = document.createElement('div');
    adContainer.id = 'ad-space-300-250';

    popupBox.appendChild(closeBtn);
    popupBox.appendChild(adContainer);
    overlay.appendChild(popupBox);
    document.body.appendChild(overlay);

    window.atOptions = {
        'key' : 'c6519a79b77606d968cf36c00f3894c6',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
    };

    const mainAds = document.createElement('script');
    mainAds.type = 'text/javascript';
    mainAds.src = "https://cdn.statically.io/gh/digiitaltools/js@main/ads6.js";
    adContainer.appendChild(mainAds);

    const invokeAds = document.createElement('script');
    invokeAds.type = 'text/javascript';
    invokeAds.src = "https://www.highperformanceformat.com/c6519a79b77606d968cf36c00f3894c6/invoke.js";
    adContainer.appendChild(invokeAds);
})();
