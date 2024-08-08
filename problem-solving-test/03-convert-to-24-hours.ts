function format24Hour(h: string) {
  const isPm = h.match(/PM/gi);
  const hArr = h.replace(/(AM|PM)/g, '').split(':');
  hArr[0] = isPm ? String(Number(hArr[0]) + 12) : hArr[0];
  if (hArr[0] === '24') {
    hArr[0] = '00';
  }
  return hArr.join(':');
}
