Package.describe({
  summary: "bootstrap-multiselect repackaged for Meteor"
});

Package.on_use(function (api, where) {
  api.add_files('bootstrap-multiselect/js/bootstrap-multiselect.js', 'client');
  api.add_files('bootstrap-multiselect/css/bootstrap-multiselect.css', 'client');
});