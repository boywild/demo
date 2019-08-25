## rpm

#### 查看已经挂在的光盘
```
df -h
```
netstat -tlun 查看端口占用情况

### 挂载CD
1.方式1，使用虚拟机连接的cd，在光盘设置你开启使用iso镜像文件
挂载`cd`到`/mnt/cdrom`目录下
```
mkdir /mnt/cdrom
mound /dev/sr0 /mnt/cdrom
```
所有`rpm`包都在`/mnt/cdrom/Package/`目录下

1.方法2，将iso包上传到服务器中手动挂载
CentOS-6.10-x86_64-bin-DVD1.iso CentOS-6.10-x86_64-bin-DVD2.iso上传到/mnt中
创建文件夹/mnt/cdrom1 /mnt/cdrom2分别挂在2个iso文件
分别执行命令
mount -o loop -t iso9660 CentOS-6.10-x86_64-bin-DVD1.iso /mnt/cdrom1
mount -o loop -t iso9660 CentOS-6.10-x86_64-bin-DVD2.iso /mnt/cdrom2



**注意**安装过的`rpm`包只用输入包名，没有安装果的`rpm`包必须输入包全名

#### 安装
```
rpm -ivh httpd-
```

* `-i install`安装
* `-v verbose`显示详细信息
* `-h hash`显示进度
* `--nodeps`不检测依赖性

以安装apache为例子，依次安装
```
httpd-2.4.6-88.el7.centos.x86_64.rpm
httpd-devel-2.4.6-88.el7.centos.x86_64.rpm
httpd-manual-2.4.6-88.el7.centos.noarch.rpm
httpd-tools-2.4.6-88.el7.centos.x86_64.rpm
```

**注意**
1. 若出现类似报错`libdb-devel(x86-64) is needed by apr-util-devel-1.5.2-6.el7.x86_64`表示安装当前`cpm`包缺少该依赖，安装当前所缺依赖即可
2. 若出现库文件依赖例如：`libaprutil-1.so.0()(64bit) is needed by apr-util-devel-1.5.2-6.el7.x86_64`则需要去网站(`http://rpmfind.net`)查询该库文件包含在哪个`rpm`包中，并安装对于的`rpm`包

#### 更新
```
rpm -Uvh 包全名 
```

如果包全名是没有安装的`rpm`包，则更新命令和安装命令效果一样

#### 卸载
```
rpm -e 包名
```

* `-e` 卸载(erase)
* `--nodeps`不检查依赖性


#### rpm查询
```
rpm -q
```

* `-q query`查询
* `-qa all` all查询所有安装rpm包
* `-qi infomation` 查询软件信息
* `-qp package` 查询未安装包信息
* `-ql list` 列表
* `-qf file` 查询文件所属哪个rpm包
* `-qR Require` 查询rpm包需要依赖哪些包

**小技巧** `|grep httpd`


#### rpm校验
```
rpm -V
```

* `-V verify`验证
**核验结果**

* `S size` 文件大小是否改变
* `M mime` 文件类型或者文件权限rwx是否改变
* `5 mdd5` 文件MD5校验是否改变，文件类容是否改变
* `D device` 设备主从代码是否改变
* `L` 文件路径是否改变
* `U` 文件属性(所有者)是否改变
* `G group` 文件属性组是否改变
* `T` 文件修改时间是否改变

* `c config file`配置文件
* `d documentation`文档
* `g ghost file`鬼文件，很少见，就是该文件不应该被包含在该rpm包中
* `L Licese file`授权文件
* `r read me`描述文件

#### rpm包中文件提取
```
rpm2cpio 包全名 | cpio -idv .文件绝对路径
```
* `-rpm2cpio`将`rpm`包转换为`cpio`格式命令
* `-cpio`是一个标准工具，它用于创建软件档案文件和从档案文件中提取文件


### rpm包默认安装路径

* `/etc/`配置文件安装目录
* `/usr/bin/`可执行命令安装目录
* `/usr/lib/`程序所使用函数库保存位置
* `/usr/share/doc/`基本软件使用手册保存位置
* `/usr/share/man/`帮助文件保存位置

rpm包安装的服务可以使用系统服务管理命令来管理，例如rpm包安装的apache的启动方法是
/etc/rc.d/init.d/httpd start(linux标准启动方法)
service httpd start

## 搭建本地yum源
vim /etc/yum.repos.d/CentOS-Base.repo

```
[c7-media]
name=CentOS-$releasever - Media
baseurl=file:///media/CentOS/
        file:///media/cdrom/
        file:///media/cdrecorder/
gpgcheck=1
enabled=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
```

```
[c7-media]
name=CentOS-$releasever - Media
baseurl=file:///mnt/cdrom/
        file:///media/cdrom/
        file:///media/cdrecorder/
gpgcheck=1
enabled=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
```

#### yum命令

yum list

yum search

yum -y install
-y yes

yum -y update

yum -y remove


#### yum组管理命令

yum grouplist 
yum groupinstall 软件组名(只能是英文)
yum groupremove 软件组名(只能是英文)

#### 源码安装

源码包安装的服务不能被服务管理命令管理，因为没有安装到牧人路径中，所有只能用绝对路径进行服务管理，如
/usr/local/apache2/bin/apachectl start

### 安装apache
httpd2.2.9.tar.gz
目录中存在configure文件，基本上每个源码包都会有这个文件，./configure --help用于查看当前源码包支持的安装配置项
./configure命令用于软件配置与检查
* 定义需要的功能选项
* 检测系统环境是否符合安装要求
* 把定义好的功能选项和检测系统环境的信息都写入Makefile文件，用于后续的编辑

目录中存在INSTALL文件，基本上每个源码包都会有这个文件
vim INSTALL 会看到安装指引和启动说明等信息



service httpd stop 停止之前使用rpm方式安装的apache服务
启动使用源码包安装的apache服务  /usr/local/apache2/bin/apachectl start

报错这个不要紧
```
httpd: Could not reliably determine the server's fully qualified domain name, using localhost.localdomain for ServerName

```

从本机访问虚拟机http://192.168.2.114/
如果访问不通请检查防火墙是否开启，若开启，关闭防火墙

查看防火墙状态
firewall-cmd --state

停止firewall
systemctl stop firewalld.service

**注意**
1. make之后如果报错，报错之后可以执行make clean清除编译后的缓存/临时文件文件，清除整个安装过程，就跟没有安装一样
2. make install之后如果报错，需要执行make clean并且删除--prefix指定的安装目录


#### 脚本安装

https://lnmp.org/
下载lnmp1.6-full.tar.gz按照文档执行安装命令