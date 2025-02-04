exports.onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV === 'production') {
    const pathPrefix = '/PrithviMetals';
    if (!location.pathname.startsWith(pathPrefix)) {
      window.location.href = `${pathPrefix}${location.pathname}`;
    }
  }
}; 