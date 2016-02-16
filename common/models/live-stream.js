module.exports = function (liveStream) {
  liveStream.validatesInclusionOf('type', {in: ['flv', 'm3u8']});
}
