/*!
 * jQuery DragMe - v 0.1 - 12/03/2014
 * Made by Buffer! https://bufferapp.com
 * 
 * Copyright (c) 2014 Buffer, Inc. MIT licensed.
 */

;(function($, window, undefined) {

  var defaults = {
    cancel: null
  };

  var DragMe = function(el, options) {

    this.options = $.extend({}, defaults, options) ;

    this.el = el;
    this.$el = $(el);
    this.$body = $('body');

    this.onMousedown = this.onMousedown.bind(this);
    this.onMove = this.onMove.bind(this);
    this.release = this.release.bind(this);

    this.$el
      .addClass('ui-draggable')
      .on('mousedown', this.onMousedown);
  };


  DragMe.prototype.onMousedown = function(e) {

    if (this.options.cancel && this.shouldCancel(e.target))
      return;

    var transform = window.getComputedStyle(this.el).transform;
    var coords = transform && transform.match(/-*\d+/g);
    this.origX = coords ? parseInt(coords[4], 10) : 0;
    this.origY = coords ? parseInt(coords[5], 10) : 0;

    this.dragStartX = e.pageX;
    this.dragStartY = e.pageY;

    this.$body
      .on('mousemove', this.onMove)
      .on('mouseup mouseleave', this.release);
  };


  DragMe.prototype.onMove = function(e) {
    var x = this.origX - this.dragStartX + e.pageX;
    var y = this.origY - this.dragStartY + e.pageY;

    this.$el.css({
      transform: 'translate(' + x + 'px,' + y + 'px)'
    });
  };


  DragMe.prototype.release = function() {
    this.$body
      .off('mousemove', this.onMove)
      .off('mouseup mouseleave', this.release);
  };


  DragMe.prototype.shouldCancel = function(target) {
    return $(target).closest(this.options.cancel, this.el).length > 0;
  };


  $.fn.dragMe = function(options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_dragMe')) {
        $.data(this, 'plugin_dragMe', new DragMe(this, options));
      }
    });
  };

}(jQuery, window));