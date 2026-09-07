

  window.SnipcartSettings = {
    publicApiKey: "NWM5ZGUzYmQtY2RkOS00MWYzLTg3NTktZjQzYzRhNDNhMmFlNjM5MjQyNDU4ODU3MTcxOTkx",
    loadStrategy: "on-user-interaction",
      version: "3.4.1", // Ensures Snipcart links session features correctly
      timeoutDuration: 5000 // Optional: Keeps local guest cart memory active longer (in seconds)
    };


  (function(){var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");var m,g;(g=(m=window.SnipcartSettings).loadCSS)!=null||(m.loadCSS=!0);var y=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,f=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(f.forEach(function(t){return document.addEventListener(t,o)}),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],n=document.querySelector("#snipcart"),i=document.querySelector('src[src^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][src$="snipcart.js"]')),e=document.querySelector('link[href^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][href$="snipcart.css"]'));n||(n=document.createElement("div"),n.id="snipcart",n.setAttribute("hidden","true"),document.body.appendChild(n)),h(n),i||(i=document.createElement("script"),i.src="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.js"),i.async=!0,t.appendChild(i)),!e&&window.SnipcartSettings.loadCSS&&(e=document.createElement("link"),e.rel="stylesheet",e.type="text/css",e.href="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.css"),t.prepend(e)),f.forEach(function(v){return document.removeEventListener(v,o)})}function h(t){!y||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();


  <!-- 3. PASTE THE EVENT LISTENER JAVASCRIPT HERE 👇 -->

    document.addEventListener('snipcart.ready', function() {
      
      // 1. Instantly subscribe to ongoing updates (for clicks, adds, deletes)
      Snipcart.store.subscribe(updateGlobalBadge);

      // 2. 🚀 THE FIX: Background polling fallback for page refreshes.
      // Checks Snipcart's data loop every 200ms until the cart data officially arrives.
      let checkAttempts = 0;
      const forceCartCheck = setInterval(function() {
        const state = Snipcart.store.getState();
        const currentCount = state.cart.items.count;
        
        checkAttempts++;

        // If items are found or we've checked for 2 full seconds, update and stop checking
        if (currentCount > 0 || checkAttempts > 10) {
          updateGlobalBadge();
          clearInterval(forceCartCheck); // Kills the loop to protect performance
        }
      }, 200);

      // 🚀 LISTEN FOR THE SUCCESSFUL PAYMENT HERE
      Snipcart.events.on('cart.confirmed', async (cartConfirmResponse) => {
        
        // 1. Force the sliding cart sidebar to close cleanly
        await Snipcart.api.theme.cart.close();
        
        // 2. Extract the unique transaction token from the order
        const orderToken = cartConfirmResponse.token;
        
        // 3. Redirect the browser to your thank you page and pass the token
        window.location.href = 'https://rickyusu.github.io/YZC_test/thankyou.html?order=' + orderToken;
        
      });
      
    });

    function updateGlobalBadge() {
      try {
        const state = Snipcart.store.getState();
        const count = state.cart.items.count;
        const badge = document.querySelector('.snipcart-items-count');
        
        if (badge) {
          badge.innerText = count;
        }
      } catch (error) {
        console.error("Snipcart connection delay:", error);
      }
    }
