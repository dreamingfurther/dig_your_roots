let railsAssetImagePath;
console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
  railsAssetImagePath = filePath => `/assets/${filePath}`;
}

if (process.env.NODE_ENV === 'test') {
  railsAssetImagePath = filePath => {
    let file = filePath.split('/').pop();
    return `/test/support/images/${file}`;
  };
}

if (process.env.NODE_ENV === 'staging') {
  railsAssetImagePath = filePath => {
    let fingerprintedPath = railsAssetHelper[filePath];
    if (!fingerprintedPath) {
      console.error('fingerprintedPath not found, make sure you have registered the file in app/assets/javascripts/railsAssetHelper.js.erb');
    }
    return fingerprintedPath;
  };

}

if (process.env.NODE_ENV === 'production') {
  railsAssetImagePath = filePath => railsAssetHelper[filePath];

}

export { railsAssetImagePath };
