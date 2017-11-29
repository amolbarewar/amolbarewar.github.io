(function(p,u,s,h){
    p._pcq=p._pcq||[];
    p._pcq.push(['_currentTime',Date.now()]);
    s=u.createElement('script');
    s.type='text/javascript';
    s.async=true;
    s.src='https://cdn.pushcrew.com/js/4e44cc75fccb3bbc4c4d9f21dfab29f0.js';
    s.onload = function () {
      function setCookie (name, value, exdays) {
          var d = new Date();
          d.setTime(d.getTime() + (parseInt(exdays) * 24 * 60 * 60 * 1000));
          var expires = 'expires='+d.toUTCString();
          document.cookie = name + '=' + value + ';path=/;' + expires;
      }

      function getCookie (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

      var getLastProduct = function () {
          var prevCart = JSON.parse(getCookie('prevCart')) || {},
            currCart = window.pc_shop_cart || {};

          if (prevCart && currCart && prevCart.items && currCart.items) {
            if (prevCart.items.length !== currCart.items.length) {
              return (window.pc_shop_cart.items && window.pc_shop_cart.items[0] || {});
            } else {
              for (var i = 0; i < currCart.items.length; i += 1) {
                if (currCart.items[i].quantity !== prevCart.items[i].quantity) {
                  console.log('Last product set to :: ', currCart.items[i]);
                  return currCart.items[i];
                }
              }
            }
          }
          return {};
      };

      var vwo_shopify = function () {
        window.pc_shop_cart = window.pc_shop_cart || {};
        window.last_added_product = getLastProduct();

        return {
          carttoken: function () {
            return window.pc_shop_cart && window.pc_shop_cart.token || '';
          },
          lastitemid: function () {
            return window.last_added_product && window.last_added_product.id;
          },
          lastproductid: function () {
            return window.last_added_product && window.last_added_product.product_id;
          },
          lastproducttitle: function () {
            return window.last_added_product && window.last_added_product.title;
          },
          lastproductprice: function () {
            return window.last_added_product && window.last_added_product.price;
          },
        };
      };
    };
    
    h=u.getElementsByTagName('script')[0];
    h.parentNode.insertBefore(s,h);
})(window,document);