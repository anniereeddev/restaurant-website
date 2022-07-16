(function() {
    'use strict';

    var ICON_SIZE = {
        1: { width: 16, height: 16 },
        2: { width: 71, height: 16 },
    };

    var ICON_PLACEMENT = {
        1: { top: 0, left: 0 },
        2: { top: 0, right: 0 },
        3: { bottom: 0, right: 0 },
        4: { bottom: 0, left: 0 },
    };

    var ICON_IMAGES = {
        1: 'https://media.bidr.io/addons/adchoices/adchoices-sm.png',
        2: 'https://media.bidr.io/addons/adchoices/adchoices-lg.png',
    };

    /**
     * Returns object of param values keyed by param type.
     * { placement: 1|2|3|4, size: 1|2 }
     */
    function getScriptParams() {
        var script = document.querySelector('script[src^="https://media.bidr.io/addons/adchoices/adchoices.js"]');
        var query = script.src.split('?')[1];
        var params = {};
    
        if (!query) {
            return params;
        }

        var paramStrs = query.split('&');
        for (var i = 0; i < paramStrs.length; i++) {
            var paramPair = paramStrs[i].split('=');
            params[decodeURIComponent(paramPair[0])] = decodeURIComponent(paramPair[1]);
        }
        
        return params;
    }

    function addAdChoicesLink() {
        var wrapper = document.getElementById('beeswax-ad-wrapper');
        var adChoicesWrapper = document.createElement('div');
        var params = getScriptParams();
        var size;
        var placement;
        var img;

        // validate and default params
        if (!ICON_SIZE.hasOwnProperty(params.size)) {
            params.size = 1;
        }

        if (!ICON_PLACEMENT.hasOwnProperty(params.placement)) {
            params.placement = 1;
        }
        
        for (var key in ICON_SIZE[params.size]) {
            adChoicesWrapper.style[key] = ICON_SIZE[params.size][key] + 'px';
        }

        for (var key in ICON_PLACEMENT[params.placement]) {
            adChoicesWrapper.style[key] = ICON_PLACEMENT[params.placement][key];
        }

        img = ICON_IMAGES[params.size];


        adChoicesWrapper.style.position = 'absolute';
        adChoicesWrapper.style.zIndex = 4999;
        adChoicesWrapper.innerHTML = '<a href="https://www.beeswax.com/privacy_summary.html" target="_blank"><img src="'+ img + '" alt="AdChoices" /></a>';
    
        wrapper.appendChild(adChoicesWrapper);
    }

    addAdChoicesLink();
    
}());
