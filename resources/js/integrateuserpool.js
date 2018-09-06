/*Integrating User Pools with Cognito Identity.*/
// Add the User's Id Token to the Cognito credentials login map.
var accessKey = null;
var secretKey = null;
var albumBucketName = 'forimageonly';
var bucketRegion = 'us-east-1';
var photoKey = '';
if (access_token !== null) {

    /*Should specify a region if not defined before*/
    AWS.config.region = 'us-east-1';

    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'YOUR_ID',
        Logins: {
            'YOUR_KEY': id_token
        }
    });
    setTimeout(
        //call refresh method in order to authenticate user and get new temp credentials
        AWS.config.credentials.refresh((error) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Successfully logged!');
                accessKey = AWS.config.credentials.accessKeyId;
                secretKey = AWS.config.credentials.data.Credentials.SecretKey;
                sessionToken = AWS.config.credentials.sessionToken;
                console.log(AWS.config.credentials);
                console.log(accessKey);
                console.log(secretKey);
                console.log(sessionToken);

                if (accessKey !== null) {
                    $('#login').empty();
                    $('#login').append('Welcome!');
                    var dataResult;
                    console.log("accessing with:" + accessKey);
                    console.log("secretKey:" + secretKey);
                    $(document).ready(function() {
                        var apigClient = apigClientFactory.newClient({
                            accessKey: accessKey,
                            secretKey: secretKey,
                            sessionToken: sessionToken,
                        });
                        
                        $("#addphoto").click(function addPhoto() {
                            var s3 = new AWS.S3({
                                apiVersion: '2006-03-01',
                                params: {
                                    Bucket: albumBucketName
                                }
                            });
                            var files = document.getElementById('photoupload').files;
                            if (!files.length) {
                                return alert('Please choose a file to upload first.');
                            }
                            var file = files[0];
                            var fileName = file.name;
                            /*var albumPhotosKey =  "photos/";
                            photoKey = albumPhotosKey + fileName;*/
                            photoKey = fileName;
                            s3.upload({
                              Key: photoKey,
                              Body: file,
                              ACL: 'public-read'
                            }, function(err, data) {
                            if (err) {
                              return alert('There was an error uploading your photo: ', err.message);
                            }
                            alert('Successfully uploaded photo.');
                          });
                        });

                        $("#form1").submit(function(event) {
                            $('#results').append('<b>' + 'Me: ' + $('input[name=message]').val() + '<br/>');
                            var formData = {};

                            var params = {};

                            var body = {
                                "messages": [{
                                    "type": "string",
                                    "unstructured": {
                                        "id": "string",
                                        "text": $('input[name=message]').val(),
                                        "timestamp": "string",
                                        "sessiontoken": accessKey
                                    }
                                }]

                            };
                            $("#input_form").val('');

                            var additionalParams = {

                                message: {
                                    "unstructured": {
                                        "id": "string",
                                        "text": "Hi",
                                        "timestamp": "string"
                                    }
                                }
                            };

                            apigClient.recommendationPost(params, body, additionalParams)
                                .then(function(result) {
                                    console.log(result.data);
                                    dataResult = result.data;
                                    var resultStr = '<b>' + 'chatbot: ' + result.data + '</br>';
                                    var res1 = 'Could you please confirm';
                                    var res2 = 'You are all set.';
                                    if (result.data.indexOf(res1) > -1) {
                                        $('#results').empty();
                                        $('#results').append(resultStr);
                                    } else if (result.data.indexOf(res2) > -1) {
                                        alert(result.data);
                                        $('#results').empty();
                                    } else {
                                        $('#results').append(resultStr);
                                    }
                                }).catch(function(result) {
                                    console.log("error from recommendationPost lambda");
                                    alert("error from recommendationPost lambda");
                                });

                            return false;

                        });

                        $('#form2').submit(function(event) {
                            console.log($('textarea[name=reviews]').val());
                            var rid = $("#mySelect").val()
                            var body2 = {
                                "uid": "string",
                                "rname": $("#mySelect").val(),
                                "stars": $("#score").text(),
                                "text": $('textarea[name=reviews]').val(),
                                "image": {
                                    "bucket": albumBucketName,
                                    "name": photoKey,
                                },
                                "timestamp": "string"
                            };
                            console.log("rid", $("#mySelect").val())
                            console.log('image:', albumBucketName,photoKey);
                            alert("We've received your review.");
                            var additionalParams = {
                                message: {
                                    "unstructured": {
                                        "id": "string",
                                        "text": "Hi",
                                        "timestamp": "string"
                                    }
                                }
                            };
                            var params = {};
                            console.log("ready.");
                            apigClient.reviewPost(params, body2, additionalParams)
                                .then(function(result) {
                                    console.log(result);
                                }).catch(function(result) {
                                    console.log("error from reviewPost lambda");
                                });

                            return false;
                        });

                        $("#order1").click(function(){
                            console.log("amount1:", parseInt($("#input-num1").attr("value")));
                            var body3 = {
                                "rname" : "1",
                                "dishes": {
                                    "dish1": "dish1",
                                    "amount1": parseInt($("#input-num1").attr("value")),
                                    "dish2": "dish2",
                                    "amount2": parseInt($("#input-num2").attr("value")),
                                }
                            };

                            var additionalParams = {
                                message: {
                                    "unstructured": {
                                        "id": "string",
                                        "text": "Hi",
                                        "timestamp": "string"
                                    }
                                }
                            };
                            var params = {};
                            apigClient.orderPost(params, body3, additionalParams)
                                .then(function(result) {
                                    console.log(result);
                                }).catch(function(result) {
                                    console.log("error from orderPost lambda");
                                });

                            return false;                           
                        });

                        $("#order2").click(function(){
                            var body3 = {
                                "rname" : "6",
                                "dishes": {
                                    "dish1": "dish1",
                                    "amount1": parseInt($("#input-num3").attr("value")),
                                    "dish2": "dish2",
                                    "amount2": parseInt($("#input-num4").attr("value")),
                                }
                            }
                            var additionalParams = {
                                message: {
                                    "unstructured": {
                                        "id": "string",
                                        "text": "Hi",
                                        "timestamp": "string"
                                    }
                                }
                            };
                            var params = {};
                            apigClient.orderPost(params, body3, additionalParams)
                                .then(function(result) {
                                    console.log(result);
                                }).catch(function(result) {
                                    console.log("error from orderPost lambda");
                                });

                            return false;                           
                        })

                        $("#order3").click(function(){
                            var body3 = {
                                "rname" : "9",
                                "dishes": {
                                    "dish1": "dish1",
                                    "amount1": parseInt($("#input-num5").attr("value")),
                                    "dish2": "dish2",
                                    "amount2": parseInt($("#input-num6").attr("value")),
                                }
                            }
                            var additionalParams = {
                                message: {
                                    "unstructured": {
                                        "id": "string",
                                        "text": "Hi",
                                        "timestamp": "string"
                                    }
                                }
                            };
                            var params = {};
                            apigClient.orderPost(params, body3, additionalParams)
                                .then(function(result) {
                                    console.log(result);
                                }).catch(function(result) {
                                    console.log("error from orderPost lambda");
                                });

                            return false;                           
                        })

                    });

                } else {
                    console.log("login needed!");
                }

            }
        }), 1000);
}