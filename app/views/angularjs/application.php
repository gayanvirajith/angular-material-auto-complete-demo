<!DOCTYPE html>
<html lang="en" ng-app="people">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>People</title>

  <!-- build:css(assets/) /styles.css -->
  <link href="/css/screen.css" rel="stylesheet">
  <!-- endbuild -->

  <link rel="stylesheet" href="/vendor/angular-material/angular-material.min.css" />

  <!-- build:js(assets/) /vendors.js -->
  <script src="/vendor/jquery/dist/jquery.js"></script>
  <script src="/vendor/angular/angular.js"></script>
  <script src="/vendor/underscore/underscore.js"></script>
  <script src="/vendor/angular-underscore-module/angular-underscore-module.js"></script>
  <script src="/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
  <script src="vendor/angular-animate/angular-animate.js"></script>
  <script src="vendor/angular-aria/angular-aria.js"></script>
  <script src="vendor/angular-material/angular-material.js"></script>
  <!-- endbuild -->

  <!-- build:js /angularapp.js -->
  <script src="/angularapp/app.js"></script>
  <script src="/angularapp/search-service.js"></script>
  <script src="/angularapp/config.js"></script>
  <script src="/angularapp/routes.js"></script>

  <script src="/angularapp/modules/example/example.module.js"></script>
  <script src="/angularapp/modules/example/example.ctrl.js"></script>
  <script src="/angularapp/modules/example/example.srv.js"></script>
  <!-- endbuild -->
</head>
<body ng-controller="AppCtrl" layout="row" >


<div layout="column" tabindex="-1" role="main" flex="">
  <md-toolbar class="md-default-theme">
    <div class="md-toolbar-tools"  tabindex="0">
      <h1>Angular material auto complete with laravel backend</h1>
    </div>
  </md-toolbar>
  <md-content md-scroll-y="" flex="" class="md-default-theme
  reveal-animation">
    <div layout="column">
      <p>Example</p>
    </div>
    <div layout="row"  layout-align="center center">
      <div flex="1"></div>
      <div flex="1">
        <div ng-app="inputBasicDemo" ng-controller="DemoCtrl as ctrl" >
          <md-autocomplete
              md-selected-item="ctrl.selectedItem"
              md-search-text="ctrl.searchText"
              md-items="item in ctrl.querySearch(ctrl.searchText)"
              md-item-text="item.display"
              placeholder="Search person by name, location">
            <span md-highlight-text="ctrl.searchText">{{item.display}}</span>
          </md-autocomplete>
        </div>
      </div>
      <div flex="1"></div>
    </div>
  </md-content>
</div>


<!-- process:template
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', '<%= ga.uid %>', '<%= ga.url %>');
  ga('send', 'pageview');
</script>
/process -->

</body>
</html>
