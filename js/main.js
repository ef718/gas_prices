var canvasW = 800;
var canvasH = 300;

// Create the SVG image...

var svg = d3.select('#graph')
  .append('svg')
  .attr('width', canvasW)
  .attr('height', canvasH)


function redrawGraph() {

  // Redraw the graph image...
  var data = getRandomDataset();

  var scaleY = d3.scale.linear()
    .range([0, canvasH])
    .domain([0, d3.max(data)]);

  var bars = svg.selectAll('rect').data(data);

  bars
    .enter()
    .append('rect')
    .attr('y', canvasH)
    .attr('height', 0);

  // "d" and "i" are "data" and "index"
  bars
    .transition()
    .attr('x', function(d, i) { return i* (canvasW / data.length) })
    .attr('y', function(d) { return canvasH - scaleY(d); })
    .attr('width', 30)
    .attr('height', function(d) { return scaleY(d); })
    .attr('fill', function(d) { return 'rgb(0,0,'+ d*10 +')'; });

  bars
    .exit()
    .transition()
    .attr('height', 0)
    .remove();
}
