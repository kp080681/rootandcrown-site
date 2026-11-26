(function(){
  var URL_ = 'RC_FORM_URL';
  var f = document.getElementById('rc-form'); if(!f) return;
  var msg = document.getElementById('rc-form-msg');
  f.addEventListener('submit', function(e){
    e.preventDefault();
    if (!f.reportValidity()) return;
    var btn = f.querySelector('button[type=submit]'), label = btn.innerHTML;
    btn.disabled = true; btn.innerHTML = '<span>Sending...</span>'; msg.textContent = '';
    var body = new URLSearchParams(new FormData(f));
    fetch(URL_, {method:'POST', mode:'no-cors', body: body})
      .then(function(){ window.location.href = '/thank-you/'; })
      .catch(function(){
        btn.disabled = false; btn.innerHTML = label;
        msg.textContent = 'Your message could not be sent. Please call us on 7204128989.';
      });
  });
})();
