# Angular-2-Beta-and-test-framework

install node package manager   
#run the "npm install" command in root dir and /client so that package.json can download the necessary dependencies   
#in root dir run "node app.js" and voila! you have a ui framework that is made with angular 2 beta    

#you can write your components inside /client/components and there are 2 test class examples already inside    
#for test framework and coverage, I used jasmine and karma with istanbul      
#you can see the test framework from localhost:9999/unit-tests.html     
#and for coverage instal global istanbul packet for karma->npm install -g istanbul     
#then run the below command inside /client    
#istanbul cover ./node_modules/jasmine-node/bin/jasmine-node components/Test.spec.js --dir ./components/istanbul    
