<template>
  <div>
    <div class="world-map" ref="world-map"></div>
    <div v-if="!ready" class="world-map placeholder">
      <div class="text-center loading-text">
        <font-awesome-icon icon="cog" size="4x" class="cog" spin/>
        <div>map is loading...</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import geodata from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default {
  data() {
    return {
      chart: null,
      ready: false
    }
  },
  mounted() {
    let that = this

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create(this.$refs['world-map'], am4maps.MapChart);

    // Set map definition
    chart.geodata = geodata;

    // Set projection
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = "rotateLongLat";
    chart.padding(20, 20, 20, 20);
    chart.deltaLatitude = -20;
    // Center on Pacific
    chart.deltaLongitude = -100;

    // Add zoom control
    chart.zoomControl = new am4maps.ZoomControl();
    let homeButton = new am4core.Button();
    homeButton.events.on("hit", function () {
      chart.goHome();
    });
    homeButton.icon = new am4core.Sprite();
    homeButton.padding(7, 5, 7, 5);
    homeButton.width = 30;
    homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
    homeButton.marginBottom = 10;
    homeButton.parent = chart.zoomControl;
    homeButton.insertBefore(chart.zoomControl.plusButton);

    // chart.exporting.menu = new am4core.ExportMenu();

    // limits vertical rotation
    chart.adapter.add("deltaLatitude", function (delatLatitude) {
      return am4core.math.fitToRange(delatLatitude, -90, 90);
    })

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    let colorSet = new am4core.ColorSet()

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name} {value}";
    // polygonTemplate.tooltipPosition = "fixed"


    polygonTemplate.fill = am4core.color("#47c78a");

    polygonTemplate.adapter.add("fill", function (fill, target) {
      if (target.dataItem.value < 1000 && target.dataItem.value >= 31) {
        return am4core.color("#1cd182");
      } else if (target.dataItem.value < 31 && target.dataItem.value >= 11){
        return am4core.color("#00ffc7")
      } else {
        return am4core.color("#7cffff")
      }
    });

    //data taken from design docs
    polygonTemplate.adapter.add("fillOpacity", function (fill, target) {
      if (target.dataItem.value < 1000 && target.dataItem.value >= 31) {
        return 0.56 + 0.44 * ((target.dataItem.value - 31) / 969)
      } else if (target.dataItem.value < 31 && target.dataItem.value >= 11){
        return 0.46 + 0.54 * ((target.dataItem.value - 11) / 20)
      } else {
        return 0.46 + 0.54 * (target.dataItem.value / 10)
      }
    });

    // Add heat rule
    // polygonSeries.heatRules.push({
    //   "property": "fill",
    //   "target": polygonSeries.mapPolygons.template,
    //   "min": am4core.color("#7cffff"),
    //   "max": am4core.color("#1cd182")
    // });

    var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
    graticuleSeries.fitExtent = false;

    //click item to get info
    polygonTemplate.events.on("hit", function (ev) {
      console.log(ev.target.dataItem.dataContext);
    });

    chart.events.on("ready", function () {
      that.ready = true
    });

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = colorSet.getIndex(1);

    let animation;
    setTimeout(function(){
      animation = chart.animate({property:"deltaLongitude", to:100000}, 20000000);
    }, 3000)

    chart.seriesContainer.events.on("down", function(){
      if(animation){
        animation.stop();
      }
    })

    // Add expectancy data
    polygonSeries.data = [
      {id: "AF", value: 666},
      {id: "AQ", value: 34},
      {id: "AL", value: 45},
      {id: "DZ", value: 3},
      {id: "AO", value: 173},
      {id: "AR", value: 12},
      {id: "AM", value: 65},
      {id: "AU", value: 34},
      {id: "AT", value: 3},
      {id: "AZ", value: 21},
      {id: "BH", value: 6},
      {id: "BD", value: 45},
      {id: "BY", value: 76},
      {id: "BE", value: 27},
      {id: "BJ", value: 1},
      {id: "BT", value: 3},
      {id: "BO", value: 8},
      {id: "BA", value: 34},
      {id: "BW", value: 654},
      {id: "BR", value: 44},
      {id: "BN", value: 78},
      {id: "BG", value: 32},
      {id: "BF", value: 20},
      {id: "BI", value: 344},
      {id: "KH", value: 233},
      {id: "CM", value: 12},
      {id: "CA", value: 11},
      {id: "CV", value: 14},
      {id: "CF", value: 26},
      {id: "TD", value: 54},
      {id: "CL", value: 77},
      {id: "CN", value: 44},
      {id: "CO", value: 988},
      {id: "KM", value: 3},
      {id: "CD", value: 876},
      {id: "CG", value: 78},
      {id: "CR", value: 66},
      {id: "CI", value: 34},
      {id: "HR", value: 23},
      {id: "CU", value: 97},
      {id: "CY", value: 32},
      {id: "CZ", value: 15},
      {id: "DK", value: 465},
      {id: "GL", value: 12},
      {id: "DJ", value: 14},
      {id: "DO", value: 33},
      {id: "EC", value: 12},
      {id: "EG", value: 76},
      {id: "SV", value: 54},
      {id: "GQ", value: 37},
      {id: "ER", value: 62.329},
      {id: "EE", value: 74.335},
      {id: "ET", value: 62.983},
      {id: "FJ", value: 69.626},
      {id: "FI", value: 80.362},
      {id: "FR", value: 81.663},
      {id: "GA", value: 63.115},
      {id: "GF", value: 79.9},
      {id: "GM", value: 58.59},
      {id: "GE", value: 74.162},
      {id: "DE", value: 80.578},
      {id: "GH", value: 60.979},
      {id: "GR", value: 80.593},
      {id: "GT", value: 71.77},
      {id: "GN", value: 55.865},
      {id: "GW", value: 54.054},
      {id: "GY", value: 66.134},
      {id: "HT", value: 62.746},
      {id: "HN", value: 73.503},
      {id: "HK", value: 83.199},
      {id: "HU", value: 74.491},
      {id: "IS", value: 81.96},
      {id: "IN", value: 66.168},
      {id: "ID", value: 70.624},
      {id: "IR", value: 73.736},
      {id: "IQ", value: 69.181},
      {id: "IE", value: 80.531},
      {id: "IL", value: 81.641},
      {id: "IT", value: 82.235},
      {id: "JM", value: 73.338},
      {id: "JP", value: 83.418},
      {id: "JO", value: 73.7},
      {id: "KZ", value: 66.394},
      {id: "KE", value: 61.115},
      {id: "KP", value: 69.701},
      {id: "KR", value: 81.294},
      {id: "KW", value: 74.186},
      {id: "KG", value: 67.37},
      {id: "LA", value: 67.865},
      {id: "LV", value: 72.045},
      {id: "LB", value: 79.716},
      {id: "LS", value: 48.947},
      {id: "LR", value: 60.23},
      {id: "LY", value: 75.13},
      {id: "LT", value: 71.942},
      {id: "LU", value: 80.371},
      {id: "MK", value: 75.041},
      {id: "MG", value: 64.28},
      {id: "MW", value: 54.798},
      {id: "MY", value: 74.836},
      {id: "ML", value: 54.622},
      {id: "MR", value: 61.39},
      {id: "MU", value: 73.453},
      {id: "MX", value: 77.281},
      {id: "MD", value: 68.779},
      {id: "MN", value: 67.286},
      {id: "ME", value: 74.715},
      {id: "MA", value: 70.714},
      {id: "EH", value: 70.714},
      {id: "MZ", value: 49.91},
      {id: "MM", value: 65.009},
      {id: "NA", value: 64.014},
      {id: "NP", value: 67.989},
      {id: "NL", value: 80.906},
      {id: "NZ", value: 80.982},
      {id: "NI", value: 74.515},
      {id: "NE", value: 57.934},
      {id: "NG", value: 52.116},
      {id: "NO", value: 81.367},
      {id: "SJ", value: 81.367},
      {id: "OM", value: 76.287},
      {id: "PK", value: 66.42},
      {id: "PA", value: 77.342},
      {id: "PG", value: 62.288},
      {id: "PY", value: 72.181},
      {id: "PE", value: 74.525},
      {id: "PH", value: 68.538},
      {id: "PL", value: 76.239},
      {id: "PT", value: 79.732},
      {id: "QA", value: 78.231},
      {id: "RO", value: 73.718},
      {id: "RU", value: 67.874},
      {id: "RW", value: 63.563},
      {id: "SA", value: 75.264},
      {id: "SN", value: 63.3},
      {id: "RS", value: 73.934},
      {id: "SL", value: 45.338},
      {id: "SG", value: 82.155},
      {id: "SK", value: 75.272},
      {id: "SI", value: 79.444},
      {id: "SB", value: 67.465},
      {id: "SO", value: 54},
      {id: "ZA", value: 56.271},
      {id: "SS", value: 54.666},
      {id: "ES", value: 81.958},
      {id: "LK", value: 74.116},
      {id: "SD", value: 61.875},
      {id: "SR", value: 70.794},
      {id: "SZ", value: 48.91},
      {id: "SE", value: 81.69},
      {id: "CH", value: 82.471},
      {id: "SY", value: 71},
      {id: "TW", value: 79.45},
      {id: "TJ", value: 67.118},
      {id: "TZ", value: 60.885},
      {id: "TH", value: 74.225},
      {id: "TL", value: 67.033},
      {id: "TG", value: 56.198},
      {id: "TT", value: 69.761},
      {id: "TN", value: 75.632},
      {id: "TR", value: 74.938},
      {id: "TM", value: 65.299},
      {id: "UG", value: 58.668},
      {id: "UA", value: 68.414},
      {id: "AE", value: 76.671},
      {id: "GB", value: 80.396},
      {id: "US", value: 78.797},
      {id: "UY", value: 77.084},
      {id: "UZ", value: 68.117},
      {id: "VE", value: 74.477},
      {id: "PS", value: 73.018},
      {id: "VN", value: 75.793},
      {id: "YE", value: 62.923},
      {id: "ZM", value: 57.037},
      {id: "ZW", value: 58.142}
    ];

    this.chart = chart;
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
</script>

<style lang="sass" scoped>
.world-map
  width: 100%
  height: 500px

.placeholder
  background-color: whitesmoke

.cog
  color: black

.loading-text
  padding-top: 200px
</style>