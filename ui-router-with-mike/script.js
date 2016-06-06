var app = angular.module('app', ['ui.router'], function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/app.tpl.html'
    })
    .state('home.insert-card', {
      url: 'insert-card',
      views: {
        'atm': {
          templateUrl: 'templates/insert-card.tpl.html'
        }
      }
    })
    .state('home.insert-card.enter-pin', {
      url: '/enter-pin',
      views: {
        'atm@home': {
          templateUrl: 'templates/enter-pin.tpl.html'
        }
      }
    })
    .state('home.another-transaction', {
      url: 'another-transaction',
      views: {
        'atm': {
          templateUrl: 'templates/another-transaction.tpl.html'
        }
      }
    })
    .state('home.operation', {
      url: 'operation',
      views: {
        'atm': {
          templateUrl: 'templates/operation.tpl.html'
        }
      }
    })
    .state('home.account', {
      url: ':operation',
      views: {
        'atm': {
          controller: 'AccountController as vm',
          templateUrl: 'templates/account.tpl.html'
        }
      },
      resolve: {
        operation: function($stateParams) {
          return $stateParams.operation;
        }
      }
    })
    .state('home.print-receipt', {
      url: ':operation/:account',
      views: {
        'atm': {
          controller: 'PrintReceiptController as vm',
          templateUrl: 'templates/print-receipt.tpl.html'
        }
      },
      resolve: {
        operation: function($stateParams) {
          return $stateParams.operation;
        },
        account: function($stateParams) {
          return $stateParams.account;
        }
      }
    })
    .state('home.dispense-money', {
      url: ':operation/:account/:printReceipt',
      views: {
        'atm': {
          controller: 'DispenseMoneyController as vm',
          templateUrl: 'templates/dispense-money.tpl.html'
        }
      },
      resolve: {
        operation: function($stateParams) {
          return $stateParams.operation;
        },
        account: function($stateParams) {
          return $stateParams.account;
        },
        printReceipt: function($stateParams) {
          return $stateParams.printReceipt === 'yes' ? true : false;
        }
      }
    });

  $urlRouterProvider.otherwise('/');
});

app.controller('AccountController', function(operation) {
  var vm = this;
  vm.operation = operation;
});

app.controller('PrintReceiptController', function(operation, account) {
  var vm = this;
  vm.operation = operation;
  vm.account = account;
});

app.controller('DispenseMoneyController', function(operation, account, printReceipt, $state) {
  var vm = this;
  vm.operation = operation;
  vm.account = account;
  vm.printReceipt = printReceipt;
  
  var msg = operation === 'deposit' ? 'Please insert cash or check.' : 'Please take your cash.';
  alert(msg);
  if (printReceipt) {
    alert('Please take your receipt.');
  }
  
  $state.go('home.another-transaction');
});