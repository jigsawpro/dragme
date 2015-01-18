DragMe
=============
*Original README below.*

This is a proof of concept non-jQuery fork of Buffer's [jQuery DragMe plugin](https://github.com/bufferapp/jquery-dragme).

Due to the fact that a lot of new JavaScript APIs are used it will currently only work in Firefox 35 and later.
To get it working in all browers that support CSS Transforms the following APIs need to be polyfilled:

* DOMTokenList/classList (https://github.com/jwilsson/domtokenlist)
* Object.assign (https://github.com/sindresorhus/object-assign)
* Element.closest (https://github.com/jonathantneal/closest)

## Usage
```javascript
  new DragMe(document.querySelector('.my-modal-window'));
```

Prevent clicking on certain elements from dragging the element.

```javascript
  new DragMe(document.querySelector('.my-modal-window'), {
    cancel: 'textarea, .button'
  });
```

jQuery DragMe
=============

A super lightweight jQuery plugin for dragging elements using CSS3 Transforms.
The goal of this plugin is not to be a drop in replacement for jQuery UI's
draggable, but a minimal plugin to make certain elements draggable on a page,
i.e. modal windows.

[Live demo](http://bufferapp.github.io/jquery-dragme/)

## Usage

```javascript
  $('.my-modal-window').dragMe();
```

Prevent clicking on certain elements from dragging the element.

```javascript
  $('.my-modal-window').dragMe({
    cancel: 'textarea, .button'
  });
```

## Roadmap

- Use requestAnimationFrame for smoother movement

## Contributions

Bug fixes or improvements welcome!
