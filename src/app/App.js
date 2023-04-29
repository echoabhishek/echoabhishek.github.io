import React from 'react';
import Header from './Header';
import Content from './Content';
import withRoot from '../withRoot';
import '../www/main.css';

const App = () => (
  <div>
    <Header />
    <Content />
    <!-- START GAMOOGA BASE SCRIPT -->
        <script type="text/javascript">
            var _taq = {"id":"806dc637-2e30-4a36-8b50-334c1d99d415","events":[],"identify":[],"property":[], "handlers":[]};
            (function() {
                var ta = document.createElement('script'); ta.type = 'text/javascript'; ta.async = true; ta.id = "__ta";
                ta.src = '//cdn-jp.gsecondscreen.com/static/ta.min.js';
                var fs = document.getElementsByTagName('script')[0]; fs.parentNode.insertBefore(ta, fs);
            })();
        </script>
    <!-- END GAMOOGA BASE SCRIPT -->
  </div>
);

export default withRoot(App);
