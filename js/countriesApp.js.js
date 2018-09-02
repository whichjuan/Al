var app5 = angular.module('app5', []);

app5.controller('countryListCtrl', function($scope) {

  $scope.countries= [
    {country:'Argentina', capital:'Buenos Aires', image: 'images/country/Argentina.png'},
    {country:'Bolivia', capital:'Sucre and La Paz', image: 'images/country/Bolivia.png'},
    {country:'Brazil', capital:'Brasília', image: 'images/country/Brazil.png'},
    {country:'Chile', capital:'Santiago', image: 'images/country/Chile.png'},
    {country:'Colombia', capital:'Bogotá', image: 'images/country/Colombia.png'},
    {country:'Costa Rica', capital:'San José', image: 'images/country/CostaRica.png'},
    {country:'Cuba', capital:'Havana', image: 'images/country/Cuba.png'},
    {country:'Dominica', capital:'Roseau', image: 'images/country/Dominica.png'},
    {country:'Dominican Republic', capital:'Santo Domingo', image: 'images/country/DominicanRepublic.png'},
    {country:'Ecuador', capital:'Quito', image: 'images/country/Ecuador.png'},
    {country:'El Salvador', capital:'San Salvador', image: 'images/country/ElSalvador.png'},
    {country:'French Guiana', capital:'Cayenne', image: 'images/country/FrenchGuiana.png'},
    {country:'Guadeloupe', capital:'Basse-Terre', image: 'images/country/Guadeloupe.png'},
    {country:'Guatemala', capital:'Guatemala City', image: 'images/country/Guatemala.png'},
    {country:'Haiti', capital:'Port-au-Prince', image: 'images/country/Haiti.png'},
    {country:'Honduras', capital:'Tegucigalpa', image: 'images/country/Honduras.png'},
    {country:'Martinique', capital:'Fort-de-France', image: 'images/country/Martinique.png'},
    {country:'Mexico', capital:'Mexico City', image: 'images/country/Mexico.png'},
    {country:'Nicaragua', capital:'Managua', image: 'images/country/Nicaragua.png'},
    {country:'Panama', capital:'Panama City', image: 'images/country/Panama.png'},
    {country:'Paraguay', capital:'Asunción', image: 'images/country/Paraguay.png'},
    {country:'Peru', capital:'Lima', image: 'images/country/Peru.png'},
    {country:'Puerto Rico', capital:'San Juan', image: 'images/country/PuertoRico.png'},
    {country:'Saint Martin', capital:'Marigot', image: 'images/country/SaintMartin.png'},
    {country:'Uruguay', capital:'Montevideo', image: 'images/country/Uruguay.png'},
    {country:'Venezuela', capital:'Caracas', image: 'images/country/Venezuela.png'},
  ];

  /*build empty array for multiple choices*/

  $scope.guesses = [];
  $scope.rightCountry = 0;
  $scope.class = "";

  /* function for getting 4 random numbers to feed into array*/
  $scope.getRandomNumber = function() {

    $scope.randomNumber1 = Math.floor((Math.random() * 26));

    /* rand 2 */
    $scope.randomNumber2 = Math.floor((Math.random() * 26));
      while ($scope.randomNumber2 == $scope.randomNumber1) {
        $scope.randomNumber2 = Math.floor((Math.random() * 26));
      }

    /* rand 3 */
    $scope.randomNumber3 = Math.floor((Math.random() * 26));
      while ($scope.randomNumber3 == $scope.randomNumber1 || $scope.randomNumber3 == $scope.randomNumber2) {
        $scope.randomNumber3 = Math.floor((Math.random() * 26));
      }   

    /* rand 4 */
    $scope.randomNumber4 = Math.floor((Math.random() * 26));
    while ($scope.randomNumber4 == $scope.randomNumber1 || $scope.randomNumber4 == $scope.randomNumber2 || $scope.randomNumber4 == $scope.randomNumber3 ) {
      $scope.randomNumber4 = Math.floor((Math.random() * 26));
    } 

    return [$scope.randomNumber1, $scope.randomNumber2, $scope.randomNumber3, $scope.randomNumber4];

  };

  /*function for pushing 4 randong numbers into guesses array*/
  $scope.pushRandomNumbers = function(arrayOfRandomNumbers) {
    $scope.guesses = arrayOfRandomNumbers;
    console.log($scope.guesses);
  }

/* Function for picking the index number for the right country in the guesses array */
  $scope.pickCountry = function() {
    $scope.rightCountry = Math.floor((Math.random() * 4));
    console.log($scope.rightCountry);
  }

  $scope.checkAnswer = function(choice) {
    if (choice == $scope.rightCountry) {
      $scope.response = "Correct!";
    } else {
      $scope.response = "Nope";
    }
  }

  $scope.clearResponse = function(choice) {
    $scope.response = "";
  }

});