/* jshint browser: true */

var poolData = {
    UserPoolId : 'YOUR_ID',
    ClientId : 'YOUR_ID'
};

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

