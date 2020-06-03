const redis = require('redis');
// console.log(redis);

const client = redis.createClient(6379, '127.0.0.1');

client.on("error", (err) => {
  console.log("Error " + err);
});

client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", (err, replies) => {
  console.log(replies.length + " replies:");
  replies.forEach((reply, i) => {
    console.log("    " + i + ": " + reply);
  });
  client.quit();
});
