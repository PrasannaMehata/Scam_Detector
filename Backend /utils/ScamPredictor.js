const predictScam = async (input) => {
  const scams = ['.tk', '.ml', 'freegift', 'claimnow', 'lottery', 'win'];
  let score = scams.reduce((acc, scam) => input.includes(scam) ? acc + 1 : acc, 0);
  let isScam = score > 1;

  return {
    isScam,
    reason: isScam ? "Contains suspicious keywords" : "No known scam indicators",
    risk: isScam ? "High" : "Low"
  };
};

module.exports = { predictScam };
