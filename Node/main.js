// const http = require("http");
// const querystring = require("querystring");
// const fs = require("fs");
// const request = require("request");
// const Readable = require("stream").Readable;
// const Writable = require("stream").Writable;
// const stream = require("stream");
// const util = require("util");

// const postData = querystring.stringify({
//   content: `期望跟老师学到更多的东西`,
//   cid: 348,
//   mid: 8837
// });

// const options = {
//   hostname: "www.imooc.com",
//   port: 443,
//   path: "/course/docomment",
//   method: "POST",
//   headers: {
//     Accept: `application/json, text/javascript, */*; q=0.01`,
//     "Accept-Encoding": "gzip, deflate, br",
//     "Accept-Language": "zh-CN,zh;q=0.9",
//     "Cache-Control": "no-cache",
//     Connection: " keep-alive",
//     "Content-Length": postData.length,
//     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//     Cookie:
//       "imooc_uuid=34837d49-8261-452e-9c40-924fe8565dab; imooc_isnew_ct=1520141294; imooc_isnew=2; CNZZDATA1261110065=2023641881-1526172629-https%253A%252F%252Fwww.baidu.com%252F%7C1532953443; zg_did=%7B%22did%22%3A%20%22166b94e01264f7-0ee50e0f8ca28c-36664c08-1fa400-166b94e012939e%22%7D; loginstate=1; apsid=VkMTAwNjQ0OTgxYWEwOTA1NDI4MmU4YzZmYjkyMDcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzUyNTg4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxOTE1OTUxODkzQHFxLmNvbQAAAAAAAAAAAAAAAAAAADk4ZjY3ZjU2ZGQxZTc3MDBjMzZkZDM1M2MxN2NmNzE3P13VWwPDBlo%3DMT; Hm_lvt_fb538fdd5bd62072b6a984ddbc658a16=1541234127,1541312738,1541424530,1541600693; UM_distinctid=16702d22ec0c0-0505eca567a115-594c2a16-1fa400-16702d22ec14a0; CNZZDATA1275034521=914487847-1541420764-https%253A%252F%252Fwww.imooc.com%252F%7C1541938813; PHPSESSID=dqk68n7q6o41pre39ieobnrh02; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1541600677,1541940044,1542290272,1542434357; zg_f375fe2f71e542a4b890d9a620f9fb32=%7B%22sid%22%3A%201542454387997%2C%22updated%22%3A%201542455442069%2C%22info%22%3A%201541940043637%2C%22superProperty%22%3A%20%22%7B%5C%22%E5%BA%94%E7%94%A8%E5%90%8D%E7%A7%B0%5C%22%3A%20%5C%22%E6%85%95%E8%AF%BE%E7%BD%91%E6%95%B0%E6%8D%AE%E7%BB%9F%E8%AE%A1%5C%22%2C%5C%22%E5%B9%B3%E5%8F%B0%5C%22%3A%20%5C%22web%5C%22%7D%22%2C%22platform%22%3A%20%22%7B%7D%22%2C%22utm%22%3A%20%22%7B%7D%22%2C%22referrerDomain%22%3A%20%22coding.imooc.com%22%2C%22cuid%22%3A%20%227veoTZ0d83o%2C%22%7D; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1542455442; cvde=5befae30a6dcc-44",
//     Host: "www.imooc.com",
//     Origin: "https://www.imooc.com",
//     Pragma: "no-cache",
//     Referer: "https://www.imooc.com/video/8837",
//     "User-Agent":
//       "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
//     "X-Requested-With": "XMLHttpRequest"
//   }
// };

// const req = https.request(options, function(res) {
//   console.log("status" + res.statusCode);
//   console.log("headers" + JSON.stringify(res.headers));
//   res.on("data", function(chunk) {
//     console.log(Buffer.isBuffer(chunk));
//     console.log(typeof chunk);
//   });
//   res.on("end", function() {
//     console.log("评论完毕");
//   });
// });
// req.on("error", function(e) {
//   console.log("Error", e.message);
// });
// req.write(postData);
// req.end();
// --------------------------------------------------------------
// fs.readFile("test.png", function(err, buffer) {
//   console.log(Buffer.isBuffer(buffer));

//   fs.writeFile("test_a.png", buffer, function(err) {
//     if (err) console.log(err);
//   });

//   let base64Img = buffer.toString("base64");
//   console.log(base64Img);

//   const decodeIMG = new Buffer(base64Img, "base64");
//   console.log(Buffer.compare(buffer, decodeIMG));

//   fs.writeFile("decodeIMG.png", decodeIMG, function(err) {
//     if (err) console.log(err);
//   });
// });

// --------------------------------------------------------------
// fs.writeFile("文件名.txt", "Node.js中文网", "hex");

// --------------------------------------------------------------
// const readStream = fs.createReadStream("test.jpg");
// const writeStream = fs.createWriteStream("test-write.jpg");

// readStream.on("data", function(chunk) {
//   if (writeStream.write(chunk) === false) {
//     console.log("写入速度太慢需要暂停读取");
//     readStream.pause();
//   }
// });

// readStream.on("end", function() {
//   console.log("写入结束");
//   writeStream.end();
// });

// writeStream.on("drain", function() {
//   console.log("正在写入中");
//   readStream.resume();
// });

// --------------------------------------------------------------

// http
//   .createServer(function(req, res) {
//     fs.readFile("test.jpg", function(err, data) {
//       if (err) {
//         res.end("file not exist!");
//       } else {
//         res.writeHeader(200, { "Content-type": "text/html" });
//         res.end(data.toString('base64'));
//       }
//     });
//     request(
//       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542554494431&di=e5c0d74f2d0bf6292e3de57ba04ddd89&imgtype=0&src=http%3A%2F%2Fbbsfiles.vivo.com.cn%2Fvivobbs%2Fattachment%2Fforum%2F201404%2F23%2F104248qozk861r4l8l8kj8.jpg"
//     ).pipe(res);
//   })
//   .listen(8090, function() {
//     console.log("其服务");
//   });

// --------------------------------------------------------------

// fs.createReadStream("test.jpg").pipe(fs.createWriteStream("yangli.jpg"));
// const readStream = new Readable();
// const writeStream = new Writable();
// readStream.push("I");
// readStream.push("LOVE");
// readStream.push("YOU");
// readStream.push("TOO");
// readStream.push(null);

// writeStream._write = function(chunk, encode, cb) {
//   console.log(chunk.toString());
//   cb();
// };

// readStream.pipe(writeStream);

// --------------------------------------------------------------
// 自定义流

// function readStream() {
//   stream.Readable.call(this);
// }

// util.inherits(readStream, stream.Readable);

// readStream.prototype._read = function() {
//   this.push("I");
//   this.push("LOVE");
//   this.push("IMOOC");
//   this.push(null);
// };

// function writeStream() {
//   stream.Writable.call(this);
//   this._cached = new Buffer("");
// }

// util.inherits(writeStream, stream.Writable);

// writeStream.prototype._write = function(chunk, encode, cb) {
//   console.log(chunk.toString());
//   cb();
// };

// function transformStream() {
//   stream.Transform.call(this);
// }

// util.inherits(transformStream, stream.Transform);

// transformStream.prototype._transform = function(chunk, encode, cb) {
//   this.push(chunk);
//   cb();
// };

// transformStream.prototype._flush = function(cb) {
//   this.push("哈哈哈");
//   cb();
// };

// const rs = new readStream();
// const ws = new writeStream();
// const ts = new transformStream();

// rs.pipe(ts).pipe(ws);
console.log(process.env);
