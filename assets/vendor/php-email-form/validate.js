/**
 * Static-site form handler for Render/GitHub Pages deployments.
 * No PHP, database, SMTP credentials, or server-side endpoint is required.
 * Submitting a form opens the visitor's email client with the form details.
 */
(function () {
  "use strict";

  document.querySelectorAll('.php-email-form[data-static-form="true"]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var loading = form.querySelector('.loading');
      var error = form.querySelector('.error-message');
      var sent = form.querySelector('.sent-message');

      if (loading) loading.classList.remove('d-block');
      if (error) error.classList.remove('d-block');

      var data = new FormData(form);
      var lines = [];
      data.forEach(function (value, key) {
        if (value !== '') lines.push(key.replace(/[-_]/g, ' ') + ': ' + value);
      });

      var subject = 'Website enquiry - Little Angels H.S. School';
      var body = lines.join('\n');
      var recipient = 'littleangelshighersecondarysch@gmail.com';
      var mailto = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

      window.location.href = mailto;
      if (sent) {
        sent.textContent = 'Your email app is opening with the form details. Please send the email to complete your enquiry.';
        sent.classList.add('d-block');
      }
    });
  });
})();
