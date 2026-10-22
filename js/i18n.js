(function () {
  var toggle = document.getElementById('langToggle');
  if (!toggle) return;

  function setLang(lng) {
    var html = document.documentElement;
    html.lang = lng === 'zh' ? 'zh-CN' : 'en';
    toggle.textContent = lng === 'zh' ? 'EN' : '\u4e2d\u6587';

    document.querySelectorAll('[data-cn]').forEach(function (el) {
      var en = el.getAttribute('data-en');
      if (!en) en = el.innerHTML;
      var cn = el.getAttribute('data-cn');
      el.innerHTML = lng === 'zh' ? cn : en;
      el.setAttribute('data-en', en);
    });

    try { localStorage.setItem('lang', lng); } catch (e) {}
  }

  var stored;
  try { stored = localStorage.getItem('lang'); } catch (e) {}
  setLang(stored === 'zh' ? 'zh' : 'en');

  toggle.addEventListener('click', function () {
    var cur = document.documentElement.lang;
    setLang(cur === 'zh-CN' ? 'en' : 'zh');
  });
})();