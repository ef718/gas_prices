var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var parseDate = d3.time.format("%Y%m%d").parse;

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.price); });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



// US gas prices
d3.json("http://api.eia.gov/series/?api_key=5BDF29D557600AA90937165DE3D697D7&series_id=PET.EMM_EPMRU_PTE_NUS_DPG.W", function(error, data) {
  var gasPrices = [];

  var response = data["series"]["0"]["data"];
  for (var i = 0; i < response.length; i++) {
    var gasHash = {};
    var date = response[i][0];
    var price = response[i][1];
    gasHash["date"] = date;
    gasHash["price"] = price;

    gasPrices.push(gasHash);
  }

  gasPrices.forEach(function(d) {
    d.date = parseDate(d.date);
    d.price = +d.price;
  });

  x.domain(d3.extent(gasPrices, function(d) { return d.date; }));
  y.domain(d3.extent(gasPrices, function(d) { return d.price; }));


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)");

  svg.selectAll("path").remove();

  svg.append("path")
      .datum(gasPrices)
      .attr("class", "line")
      .attr("d", line);
});

$(function(){
  $('select').on('change', function(){

    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;

    if (valueSelected === "east") {
      // East Coast gas prices
      d3.json("http://api.eia.gov/series/?api_key=5BDF29D557600AA90937165DE3D697D7&series_id=PET.EMM_EPMRU_PTE_R10_DPG.W", function(error, data) {
        var gasPrices = [];

        var response = data["series"]["0"]["data"];
        for (var i = 0; i < response.length; i++) {
          var gasHash = {};
          var date = response[i][0];
          var price = response[i][1];
          gasHash["date"] = date;
          gasHash["price"] = price;

          gasPrices.push(gasHash);
        }

        gasPrices.forEach(function(d) {
          d.date = parseDate(d.date);
          d.price = +d.price;
        });

        svg.append("path")
            .datum(gasPrices)
            .attr("class", "blue-line")
            .attr("d", line);
      });
    } else if (valueSelected === "west") {
      // West Coast gas prices
      d3.json("http://api.eia.gov/series/?api_key=5BDF29D557600AA90937165DE3D697D7&series_id=PET.EMM_EPMRU_PTE_R50_DPG.W", function(error, data) {
        var gasPrices = [];

        var response = data["series"]["0"]["data"];
        for (var i = 0; i < response.length; i++) {
          var gasHash = {};
          var date = response[i][0];
          var price = response[i][1];
          gasHash["date"] = date;
          gasHash["price"] = price;

          gasPrices.push(gasHash);
        }

        gasPrices.forEach(function(d) {
          d.date = parseDate(d.date);
          d.price = +d.price;
        });

        svg.append("path")
            .datum(gasPrices)
            .attr("class", "yellow-line")
            .attr("d", line);
      });
    } else if (valueSelected === "midwest") {
      // Midwest gas prices
      d3.json("http://api.eia.gov/series/?api_key=5BDF29D557600AA90937165DE3D697D7&series_id=PET.EMM_EPMRU_PTE_R20_DPG.W", function(error, data) {
        var gasPrices = [];

        var response = data["series"]["0"]["data"];
        for (var i = 0; i < response.length; i++) {
          var gasHash = {};
          var date = response[i][0];
          var price = response[i][1];
          gasHash["date"] = date;
          gasHash["price"] = price;

          gasPrices.push(gasHash);
        }

        gasPrices.forEach(function(d) {
          d.date = parseDate(d.date);
          d.price = +d.price;
        });

        svg.append("path")
            .datum(gasPrices)
            .attr("class", "green-line")
            .attr("d", line);
      });
    } else if (valueSelected === "gulf") {
      // Gulf Coast gas prices
      d3.json("http://api.eia.gov/series/?api_key=5BDF29D557600AA90937165DE3D697D7&series_id=PET.EMM_EPMRU_PTE_R30_DPG.W", function(error, data) {
        var gasPrices = [];

        var response = data["series"]["0"]["data"];
        for (var i = 0; i < response.length; i++) {
          var gasHash = {};
          var date = response[i][0];
          var price = response[i][1];
          gasHash["date"] = date;
          gasHash["price"] = price;

          gasPrices.push(gasHash);
        }

        gasPrices.forEach(function(d) {
          d.date = parseDate(d.date);
          d.price = +d.price;
        });

        svg.append("path")
            .datum(gasPrices)
            .attr("class", "purple-line")
            .attr("d", line);
      });
    } else if (valueSelected === "rocky") {
      // Rocky Mountain gas prices
      d3.json("http://api.eia.gov/series/?api_key=5BDF29D557600AA90937165DE3D697D7&series_id=PET.EMM_EPMRU_PTE_R40_DPG.W", function(error, data) {
        var gasPrices = [];

        var response = data["series"]["0"]["data"];
        for (var i = 0; i < response.length; i++) {
          var gasHash = {};
          var date = response[i][0];
          var price = response[i][1];
          gasHash["date"] = date;
          gasHash["price"] = price;

          gasPrices.push(gasHash);
        }

        gasPrices.forEach(function(d) {
          d.date = parseDate(d.date);
          d.price = +d.price;
        });

        svg.append("path")
            .datum(gasPrices)
            .attr("class", "violet-line")
            .attr("d", line);
      });
    } else if (valueSelected === "usa") {
      // Clear all lines except for USA
      d3.json("http://api.eia.gov/series/?api_key=5BDF29D557600AA90937165DE3D697D7&series_id=PET.EMM_EPMRU_PTE_NUS_DPG.W", function(error, data) {
        $('svg').remove();

        var svg = d3.select("body").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var gasPrices = [];

        var response = data["series"]["0"]["data"];
        for (var i = 0; i < response.length; i++) {
          var gasHash = {};
          var date = response[i][0];
          var price = response[i][1];
          gasHash["date"] = date;
          gasHash["price"] = price;

          gasPrices.push(gasHash);
        }

        gasPrices.forEach(function(d) {
          d.date = parseDate(d.date);
          d.price = +d.price;
        });

        x.domain(d3.extent(gasPrices, function(d) { return d.date; }));
        y.domain(d3.extent(gasPrices, function(d) { return d.price; }));


        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
          .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Price ($)");

        svg.selectAll("path").remove();

        svg.append("path")
            .datum(gasPrices)
            .attr("class", "line")
            .attr("d", line);
      });
    }


  });

});
