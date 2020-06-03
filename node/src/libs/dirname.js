/**
 * Created by hui on 16/12/18.
 */
const lhDirname = () => {
  // console.log(__dirname);
  // console.log(__filename);
  return {
    d: __dirname,
    f: __filename,
  };
};

module.exports = lhDirname;
