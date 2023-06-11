const formatBigInt = (data: object) => {
  JSON.stringify(data, (key, value) => {
    return typeof value === 'bigint' ? value.toString() : value;
  });
};

export default formatBigInt;
