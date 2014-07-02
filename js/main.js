var canvasW = 800;
var canvasH = 200;

// Create the SVG image...
var svg = d3.select('#graph')
  .append('svg')
  .attr('width', canvasW)
  .attr('height', canvasH);

//Create the csv data?
 var rows;

d3.csv("./CMWRPOP.csv", function(loadedRows) {
  rows = loadedRows;
  doSomethingWithRows();
});

doSomethingWithRows();

function redrawGraph() {

  // Redraw the graph image...

    //Using this data:
  var data = getRandomDataset();

   //With this scale:
  var scaleY = d3.scale.linear()
    //maybe you want to display 1-100 on a scale...
    .range([0, canvasH])
    //and maybe your set is
    .domain([0, d3.max(data)]);

  //Create visual 'Bars' for a bar graph:
  var bars = svg.selectAll('rect')
  .data(data);

    //Creates bars of 'enter' class, appending them to the dom
  bars.enter()
    .append('rect')
    //set default height to 0...
    .attr('height', 0)
    .attr('width', 100)
    .attr('y', canvasH);

    // updates preexisiting bars
  bars
    .transition()
    .attr('x', function(d, i){ return i * (canvasW / data.length)})
    .attr('y', function(d){ return canvasH - scaleY(d); })
    .attr('width', 200)
    .attr('height', function(d) { return scaleY(d); });
    // .attr('fill', function(d){ return rgb })

    //removes bars of 'exit' group. (put in exit class because they lack data)
  bars.exit()
    .transition()
    .attr('height', 0)
    .attr('y', canvasH)
    .remove();


  console.log(data);

};
