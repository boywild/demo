PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE dalei(id INT PRIMARY KEY NOT NULL,daleiname);
INSERT INTO "dalei" VALUES(0,'饮食');
INSERT INTO "dalei" VALUES(1,'交通');
INSERT INTO "dalei" VALUES(2,'医疗');
INSERT INTO "dalei" VALUES(3,'水电');
CREATE TABLE xiaolei(id INT PRIMARY KEY NOT NULL,daleiid,xiaoleiname);
INSERT INTO "xiaolei" VALUES(0,0,'早饭');
INSERT INTO "xiaolei" VALUES(1,0,'午饭');
INSERT INTO "xiaolei" VALUES(2,0,'晚饭');
INSERT INTO "xiaolei" VALUES(3,0,'点心');
INSERT INTO "xiaolei" VALUES(4,0,'宵夜');
INSERT INTO "xiaolei" VALUES(5,1,'公交');
INSERT INTO "xiaolei" VALUES(6,1,'打的');
INSERT INTO "xiaolei" VALUES(7,1,'火车');
INSERT INTO "xiaolei" VALUES(8,1,'飞机');
INSERT INTO "xiaolei" VALUES(9,2,'药费');
INSERT INTO "xiaolei" VALUES(10,3,'水');
INSERT INTO "xiaolei" VALUES(11,3,'电');
INSERT INTO "xiaolei" VALUES(12,3,'煤气');
CREATE TABLE record(xiaoleiid int not null,fee default 10.0 check(fee<10000),time);
INSERT INTO "record" VALUES(0,6,'2016-09-01');
INSERT INTO "record" VALUES(4,2,'2016-09-01');
INSERT INTO "record" VALUES(1,12,'2016-09-01');
INSERT INTO "record" VALUES(2,8,'2016-09-01');
INSERT INTO "record" VALUES(5,14,'2016-09-01');
INSERT INTO "record" VALUES(3,3,'2016-09-01');
INSERT INTO "record" VALUES(0,4,'2016-09-02');
INSERT INTO "record" VALUES(5,8,'2016-09-02');
INSERT INTO "record" VALUES(8,28,'2016-09-02');
INSERT INTO "record" VALUES(4,2,'2016-09-02');
INSERT INTO "record" VALUES(1,8,'2016-09-02');
INSERT INTO "record" VALUES(2,10,'2016-09-02');
INSERT INTO "record" VALUES(4,2,'2016-09-02');
INSERT INTO "record" VALUES(3,2,'2016-09-02');
INSERT INTO "record" VALUES(0,6,'2016-09-03');
INSERT INTO "record" VALUES(5,30,'2016-09-03');
INSERT INTO "record" VALUES(6,50,'2016-09-03');
INSERT INTO "record" VALUES(1,16,'2016-09-03');
INSERT INTO "record" VALUES(2,14,'2016-09-03');
INSERT INTO "record" VALUES(0,4,'2016-09-04');
INSERT INTO "record" VALUES(6,50,'2016-09-04');
INSERT INTO "record" VALUES(4,2,'2016-09-04');
INSERT INTO "record" VALUES(1,8,'2016-09-04');
INSERT INTO "record" VALUES(2,8,'2016-09-04');
INSERT INTO "record" VALUES(3,6,'2016-09-04');
INSERT INTO "record" VALUES(9,56,'2016-09-04');
INSERT INTO "record" VALUES(10,126.3,'2016-09-04');
INSERT INTO "record" VALUES(11,34.8,'2016-09-04');
INSERT INTO "record" VALUES(0,6,'2016-10-01');
INSERT INTO "record" VALUES(4,2,'2016-10-01');
INSERT INTO "record" VALUES(1,8,'2016-10-01');
INSERT INTO "record" VALUES(2,8,'2016-10-01');
INSERT INTO "record" VALUES(3,6,'2016-10-01');
INSERT INTO "record" VALUES(1,10.0,'2016-10-02');
COMMIT;
