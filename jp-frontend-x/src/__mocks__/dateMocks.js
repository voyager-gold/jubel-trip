const NOW = 1479427200000; // 2016-11-18 00:00:00.000

module.exports = (date) => {
  const now = date ? date.getTime() : NOW;
  Date.now = jest.spyOn(Date, 'now').mockImplementation(() => now);
  return now;
};
