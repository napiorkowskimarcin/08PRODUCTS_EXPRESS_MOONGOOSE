module.exports = {
  db:
    "mongodb+srv://admin:bzXwQUKiepDN0tta@cluster0.2spnk.mongodb.net/<dbname>?retryWrites=true&w=majority",
  keySession: ["somekey"],
  maxAgeSession: 24 * 60 * 60 * 1000,
};
