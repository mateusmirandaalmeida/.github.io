angular.module('app', ['ui.bootstrap'])
        .controller('ctrl', function ($scope, $uibModal) {

            function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
                var d = new Date,
                        ano_atual = d.getFullYear(),
                        mes_atual = d.getMonth() + 1,
                        dia_atual = d.getDate(),
                        ano_aniversario = +ano_aniversario,
                        mes_aniversario = +mes_aniversario,
                        dia_aniversario = +dia_aniversario,
                        quantos_anos = ano_atual - ano_aniversario;

                if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
                    quantos_anos--;
                }

                return quantos_anos < 0 ? 0 : quantos_anos;
            }

            function pegaAnoAtual() {
                var date = new Date();
                return date.getFullYear();
            }

            $scope.anoAtual = pegaAnoAtual();
            $scope.idade = "(" + idade(1996, 11, 13) + " anos)";


            $scope.portifolio = {};

            $scope.portifolio.menus = [];
            $scope.portifolio.fotos = [];
            $scope.selectedMenu = 0;

            function populaMenu() {
                $scope.portifolio.menus.push({label: "Curso Fatecie", key: 0});
            }

            $scope.teste = function (key) {
                $scope.selectedMenu = key;
            }

            function populaFotos() {
                $scope.portifolio.fotos.push({name: '01', url: 'https://goo.gl/N2QPN0', keyMenu: 0});
                $scope.portifolio.fotos.push({name: '02', url: 'https://goo.gl/n4Xd7x', keyMenu: 0});
                $scope.portifolio.fotos.push({name: '03', url: 'https://goo.gl/8WlPSR', keyMenu: 0});
                $scope.portifolio.fotos.push({name: '04', url: 'https://goo.gl/ehETdU', keyMenu: 0});
                $scope.portifolio.fotos.push({name: '05', url: 'https://goo.gl/6RSqka', keyMenu: 0});
                $scope.portifolio.fotos.push({name: '06', url: 'https://goo.gl/IfSoxW', keyMenu: 0});
                $scope.portifolio.fotos.push({name: '07', url: 'https://goo.gl/88PD6E', keyMenu: 0});
                $scope.portifolio.fotos.push({name: '08', url: 'https://goo.gl/Tehlli', keyMenu: 0});
                $scope.portifolio.fotos.push({name: '09', url: 'https://goo.gl/APO63K', keyMenu: 0});
            }


            $scope.openModal = function (urlImagem) {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    template: '<div style="position: absolute;width: 100%;padding: 5px;" ng-click="fechar()"><label style="    color: #fff;float: right;cursor: pointer;padding: 5px;width: 30px;background-color: #ffd42d;border-radius: 50px;text-align: center;">X</label></div><img src="{{foto}}" style="width: 100%;height: 100%;" />',
                    controller: 'ModalInstanceCtrl',
                    size: 'md',
                    resolve: {
                        foto: function () {
                            return urlImagem;
                        }
                    }
                });

            }


            populaMenu();
            populaFotos()

        }).controller('ModalInstanceCtrl', function ($scope, foto, $uibModalInstance){
             $scope.foto = foto;
             
             $scope.fechar = function (){
                 $uibModalInstance.close();
             }
        });
 