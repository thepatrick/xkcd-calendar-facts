import generateRandomFact from '../src/RandomFact.js';

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: generateRandomFact()
  });
}
