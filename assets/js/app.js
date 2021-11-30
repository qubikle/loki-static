(function ($angular) {
  var app = angular.module("dataApp", []);

  app.controller("mainController", ["$timeout", "$interval", "$scope", function ($timeout, $interval, $scope) {

    var scope = this;
    var baseViewportSize = 100;
    var baseWidthPx = 1920;
    var baseHeightPx = 1080;
    var baseWidth = baseViewportSize / baseWidthPx;
    var baseHeight = baseViewportSize / baseHeightPx;
    var colorBlack = "#000000";
    var colorWhite = "#FFFFFF";
    var colorPink = "#FE2AA9";
    var colorYellow = "#FDCC66";
    var colorPurple = "#451BDF";
    var colorBlue = "#56CFE0";

    scope.submitted = false;
    
    //============================================================
    // MOCK DATA

    scope.projects = projects; // data import from projects-data.js

    scope.selected = projects[0].title;
    scope.select= function(item) {
      scope.selected = item; 
    };

    //============================================================
    // INTERACTION

    var sect_home = $('#section-home').outerHeight();
    sect_home = baseHeight * sect_home;

    var sect_l = $('#section-l').outerHeight();
    sect_l = baseHeight * sect_l;

    var sect_o = $('#section-o').outerHeight();
    sect_o = baseHeight * sect_o;

    var sect_k = $('#section-k').outerHeight();
    sect_k = baseHeight * sect_k;

    var sect_i = $('#section-i').outerHeight();
    sect_i = baseHeight * sect_i;

    var sect_project = $('#section-project').outerHeight();
    sect_project = baseHeight * sect_project;

    $(window).scroll(function (e) {
      var scrollPos = $(this).scrollTop();
      scrollPos = baseHeight * scrollPos;
      // console.log(scrollPos);

      if (scrollPos >= sect_home) {
        $('.loki-l').addClass('is-active');
        $('.fa-bars').css('color', colorPink);
      }

      if (scrollPos < sect_home) {
        $('.fa-bars').css('color', colorWhite);
      }

      if (scrollPos >= (sect_home * 1.5) || scrollPos < sect_home) {
        $('.loki-l').removeClass('is-active');
      }

      if (scrollPos >= sect_home + sect_l) {
        $('.loki-o').addClass('is-active');
        $('.fa-bars').css('color', colorYellow);
      }

      if (scrollPos >= sect_home + sect_l + sect_o || scrollPos < sect_home + sect_l) {
        $('.loki-o').removeClass('is-active');
      }

      if (scrollPos >= sect_home + sect_l + sect_o) {
        $('.loki-k').addClass('is-active');
        $('.fa-bars').css('color', colorPurple);
      }

      if (scrollPos >= (sect_home + sect_l + sect_o) + (sect_o * 0.5)) {
        $('.loki-k').removeClass('is-active');
      }

      if (scrollPos >= sect_home + sect_l + sect_o + sect_k) {
        $('.loki-i').addClass('is-active');
        $('.fa-bars').css('color', colorBlue);
      }

      if (scrollPos >= (sect_home + sect_l + sect_o + sect_k) + (sect_k * 0.5) || scrollPos < sect_home + sect_l + sect_o + sect_k) {
        $('.loki-i').removeClass('is-active');
      }

      if (scrollPos >= sect_home + sect_l + sect_o + sect_k + sect_i) {
        $('.fa-bars').css('color', colorWhite);
      }

      if (scrollPos >= sect_home + sect_l + sect_o + sect_k + sect_i  + sect_project) {
        $('.fa-bars').css('color', colorBlack);
      }
    })

    $('a[href*=\\#]:not([href$=\\#])').click(function () {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);

      return false;
    });

    //============================================================
    // FORM

    scope.submitForm = function(isValid) {
      // check to make sure the form is completely valid
      if (isValid) {
        scope.submitted = true;
      }
    };


  }]);
})(window.angular);