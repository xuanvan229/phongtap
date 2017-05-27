/*!
 * node-feedparser
 * Copyright(c) 2013 Dan MacTough <danmactough@gmail.com>
 * MIT Licensed
 */

var FeedParser = require('feedparser'),
	request = require('request'),
	// fs = require('fs'),
	// storage = require('node-persist'),
	feed = ["http://vnexpress.net/rss/tin-moi-nhat.rss", "http://vnexpress.net/rss/thoi-su.rss", "http://vnexpress.net/rss/the-gioi.rss", "http://vnexpress.net/rss/kinh-doanh.rss", "http://vnexpress.net/rss/giai-tri.rss", "http://vnexpress.net/rss/the-thao.rss", "http://vnexpress.net/rss/phap-luat.rss", "http://vnexpress.net/rss/giao-duc.rss", "http://vnexpress.net/rss/suc-khoe.rss", "http://vnexpress.net/rss/gia-dinh.rss", "http://vnexpress.net/rss/du-lich.rss", "http://vnexpress.net/rss/khoa-hoc.rss", "http://vnexpress.net/rss/so-hoa.rss", "http://vnexpress.net/rss/xe.rss", "http://vnexpress.net/rss/cong-dong.rss", "http://vnexpress.net/rss/tam-su.rss", "http://vnexpress.net/rss/cuoi.rss"];


var firebase = require('firebase-admin');

var serviceAccount = require("./tinnhanh.json");

firebase.initializeApp({
	credential: firebase.credential.cert(serviceAccount),
	databaseURL: "https://tinnhanh-f33c5.firebaseio.com"
});

for (var f = 0; f < feed.length; f++) {
	console.log(f);
	var i = 0;
	doFeed(f, i);
	console.log("Success!");
}

var MongoClient = require('mongodb').MongoClient;

function saveData(item, f, i) {
	string = item.description;
	var a = string.split('"');
	var anh = a[3];
	var title = item.title;
	var link = item.link;
	var date = item.pubDate.toString();
	var guid = item.guid;
	MongoClient.connect("mongodb://localhost:27017/tinnhanh", function (err, db) {
		if (err) {
			return console.log(err);
		}


		db.collection('danhsachcacbaibao', function (err, collection) {
			if (err) {
				return console.log(err);
			}
			guid = guid.slice(guid.lastIndexOf('-') + 1, guid.lastIndexOf('.'));

			collection.findOne({ "guid": guid }).then(function (doc) {
				if (!doc) {
					switch (f) {
						case 0: {
							collection.insert({
								'vnexpress': {
									'tin-moi-nhat': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'tin-moi-nhat', i);
							break;
						}
						case 1: {
							collection.insert({
								'vnexpress': {
									'thoi-su': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'thoi-su', i);
							break;
						}
						case 2: {
							collection.insert({
								'vnexpress': {
									'the-gioi': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'the-gioi', i);
							break;
						}
						case 3: {
							collection.insert({
								'vnexpress': {
									'kinh-doanh': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'kinh-doanh', i);
							break;
						}
						case 4: {
							collection.insert({
								'vnexpress': {
									'giai-tri': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'giai-tri', i);
							break;
						}
						case 5: {
							collection.insert({
								'vnexpress': {
									'the-thao': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'the-thao', i);
							break;
						}
						case 6: {
							collection.insert({
								'vnexpress': {
									'phap-luat': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'phap-luat', i);
							break;
						}
						case 7: {
							collection.insert({
								'vnexpress': {
									'giao-duc': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'giao-duc', i);
							break;
						}
						case 8: {
							collection.insert({
								'vnexpress': {
									'suc-khoe': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'suc-khoe', i);
							break;
						}
						case 9: {
							collection.insert({
								'vnexpress': {
									'gia-dinh': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'gia-dinh', i);
							break;
						}
						case 10: {
							collection.insert({
								'vnexpress': {
									'du-lich': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'du-lich', i);
							break;
						}
						case 11: {
							collection.insert({
								'vnexpress': {
									'khoa-hoc': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'khoa-hoc', i);
							break;
						}
						case 12: {
							collection.insert({
								'vnexpress': {
									'so-hoa': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'so-hoa', i);
							break;
						}
						case 13: {
							collection.insert({
								'vnexpress': {
									'xe': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'xe', i);
							break;
						}
						case 14: {
							collection.insert({
								'vnexpress': {
									'cong-dong': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'cong-dong', i);
							break;
						}
						case 15: {
							collection.insert({
								'vnexpress': {
									'tam-su': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'tam-su', i);
							break;
						}
						case 16: {
							collection.insert({
								'vnexpress': {
									'cuoi': {
										tieude: title,
										anh: anh,
										link: link,
										date: date,
										guid: guid
									}
								}
							});
							Firebase(item, 'cuoi', i);
							break;
						}
						default: {
							console.log('Not actions done');
						}
					}


				}
			});
		});

	});

}
function Firebase(item, $chuyenmuc, i) {
	string = item.description;
	var a = string.split('"');
	var anh = a[3];
	var title = item.title;
	var link = item.link;
	var date = item.pubDate.toString();
	var firebaseDb = firebase.database();
	var ref = firebaseDb.ref("danhsachcacbaibao/vnexpress");
	var vnexpressref = ref.child($chuyenmuc).child(i.toString()).set({
		tieude: title,
		anh: anh,
		link: link,
		date: date
	});
}



function doFeed(f, i) {
	var req = request(feed[f]);
	var feedparser = new FeedParser();

	req.on('error', function (error) {
		// handle any request errors
	});

	req.on('response', function (res) {
		var stream = this; // `this` is `req`, which is a stream

		if (res.statusCode !== 200) {
			this.emit('error', new Error('Bad status code'));
		} else {
			stream.pipe(feedparser);
		}
	});

	feedparser.on('error', function (error) {
		// always handle errors
	});

	feedparser.on('readable', function () {
		// console.log(f);
		// This is where the action is!
		var stream = this,
			item; // `this` is `feedparser`, which is a stream

		while (item = stream.read()) {
			i++;
			saveData(item, f, i);
		}
	}

	);
}
