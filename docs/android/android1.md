# Android NDK初识
Android NDK是Android软件开发包(SDK)的相关工具集，用来扩展Android SDK的功能，从而使开发人员能够使用机器代码生成的编程语言(如C、C++和汇编语言)实现一些对代码性能要求较高的模块，并将这些模块嵌入到Android应用程序中使用。

<!--more-->

## 什么是Android NDK？

Android NDK是Android软件开发包(SDK)的相关工具集，用来扩展Android SDK的功能，从而使开发人员能够使用机器代码生成的编程语言(如C、C++和汇编语言)实现一些对代码性能要求较高的模块，并将这些模块嵌入到Android应用程序中使用。

NDK 不适用于大多数初学的 Android 编程者，对许多类型的 Android 应用没什么价值。 因为它不可避免地会增加开发过程的复杂性，所以通常不值得使用。 但如果您需要执行以下操作，它可能很有用：

- 在平台之间移植其应用。
- 重复使用现有库，或者提供其自己的库供重复使用。
- 在某些情况下提高性能，特别是像游戏这种计算密集型应用。

## Android NDK提供的组件

Android NDK不是一个单独的工具，他是一个包含API、交叉编译器、链接程序、调试器、构建工具、文档和示例应用程序的综合工具集。以下是Android NDK的一些主要组件：

- ARM、x86和MIPS交叉编译器
- 构建系统
- Java原生接口头文件(jni)
- C库
- Math库
- POSIX线程
- 最小的C++库
- ZLib压缩库
- 动态链接库
- Android日志库
- Android像素缓冲区库
- Android原生应用APIs
- OpenGL ES 3D图形库
- OpenSL ES原生音频库
- OpenMAX AL最小支持

## Android NDK的结构

Android NDK组件都被安装在NDK的根目录下，下面介绍一些重要的文件和子目录。

- ndk-build：ndk-build 脚本用于在 NDK 中心启动构建脚本，这些脚本：
  + 自动探测您的开发系统和应用项目文件以确定要构建的内容。
  + 生成二进制文件。
  + 生成二进制文件。
- ndk-gdb：该shell脚本允许用GUN调试器调试原生组件。
- ndk-stack：该shell脚本可以帮助分析原生组件崩溃时的堆栈追踪。
- build：该目录包含了Android NDK构建系统的所有模块。
- platforms：该目录包含了支持不同Android目标版本的头文件和库文件。Android NDK构建系统会根据具体的Android版本自动引用这些文档。
- sources：该目录包含了可供开发人员导入到现有的Android NDK项目的一些共享模块。
- toolchains：该目录包含目前Android NDK支持的不同目标机体系结构的交叉编译器。Android NDK目前支持ARM、X86和MIPS机体系结构。Android NDK构建系统根据选定的体系结构使用不同的交叉编译器。

## Android NDK的开发流程

1. 在java中声明Native方法

   ```java
   public native String hello();
   ```

2. 在jni目录中实现原生方法

   1. 首先创建jni目录。

      ![](https://ws2.sinaimg.cn/large/006tNc79ly1fn29zk3bg3j316a0veqfb.jpg)

   2. 在jni目录中创建c/c++文件，并实现对应的方法。

      ```c++
      #include <jni.h>
      #include <stdio.h>
      #include <stdlib.h>

      extern "C"
      JNIEXPORT jstring JNICALL
      Java_cn_com_codeteenager_ndkone_MainActivity_hello(JNIEnv *env, jobject obj) {

       return env->NewStringUTF("Hello World");
      }
      ```

   3. 添加Android.mk文件。

      ```mk
      LOCAL_PATH := $(call my-dir)
      include $(CLEAR_VARS)
      LOCAL_MODULE := helloworld
      LOCAL_SRC_FILES := HelloWorld.cpp
      LOCAL_C_INCLUDES += $(LOCAL_PATH)
       #LOCAL_LDLIBS := -llog
      include $(BUILD_SHARED_LIBRARY)
      ```

   4. 添加Application.mk文件。

      ```mk
      # 指定生成哪些cpu架构的库
      APP_ABI := armeabi-v7a
      # 此变量包含目标 Android 平台的名称
      APP_PLATFORM := android-22
      ```

      ​

3. 通过命令行打开jni目录，然后执行ndk-build命令脚本进行编译。编译后的项目结果如图所示。

   ![](https://ws1.sinaimg.cn/large/006tNc79ly1fn29xy8i9fj30eo0p075p.jpg)

   - jni：该目录包含原生组件的源代码以及描述原生组件构建方法的Android.mk构建文件。
   - libs：在Android NDK构建系统的构建过程中创建该目录。他包含指定的目标机体系结构的独立子目录，在打包过程中该目录被包含在APK文件中。
   - obj：这是一个中间目录，编译源代码后所产生的目标文件都保存在该目录下。

## Android NDK构建系统

Android NDK的构建系统是基于GUN Make的。该构建系统的主要目的是使开发人员能够用很短的构建文档来描述原生的Android应用程序。



## Android NDK的其他两种编译方式

上述Android NDK的开发流程中通过配置Android.mk来编译是其中的一种方式，还有两种方式。

### 通过配置Android Studio中build.gradle来编译

这种方式简化了编写Android.mk文件，跟上述流程一样，只是不需要编写Android.mk和Application.mk，但是需要添加两样配置。

- 在项目的gradle.properties中，添加android.useDeprecatedNdk = true。

- 在主Module的build.gradle的defaultConfig里添加

  ```gradle
  ndk{
       	moduleName 'hello'
        abiFilter 'armeabi-v7a'
     	}
  ```

注意：这种方式无法再Android Studio3.0以上使用，只能在3.0以下使用，3.0及以上采用cmake来编译生成so文件。

### 通过Android Studio的cmake插件编译

在Android Studio2.2及以上版本中，可以使用cmake插件来编译c库，这也是最新的ndk开发方式。首先你需要在SDK Tools中下载CMake和LLDB这两个组件，当然ndk也是必须的。

- CMake：一款外部构建工具，可与Gradle搭配使用来构建原生库。如果您想用ndk-build，则不需要此组件。
- LLDB：一种调试程序，Android Studio使用它来调试原生代码。

当你安装好上述两个组件后，你可以使用Android Studio创建支持C/C++的新项目。步骤如下：

1. 在向导的 **Configure your new project** 部分，选中 **Include C++ Support** 复选框。

2. 点击 **Next**。

3. 正常填写所有其他字段并完成向导接下来的几个部分。

4. 在向导的 **Customize C++ Support** 部分，您可以使用下列选项自定义项目：

   - **C++ Standard**：使用下拉列表选择您希望使用哪种 C++ 标准。选择 **Toolchain Default** 会使用默认的 CMake 设置。
   - **Exceptions Support**：如果您希望启用对 C++ 异常处理的支持，请选中此复选框。如果启用此复选框，Android Studio 会将 `-fexceptions` 标志添加到模块级 `build.gradle` 文件的 `cppFlags` 中，Gradle 会将其传递到 CMake。
   - **Runtime Type Information Support**：如果您希望支持 RTTI，请选中此复选框。如果启用此复选框，Android Studio 会将 `-frtti` 标志添加到模块级 `build.gradle` 文件的 `cppFlags` 中，Gradle 会将其传递到 CMake。

5. 点击 **Finish**，创建成功，项目结构如下图所示。

   ![](https://ws1.sinaimg.cn/large/006tNc79ly1fn2ew9mqh3j30je0g475j.jpg)

   - cpp文件夹用于存放C/C++文件。
   - 在External Build Files中，CMakeLists.txt是构建原生库的CMake脚本。

当你创建完成项目后点击Android Studio中Build->Make Project，系统会帮你构建完成后，你就可以在相对应Module下的build->intermediates->cmake下找到so库。
