export const convertPLNToUSD = (PLN) => {

  // Checking if the input is a string
  if (typeof PLN === 'string') {
    return NaN;
  }
  // Checking if the input is empty
  if (PLN === undefined) {
    return NaN;
  }
  // Checking if the input is not a number or a string
  if (typeof PLN !== 'number' && typeof PLN !== 'string') {
    return 'Error';
  }
  // Parsing the amount to a number if it's a string
  if (typeof PLN === 'string') {
    PLN = parseFloat(PLN);
  }
  // If the amount is less than zero, return $0.00
  if (PLN < 0) {
    return '$0.00';
  }

  const PLNtoUSD = PLN / 3.5;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}