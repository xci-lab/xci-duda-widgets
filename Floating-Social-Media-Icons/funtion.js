let element = $(".dmCustomHtml");
let dmAPI = {
  runOnReady: (functionName, callback) => {
    if (functionName) {
      callback();
    } else {
      console.error("Please Enter Function Name!");
    }
  },
  loadScript: (url, callback) => {
    var fjs = document.getElementsByTagName("script")[0];
    script = document.createElement("script");
    script.src = url;
    fjs.parentNode.insertBefore(script, fjs);
    if (script.readyState) {
      //IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      //Others
      script.onload = function () {
        callback();
      };
    }
    script.src = url;
    fjs.parentNode.insertBefore(script, fjs);
  },
};
let data = {
  device: "desktop", //desktop || tablet || mobile
  config: {
    socMedList: [
      {
        icon:
          `<i class="bx bxl-twitter"></i>`,
        socMedTitle: "Twitter",
        link: ""
      },
      {
        icon:
          `<i class="bx bxl-facebook"></i>`,
        socMedTitle: "Facebook",
        link: ""
      },
      {
        icon:
          `<i class="bx bxl-instagram"></i>`,
        socMedTitle: "Instagram",
        link: ""
      },
      {
        icon:
          `<i class="bx bxl-linkedin"></i>`,
        socMedTitle: "LinkedIn",
        link: ""
      },
      {
        icon:
          `<i class="bx bxl-tiktok"></i>`,
        socMedTitle: "TikTok",
        link: ""
      },
      {
        icon:
          `<i class="bx bxl-whatsapp"></i>`,
        socMedTitle: "WhatsApp",
        link: ""
      },
      {
        icon:
          `<i class="bx bxl-youtube"></i>`,
        socMedTitle: "Youtube",
        link: ""
      },
      {
        icon:
          `<i class="bx bxl-snapchat"></i>`,
        socMedTitle: "Snapchat",
        link: ""
      },
      {
        icon:
          `<i class="bx bxl-telegram"></i>`,
        socMedTitle: "Telegram",
        link: ""
      },
      {
        icon:
          `<i class="bx bxl-pinterest"></i>`,
        socMedTitle: "Pinterest",
        link: ""
      }
    ],
  },
  socMedWidth: "300"
};

if (data.device == "desktop") {
    $(element).css({ "max-width": "1200px" });
  }
  if (data.device == "tablet") {
    $(element).css({ "max-width": "955px" });
    $(element).addClass("tabletSize");
  }
  if (data.device == "mobile") {
    $(element).css({ "max-width": "356px" });
    $(element).addClass("mobileSize"); //REMOVE THIS CODE AFTER MIGRATING TO WIDGET
  }

  $(element).find('.fSocIcons li').hover(function(){
    $(this).toggleClass("active");
});
// $(element).toggleClass(".fSocIcons li.active a").show().css("width","100%");

$('<link/>', {
  rel: 'stylesheet',
  type: 'text/css',
  href: 'https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css'
}).appendTo('head');


