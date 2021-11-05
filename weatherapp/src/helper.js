// from: https://stackoverflow.com/questions/10087819/convert-date-to-another-timezone-in-javascript
function convertTZ(date, tzString) {
  return new Date(
    (typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {
      timeZone: tzString,
    })
  );
}

export { convertTZ };
