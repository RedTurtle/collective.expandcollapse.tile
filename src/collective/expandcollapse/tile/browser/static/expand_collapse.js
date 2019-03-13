require(['jquery'], function($) {
  'use strict';
  $(document).on('click', '.tile-collapse-button', function(e) {
    var collapse = $(e.target).closest('.collapsible, .collapsible-desktop');
    collapse.toggleClass('open');
    collapse.find('.tileBody, .tileContent').slideToggle();
  });

  function addButton(selector) {
    var titleDOM = $(selector).find('h2.tileTitle');
    titleDOM.each(function() {
      var title = $(this).text();
      var collapsible = $(this).closest('.collapsible, .collapsible-desktop');

      $(this).html(
        '<button class="tile-collapse-button"><span class="title-content">'
          .concat(title)
          .concat(
            '</span><span class="title-icon"><i class="fas fa-angle-down"></i><i class="fas fa-angle-up"></i></span></button>'
          )
      );

      if ($(collapsible).hasClass('default-open')) {
        $(collapsible).addClass('open');
      }
    });
  }
  function removeButton(selector) {
    var titleDOM = $(selector).find('h2.tileTitle');

    titleDOM.each(function() {
      var title = $(this).text();
      $(this).html(title);
    });
  }
  function handleTileCollapse() {
    if ($('.tileWrapper > .collapsible-desktop').length) {
      addButton('.tileWrapper > .collapsible-desktop');
    }
    if ($('.tileWrapper > .collapsible').length) {
      if (window.innerWidth <= 991) {
        addButton('.tileWrapper > .collapsible');
      } else {
        removeButton('.tileWrapper > .collapsible');
      }
    }
  }

  $(window).on('resize orientationchange', function() {
    handleTileCollapse();
  });

  $(function() {
    if ($('body').hasClass('userrole-anonymous')) {
      handleTileCollapse();
    } else {
      $('.pat-tiles-management').on('rtTilesLoaded', function() {
        handleTileCollapse();
      });
    }
  });
});
