function fixFiles(files) {
  let filesRepetitions = {};
  return files.map((el) => {
    filesRepetitions[el] = filesRepetitions[el] + 1 || 1;
    return filesRepetitions[el] === 1
      ? el
      : `${el}(${filesRepetitions[el] - 1})`;
  });
}
