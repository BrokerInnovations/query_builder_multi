(function() {
    'use strict';

    angular
        .module('query')
        .controller('HomeController', HomeController);

    //HomeController.$inject = ['$window', '$state'];

    /* @ngInject */
    function HomeController($scope, $http) {
        var vm = this;
        vm.seperator = ',';
        vm.csv = '';
        vm.result = '';
        vm.addVenue = addVenue;
        vm.addLevel = addLevel;
        vm.addZone = addZone;
        vm.addRow = addRow;
        vm.addZoneSection = addZoneSection;
        vm.addZoneEvent = addZoneEvent;
        vm.addSectionEvent = addSectionEvent;
        vm.addRowEvent = addRowEvent;
        vm.zoneSubmit = zoneSubmit;
        vm.levelSubmit = levelSubmit;
        vm.venueSubmit = venueSubmit;
        vm.rowEventSubmit = rowEventSubmit;
        vm.zoneSectionSubmit = zoneSectionSubmit;
        vm.zoneEventSubmit = zoneEventSubmit;
        vm.sectionEventSubmit = sectionEventSubmit;
        vm.rowSubmit = rowSubmit;
        vm.addConfigVenue = addConfigVenue;
        vm.venueConfigSubmit = venueConfigSubmit;
        vm.venueDisabled = false;
        vm.venueConfigDisabled = false;
        vm.levelDisabled = false;
        vm.rowDisabled = false;
        vm.zoneDisabled = false;
        vm.zoneSectionDisabled = false;
        vm.zones = [];
        vm.venues = [];
        vm.venueConfig = [];
        vm.levels = [];
        vm.rows = [];
        vm.sections = [];
        vm.zoneEvents = [];
        vm.sectionEvents = [];
        vm.rowEvents = [];
        vm.mulit = '';
        vm.multi1 = '';
        //vm.header = true;



        $scope.$watch('homeVm.result', function(){
            //console.log(vm.result);
            var change = vm.result;
            if(change) {
                change.forEach(function(val) {
                    //console.log(val);
                    var row = {};
                    row.row_descr = val['0'];
                    row.row_seq_num = val['1'];
                    vm.rows.push(row);
                });
            }
        });




        function zoneSubmit() {
            vm.zoneDisabled = true;
            console.log(vm.zones);
            $http.post('php/zone.php',vm.zones).then(function(res){
                console.log(res);
            }).catch(function(err) {
                console.error(err);
            });
        }

        function zoneSectionSubmit() {
            vm.zoneSectionDisabled = true;
            console.log(vm.sections);
            $http.post('php/zone_section.php',vm.sections).then(function(res){
                console.log(res.data);
            }).catch(function(err) {
                console.error(err);
            });
        }

        function rowSubmit() {
            vm.rowDisabled = true;
            console.log(vm.rows);
            $http.post('php/row.php',vm.rows).then(function(res){
                console.log(res.data);
            }).catch(function(err) {
                console.error(err);
            });
        }

        function levelSubmit() {
            vm.levelDisabled = true;
            console.log(vm.levels);
            $http.post('php/level.php',vm.levels).then(function(res){
                console.log(res.data);
            }).catch(function(err) {
                console.error(err);
            });
        }

        function venueSubmit() {
            vm.venueDisabled = true;
            console.log(vm.venues);
            $http.post('php/venue.php',vm.venues).then(function(res){
                console.log(res.data);
            }).catch(function(err) {
                console.error(err);
            });
        }

        function venueConfigSubmit() {
            vm.venueConfigDisabled = true;
            console.log(vm.venueConfig);
            $http.post('php/venue_config.php',vm.venueConfig).then(function(res){
                console.log(res.data);
            }).catch(function(err) {
                console.error(err);
            });
        }

        function zoneEventSubmit() {
            console.log(vm.zoneEvents);
        }

        function sectionEventSubmit() {
            console.log(vm.sectionEvents);
        }

        function rowEventSubmit() {
            console.log(vm.rowEvents);
        }

        function addZone() {
            vm.zones.push({
                zone_descr: "",
                venue_config_id: ""
            });
        }

        function addLevel() {
            vm.levels.push({
                level_descr: "",
                venue_config_id: ""
            });
        }

        function addRow() {
            vm.rows.push({
                row_descr: "",
                row_seq_num: "",
                level_id: ""
            });
            if(vm.rowMulti){
                vm.rows.forEach(function(row) {
                    row.level_id = vm.multi1;
                    row.level_id_plus = vm.multi;
                });
            }

        }

        function addZoneSection(){
            vm.sections.push({
                section_desc: "",
                zone_descr: "",
                level_descr: "",
                zone_plus:""
            });
        }

        function addVenue() {
            vm.venueDisabled = false;
            vm.venues.push({
                venue_id: "",
                venue_descr: ""
            });
        }

        function addConfigVenue() {
            vm.venueConfig.push({
                config_descr: "",
                venue_id:""
            });
        }

        function addZoneEvent() {
            vm.zoneEvents.push({
                event_id: "",
                zone_id: "",
                qty_to_broadcast: "",
                zone_base_price: ""
            })
        }

        function addSectionEvent() {
            vm.sectionEvents.push({
                section_id: "",
                event_id: "",
                section_price_offset_pct: "",
                venue_config_id: ""
            })
        }

        function addRowEvent() {
            vm.rowEvents.push({
                row_id: "",
                event_id: "",
                row_price_offset_pct: ""
            })
        }
    }
})();
