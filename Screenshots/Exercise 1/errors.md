# Exercise 1

## Errors

### Step 1: Create a test project to verify setup
running `npx react-native init EnvironmentTest` did not work.

![init command deprecated](step1a.png "Step 1 Error")

had to switch to the reccomended command: `npx @react-native-community/cli init`

![successful build](step1b.png "Step 1 working")

![cd into folder](step1c.png "CD into folder")

### Step 2: Run the project

For Andriod: `npx react-native run-android`
For IOS: `npx react-native run-ios` (you need macOS for this)

unfornately running this command alone did not show results

![command did nothing](step2.png "Nothing happens")
![no result on andriod virtual device](step2a.png "nothing on phone")

In order for me to successfully run the program I had to run `npx react-native start` on a separate terminal

![npx react-native start running metro on 8081](step2b.png "running metro")

then afterwards I have to run `npx react-native run-android`

![starts configuring](step2c.png "Starts configuring")

### Step 3: Verify app loads successfully

![it works](step3.png "works")

#### Additional Errors

!["Many different erros"](step3a.png "many errors")

##### Error 1 

> \> Task :react-native-safe-area-context:processDebugManifest
> package="com.th3rdwave.safeareacontext" found in source AndroidManifest.xml: /home/n01618379/Github/EnvironmentTest/node_modules/react-native-safe-area-context/android/src/main/AndroidManifest.xml.
> Setting the namespace via the package attribute in the source AndroidManifest.xml is no longer supported, and the value is ignored.
> Recommendation: remove package="com.th3rdwave.safeareacontext" from the source AndroidManifest.xml: /home/n01618379/Github/EnvironmentTest/node_modules/react-native-safe-area-context/android/src/main/AndroidManifest.xml.


##### Error 2
> \> Task :app:compileDebugKotlin
> w: file:///home/n01618379/Github/EnvironmentTest/android/app/src/main/java/com/environmenttest/MainApplication.kt:8:8 'class ReactNativeHost : Any' is deprecated. Deprecated in Java.
> w: file:///home/n01618379/Github/EnvironmentTest/android/app/src/main/java/com/environmenttest/MainApplication.kt:15:16 This declaration overrides a deprecated member but is not marked as deprecated itself. Add the '@Deprecated' annotation or suppress the diagnostic.
> w: file:///home/n01618379/Github/EnvironmentTest/android/app/src/main/java/com/environmenttest/MainApplication.kt:15:33 'class ReactNativeHost : Any' is deprecated. Deprecated in Java.

##### Error 3 

> \> Task :app:compileDebugKotlin
> w: file:///home/n01618379/Github/EnvironmentTest/android/app/src/main/java/com/environmenttest/MainApplication.kt:8:8 'class ReactNativeHost : Any' is deprecated. Deprecated in Java.
> w: file:///home/n01618379/Github/EnvironmentTest/android/app/src/main/java/com/environmenttest/MainApplication.kt:15:16 This declaration overrides a deprecated member but is not marked as deprecated itself. Add the '@Deprecated' annotation or suppress the diagnostic.
> w: file:///home/n01618379/Github/EnvironmentTest/android/app/src/main/java/com/environmenttest/MainApplication.kt:15:33 'class ReactNativeHost : Any' is deprecated. Deprecated in Java.

##### Error logs

![Bunch of warnings on deprecated syntax](step3b.png "Deprecated syntax")

