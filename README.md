Setting up WebdriverIO with mocha/chai/selenium-standalone and jenkins.


To use this package

``npm install``

Create a sample test script in the tests repository

``npm test``

npm test will boot up selenium-standalone server and run the test


To boot up jenkins, install the jenkins.war file, (Java has to be installed)
run ``java -jar jenkins.war --httpPort=5555``

Jenkins SETUP

Add new project
Under general>advanced select custom workspace
Select your directory XXXXXXXX\node_modules\.bin

Add Parameters
String Parameter
Name : baseURL

Add build step
``npm install
npm test -- --baseURL="$baseURL"``

add post build step 
1.
``cd directory

IF exist directory/Allure_Reports (echo Folder Allure_Reports already exists) ELSE (mkdir Allure_Reports)``

2. Create allure reports directory
``cd directory/Allure_Reports

cp -R directory/webdriverioFramework/reports directory/Allure_Reports/%BUILD_NUMBER%``

3.
``allure generate directory/webdriverioFramework/reports/allure-results --clean``


4. Publish allure reports through html reports
Publish HTML reports
directory/webdriverioFramework/node_modules/.bin/allure-report
index.html
HTML report
