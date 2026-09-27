(function () {
  function formatRestaurantDate(timeZone) {
    try {
      var parts = new Intl.DateTimeFormat('hr-HR', {
        timeZone: timeZone || 'Europe/Zagreb',
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }).formatToParts(new Date());
      var values = {};

      parts.forEach(function (part) {
        if (part.type === 'day' || part.type === 'month' || part.type === 'year') {
          values[part.type] = part.value;
        }
      });

      return values.day + '.' + values.month + '.' + values.year;
    } catch (error) {
      return '';
    }
  }

  function hydrateRestaurantDates() {
    document.querySelectorAll('[data-restaurant-date]').forEach(function (node) {
      var date = formatRestaurantDate(node.getAttribute('data-time-zone'));

      if (!date) {
        return;
      }

      node.textContent = (node.getAttribute('data-prefix') || '') + date;
    });
  }

  function getCurrentDateKey(timeZone) {
    try {
      var parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: timeZone || 'Europe/Zagreb',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).formatToParts(new Date());
      var values = {};

      parts.forEach(function (part) {
        if (part.type === 'day' || part.type === 'month' || part.type === 'year') {
          values[part.type] = part.value;
        }
      });

      return values.year + '-' + values.month + '-' + values.day;
    } catch (error) {
      return '';
    }
  }

  function isAnnouncementVisibleToday(node) {
    var currentDate = getCurrentDateKey(node.getAttribute('data-time-zone'));
    var startDate = node.getAttribute('data-start-date');
    var endDate = node.getAttribute('data-end-date') || startDate;

    return Boolean(currentDate && startDate && currentDate >= startDate && currentDate <= endDate);
  }

  function updateHolidayAnnouncementOverflow(node) {
    var viewport = node.querySelector('[data-holiday-announcement-viewport]');
    var message = node.querySelector('[data-holiday-announcement-message]');

    if (!viewport || !message) {
      return;
    }

    node.classList.toggle(
      'holiday-announcement--scroll',
      message.scrollWidth > viewport.clientWidth
    );
  }

  function hydrateHolidayAnnouncements() {
    document.querySelectorAll('[data-holiday-announcement]').forEach(function (node) {
      if (!isAnnouncementVisibleToday(node)) {
        node.hidden = true;
        node.classList.remove('holiday-announcement--scroll');
        return;
      }

      node.hidden = false;
      updateHolidayAnnouncementOverflow(node);
    });
  }

  function hasNextRuntimeScripts() {
    return Boolean(document.querySelector('script[src*="/_next/"]'));
  }

  function bindPrintButtons() {
    document.querySelectorAll('[data-print-button]').forEach(function (button) {
      button.addEventListener('click', function () {
        window.print();
      });
    });
  }

  function initStaticSite() {
    function updateDailyOffers() {
      hydrateRestaurantDates();
      var today = getCurrentDateKey('Europe/Zagreb');
      document.querySelectorAll('[data-daily-current], [data-daily-stale]').forEach(function (node) {
        var current = node.getAttribute('data-offer-date') === today && node.getAttribute('data-offer-active') !== 'false';
        node.hidden = node.hasAttribute('data-daily-current') ? !current : current;
      });
    }
    updateDailyOffers();
    window.setInterval(updateDailyOffers, 60000);
    window.addEventListener('pageshow', updateDailyOffers);
    window.addEventListener('beforeprint', updateDailyOffers);
    hydrateRestaurantDates();
    bindPrintButtons();

    if (hasNextRuntimeScripts()) {
      return;
    }

    hydrateHolidayAnnouncements();
    window.addEventListener('resize', hydrateHolidayAnnouncements);
    window.setInterval(hydrateHolidayAnnouncements, 30 * 60 * 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStaticSite);
    return;
  }

  initStaticSite();
})();
