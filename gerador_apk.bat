call cls
call rmdir app/bild /S /Q
call cd android
call gradlew clean
call gradlew assembleRelease
call gradlew bundleRelease
call cd ..