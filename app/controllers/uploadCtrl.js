"use strict";


app.controller('uploadCtrl', function($scope, $resource, FBConfig) {

            var Files = $resource('/files/:id', { id: "@id" });

            angular.extend($scope, {

                model: { file: null },

                upload: function(model) {
                    Files.prototype.$save.call(model.file, function(self, headers) {
                        return new Promise ((resolve, reject)=>{
                            $http.post(`${FBConfig.storageBucket}/userMedia.json`)
                            .then((obj)=>{
                                resolve();
                            });
                        });
                        // Handle server response
                    });
                }
            });
});

// app.controller("uploadCtrl", function (userFactory, authFactory, FBConfig, $scope, Upload, $timeout) {

//     $scope.uploadFiles = function(files, errFiles) {
//         $scope.files = files;
//         files.uid = authFactory.getUser();
//         $scope.errFiles = errFiles;
//         angular.forEach(files, function(file) {
//             file.upload = Upload.upload({
//                 url: `${FBConfig.storageBucket}/media.json`,
//                 data: {file: file}
//             });

//             file.upload.then(function (response) {
//                 $timeout(function () {
//                     file.result = response.data;
//                 });
//             }, function (response) {
//                 if (response.status > 0)
//                     $scope.errorMsg = response.status + ': ' + response.data;
//             }, function (evt) {
//                 file.progress = Math.min(100, parseInt(100.0 * 
//                                          evt.loaded / evt.total));
//             });
//         });
//     };


// });