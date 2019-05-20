# WebStorm运行React Native配置
以前开发react native项目总是需要打开WebStorm编写代码,Xcode跑项目.显得有点多余.
今天教大家如何直接使用WebStorm这个IDE直接完成编码+运行项目工作.这样就可以不用打开Xcode了.
<!--more-->

1. 首先点击WebStorm右上方的下拉箭头弹出的Edit Configurations....
![](http://images2015.cnblogs.com/blog/781239/201611/781239-20161128160647677-1169444031.png)

2. 然后会进入一个配置页面.点击左上方的+.在弹出的列表中选中npm.如图.
![](http://images2015.cnblogs.com/blog/781239/201611/781239-20161128161754427-263136537.png)
3. 在右边的配置框中,先选择Command为help.接着点击下方的+号.再点击Run External tool.
![](http://images2015.cnblogs.com/blog/781239/201611/781239-20161128162133318-650240332.png)
4. 在弹出框中选择+号.
![](http://images2015.cnblogs.com/blog/781239/201611/781239-20161128162603506-799022795.png)
5. 在弹出的配置框中,填写相应信息.

     Name为该按钮的名字

    Program为react Native的路径,终端命令:which react-native  一般都是   /usr/local/bin/react-native

    Parameters填 run-ios

    working directory该输入框中,先点击右边的insert macro,选择ProjectFileDir.
![](http://images2015.cnblogs.com/blog/781239/201611/781239-20161128163212068-408082589.png)
![](http://images2015.cnblogs.com/blog/781239/201611/781239-20161128163212068-408082589.png)

6. 点击OK.接下来点击Apply回到主界面.可以看见右上方的按钮.点击即可运行项目了.
![](http://images2015.cnblogs.com/blog/781239/201611/781239-20161128163940021-657695145.png)
 ![](http://images2015.cnblogs.com/blog/781239/201611/781239-20161128164029662-111990302.png)
有时,需要更换不同的机型看看运行效果,这时,需要先切换至Terminal.然后敲入相应命令:
如:react-native run-ios --simulator "iPhone 5"
![](http://images2015.cnblogs.com/blog/781239/201611/781239-20161129143700740-1124830780.png)

