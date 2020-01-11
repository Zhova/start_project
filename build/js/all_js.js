"use strict";

var _this = void 0;

$(function () {
  $('.more').on('click', function () {
    $('.contmenu').slideToggle(300);
    $('.more__line:nth-child(1)').toggleClass('line-rotate-first');
    $('.more__line:nth-child(3)').toggleClass('line-rotate-second');
    $('.more__line:nth-child(2)').toggle();
  });
  $('.contmenu a').on('click', function () {
    $('.contmenu').slideUp(300);
    $('.more__line:nth-child(1)').toggleClass('line-rotate-first');
    $('.more__line:nth-child(3)').toggleClass('line-rotate-second');
    $('.more__line:nth-child(2)').toggle();
  });
  var $crossHide = $('.cross');
  var $fullinfo = $('.fullinfo');
  var $trainType = $('.trainings__type span');
  $trainType.on('click', function () {
    $(event.currentTarget).next().fadeIn();
  });
  $crossHide.on('click', function () {
    $fullinfo.fadeOut();
  });
  var $normItem = $('.normative__item');
  $normItem.on('click', function (event) {
    $(event.currentTarget).next().fadeIn();
  });
  $crossHide.on('click', function () {
    $('.fullinfo-hide').fadeOut();
  }); //send form

  $('.form').submit(function () {
    var form_data = $(_this).serialize();
    $.ajax({
      type: "POST",
      url: "send.php",
      data: form_data,
      success: function success() {
        alert("Ваше сообщение отпрвлено!");
      }
    });
  });
});