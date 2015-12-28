Package.describe({
  name: "daishi:google-stub",
  summary: "A fake for use in testing. Fakes the oauth calls amongst other APIs.",
  version: "0.0.5",
  git: "https://github.com/dai-shi/meteor-google-stub",
  debugOnly: true
});

Package.on_use(function (api) {
  api.use('google@1.1.2', ['client', 'server']);
  api.use(['service-configuration@1.0.3'], ['server']);
  api.use(['xolvio:http-interceptor@0.4.0'], ['server']);
  api.use(['iron:router@1.0.6'], ['server']);
  api.add_files('oauth-fake-client.js', 'client');
  api.add_files('google-fake.js', ['server']);
});
