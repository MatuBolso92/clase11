var app = angular.module('agendaApp', []);
app.controller("agendaCtrl", function($scope) {
    // $scope.tramites = ['Trámite 1', 'Trámite 2', 'Trámite 3', 'Trámite 4'];
    let listaTramites = ["Uno", "Dos", "Tres"];
    $scope.listaTramites = ["Uno", "Dos", "Tres"];
    $scope.tramite;
    $scope.nombreCompleto;
    $scope.edad;
    $scope.fecha;
    $scope.menorEdad = false;
});

app.controller("ctrlEdad", function($scope){
    if (menorEdad < 18){
        menorEdad = true;
    }
});