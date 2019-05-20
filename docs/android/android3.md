# Android水波纹效果
本文介绍Android5.0后的水波纹效果如何制作的。

<!--more-->

#### 在Android5.0之后，Material Design大量使用了水波纹Ripple效果，即点击后的波纹效果。有两种方法实现水波纹效果。

* 第一种直接使用android中xml属性设置。代码如下。
```java
android:background="?android:selectableItemBackground"
```
* 第二种通过自定义xml代码实现。代码如下。
```java
<?xml version="1.0" encoding="utf-8"?>
<ripple xmlns:android="http://schemas.android.com/apk/res/android"
    android:color="@color/gray">
    <item>
        <shape android:shape="oval">
            <solid android:color="?attr/colorPrimary" />
        </shape>
    </item>

</ripple>
```