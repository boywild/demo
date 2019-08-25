# LNMP(Linux+nginx+mysql+php)环境搭建
所有的`wget`命令默认在`/root`目录下进行

## 一、虚拟机安装centos7
虚拟机使用`virtualbox`或者`VMware`
执行`yum install net-tools.x86_64`命令增加`ifconfig`命令
执行`yum install vim*`命令增加`vim`命令


新安装的`centos7`需要开启网卡，`vi /etc/sysconfig/network-scripts/ifcfg-enp2s0`
修改`ONBOOT=yes`，若需要固定`ip`，修改`BOOTPROTO=dhcp`并增加配置如下

```
IPADDR=192.168.1.150
NETMASK=255.255.255.0
NM_CONTROLLED=no

```



## 二、安装PHP

### 1.下载PHP
* 执行`yum install wget`命令增加`wget`命令
* 运行`wget https://www.php.net/distributions/php-7.3.8.tar.gz`下载php到当前所处目录，默认所处目录`~ /root`
* 解压`tar -zxvf php-7.3.8.tar.gz`

### 2.安装底层编译库
* `yum install gcc gcc++ libxml2-devel`
* 进入目录`php-7.3.8` 
* 执行配置命令`./configure --prefix=/usr/local/php@7.3.8 --enable-fpm`

**说明** `--prefix`指明`PHP`安装目录，`--enable-fpm`开启`PHP fpm`

### 3.编译
执行命令`make`进行编译

### 4.安装
编译成功后执行命令`make install`进行安装

### 5.测试
在`root`目录下新建一个文件`vim test.php`，内容输出`echo 'Hello PHP'`;
执行命令进行测试`/usr/local/php@7.3.8/bin/php test.php`
输出`Hello PHP`，即`php`安装成功

## 三、安装Msql

1. yum/rpm安装
2. 常规方式编译安装
3. 采用cmake方式编译安装
4. 二进制方式免编译安装

### 1.下载mysql
`wget https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.17.tar.gz`

### 2.安装编译mysql使用到的底层工具
```
yum install cmake gcc-c++ ncurses-devel perl-Data-Dumper bison-devel boost boost-doc boost-devel
```

### 3.安装cmake3.0(mysql5.7要求cmake2.9以上。cmake3.1要求gcc g++4.8以上。所以选自3.0)
`cmake`跨平台安装工具 新版`mysql`使用`cmake`进行安装
* 移除低版本`yum remove cmake -y`
* 下载`wget https://cmake.org/files/v3.0/cmake-3.0.0.tar.gz`
* `tar -zxvf cmake-3.0.0.tar.gz && cd cmake-3.0.0/`
* 依次顺序执行`./bootstrap`、`gmake`、`gmake install`
* 新建软连接`ln -s /usr/local/bin/cmake /usr/bin/`
* 终端查看版本`cmake --version`

### 3.创建boost库
* 创建`boost`目录`mkdir -p /usr/local/boost`
* 下载`boost_1_59_0``wget https://nchc.dl.sourceforge.net/project/boost/boost/1.59.0/boost_1_59_0.tar.gz`
* 解压到`boost`目录

### 4.编译
```
cmake \
-DCMAKE_INSTALL_PREFIX=/usr/local/mysql@5.7.27 \ （反斜杠意思是换行，指定安装目录）
-DMYSQL_DATADIR=/data/mysql \ （指定数据存储目录）
-DSYSCONFDIR=/etc \ （配置文件目录）
-DMYSQL_USER=root \
-DWITH_MYISAM_STORAGE_ENGINE=1 \
-DWITH_INNOBASE_STORAGE_ENGINE=1 \ （指定编译存储引擎）
-DWITH_ARCHIVE_STORAGE_ENGINE=1 \ （指定编译存储引擎）
-DWITH_MEMORY_STORAGE_ENGINE=1 \ （指定编译存储引擎）
-DWITH_READLINE=1 \
-DMYSQL_UNIX_ADDR=/var/run/mysql/mysql.sock \ （指定套接字路径）
-DMYSQL_TCP_PORT=3306 \
-DENABLED_LOCAL_INFILE=1 \
-DENABLE_DOWNLOADS=1 \
-DWITH_PARTITION_STORAGE_ENGINE=1 \
-DEXTRA_CHARSETS=all \
-DDEFAULT_CHARSET=utf8 \ （指定默认字符集）
-DDEFAULT_COLLATION=utf8_general_ci \ （指定默认编码）
-DWITH_DEBUG=0 \
-DMYSQL_MAINTAINER_MODE=0 \
-DWITH_SSL:STARING=bundled \ （指定编译库）
-DWITH_ZLIB:STRING=bundled \ （指定编译库）
-DDOWNLOAD_BOOST=1 \
-DWITH_BOOST=/usr/local/boost  （指定boost库位置）

```
最终看到 `Build files have been written to: /root/software/mysql-5.7.12`说明安装成功
### 5.安装
`make`、`make install`

## 四、安装Apache
* 下载`wget http://mirror.bit.edu.cn/apache/httpd/httpd-2.4.38.tar.gz`
* 下载`apr`命令`wget https://mirrors.tuna.tsinghua.edu.cn/apache//apr/apr-1.7.0.tar.gz`
* 下载`apr-util`命令`wget http://mirror.bit.edu.cn/apache//apr/apr-util-1.6.1.tar.gz`
* 重命名`mv apr-1.7.0 apr` `mv apr-util-1.6.1.tar.gz apr-util`并移动到`httpd-2.4.38/srclib/`目录下`mv apr apr-util httpd-2.4.38/srclib/`
* 下载`pcre` `wget https://nchc.dl.sourceforge.net/project/pcre/pcre2/10.33/pcre2-10.33.zip`
* `pcre2` 是`zip`包需要安装`zip`解压文件`yum install unzip`并`unzip pcre`
* 进入`pcre`目录编译并安装`pcre``.configure --prefix=/usr/local/pcre`、`make`、`make install`
* 进入`httpd`目录并执行命令`./configure --prefix=/usr/local/apache --with-pcre=/usr/local/pcre2-10.33/bin/pcre2-config  --with-included-apr`、
`make`、`make install`

**注意**
1. 若报错`expat.h: No such file or directory`，安装`yum install -y expat-devel*`。
2. 报错`fatal error: pcre.h: No such file or directory`安装`yum install pcre-devel`


## 五、安装nginx

## 六、配置PHP-FPM

## 七、配置nginx