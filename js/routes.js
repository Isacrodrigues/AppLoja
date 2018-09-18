angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('loja', {
    url: '/page1',
    templateUrl: 'templates/loja.html',
    controller: 'lojaCtrl'
  })

  .state('descricaoProduto', {
    url: '/page2',
    templateUrl: 'templates/descricaoProduto.html',
    controller: 'descricaoProdutoCtrl'
  })

  .state('resultadoPesquisa', {
    url: '/page3',
    templateUrl: 'templates/resultadoPesquisa.html',
    controller: 'resultadoPesquisaCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});