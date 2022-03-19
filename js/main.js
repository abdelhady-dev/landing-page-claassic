/*jslint browser: true*/
/*global $, window*/
$(function () {
    'use strict';
    var winH     = $(window).height(),
        navH     = $('.main-nav').innerHeight();

    $('.header').height(winH);
    $('.slider').height(winH - navH);

    $('.portfolio ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-images .content').css('opacity', 1);
        } else {
            $('.shuffle-images .content').css('opacity', '.09');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });

});
