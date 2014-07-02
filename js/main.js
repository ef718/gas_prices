var canvasW = 800;
var canvasH = 200;

// Create the SVG image...
var svg = d3.select('#graph')
  .append('svg')
  .attr('width', canvasW)
  .attr('height', canvasH);

//Create the csv data?

// firstArray =
// {'1993-01-01': 61176.124,
// '1994-01-01': 61572.173,
// '1995-01-01': 61991.920,
// '1996-01-01': 62371.519,
// '1997-01-01': 62675.478,
// '1998-01-01': 62950.532,
// '1999-01-01': 63242.284,
// '2000-01-01': 64491.431,
// '2001-01-01': 64776.531,
// '2002-01-01': 65018.293,
// '2003-01-01': 65276.954,
// '2004-01-01': 65532.305,
// '2005-01-01': 65751.872,
// '2006-01-01': 66028.555,
// '2007-01-01': 66293.689,
// '2008-01-01': 66523.935,
// '2009-01-01': 66748.437,
// '2010-01-01': 66976.321,
// '2011-01-01': 67146.663,
// '2012-01-01': 67321.425,
// '2013-01-01': 67547.890}
// debugger

// var answers = d3.csv("./CMWRPOP.csv", function(data) {
//         dataset=data
//         });

var rows;

d3.csv("./CMWRPOP.csv", function(loadedRows) {
  rows = loadedRows;
});


function redrawGraph() {

  // Redraw the graph image...

    //Using this data:
  var data = firstArray();
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
