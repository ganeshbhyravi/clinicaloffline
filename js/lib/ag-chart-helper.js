if (typeof aglite == 'undefined') aglite = {};

//Supports single series for line chart
aglite.AgChartHelper = function(type){
	var data = [], _type = type;
	var xSeries = [], ySeries = [], xSeriesToPlot = [], ySeriesToPlot = [];
	function getSeriesPos(x, seriesToPlot) {
		var pos = -1;
		for(var i=0; i<seriesToPlot.length; i++) {
			if (seriesToPlot[i] == x) {
				pos = i;
				break;
			}
		}
		return pos;
	}
	function xTickFormatter(x) {
		return xSeries[getSeriesPos(x, xSeriesToPlot)] || x;
	}
	function yTickFormatter(y) {
		return ySeries[getSeriesPos(y, ySeriesToPlot)] || y;
	}
	function getChartKey() {
		switch (_type){
			case aglite.AgChartHelper.BAR: 
				return "bars";
			case aglite.AgChartHelper.PIE: 
				return "pie";
			default : 			
				return "lines";
		};
	}
	function getLabel(point) {
		if (xSeries[getSeriesPos(point[0], xSeriesToPlot)] != point[0]) return xSeries[getSeriesPos(point[0], xSeriesToPlot)];
		if (ySeries[getSeriesPos(point[1], ySeriesToPlot)] != point[1]) return ySeries[getSeriesPos(point[1], ySeriesToPlot)];
		return point[0];
	}
	function getData() {
		var _d = [];
		for(var i=0; i<data.length; i++) {
			if (options.legend.show) {
				_d.push({data:[data[i]], label:getLabel(data[i])});
			} else {
				_d.push([data[i]]);
			}
		}
		switch (_type){
			case aglite.AgChartHelper.BAR: 
				return _d;
			case aglite.AgChartHelper.PIE: 
				return _d;
			default : 			
				return [data];
		};
	}
	var options = {HtmlText:true, mouse:{}, xaxis:{tickFormatter: xTickFormatter}, 
		yaxis:{tickFormatter: yTickFormatter}, markers: {}, legend:{}, grid:{}};
	return {
		setSeries: function(series) {
			for(var i=0, l=series.length; i<l; i++) {
				var s = series[i];
				xSeries[i] = s[0];
				ySeries[i] = s[1];
				if (isNaN(s[0])) {
					xSeriesToPlot[i] = i;
				} else {
					xSeriesToPlot[i] = s[0];
				}
				if (isNaN(s[1])) {
					ySeriesToPlot[i] = i;
				} else {
					ySeriesToPlot[i] = s[1];
				}
				data.push([xSeriesToPlot[i], ySeriesToPlot[i]]);
			}
			return this;
		},
		isNotHtmlText: function() {
			options.HtmlText = false;
			return this;
		},
		setTitle: function(title) {
			options.title = title;
			return this;
		},
		setSubTitle: function(subtitle) {
			options.subtitle = subtitle;
			return this;
		},
		setFontColor: function(fontColor) {
			options.fontColor = fontColor;
			return this;
		},
		setFontSize: function(fontSize) {
			options.fontSize = fontSize;
			return this;
		},
		setGridOptions: function(gridOptions) {
			options.grid = gridOptions;
			return this;
		},
		enableMouseTrack: function() {
			options.mouse.track = true;
			return this;
		},
		enableMouseTrackAll: function() {
			options.mouse.trackAll = true;
			return this;
		},
		enableRelative: function() {
			options.mouse.relative = true;
			return this;
		},
		setMouseTrackFormatter: function(trackFormatter) {
			options.mouse.trackFormatter = trackFormatter;
			return this;
		},
		showMarkers: function() {
			options.markers.show = true;
			return this;
		},
		setMarkerColor: function(color) {
			options.markers.color = color;
			return this;
		},
		setMarkerPosition: function(position) {
			options.markers.position = position;
			return this;
		},
		setMarkerLabelFormatter: function(labelFormatter) {
			options.markers.labelFormatter = labelFormatter;
			return this;
		},
		hideXAxisLabels: function() {
			options.xaxis.showLabels = false;
			return this;
		},
		showXAxisMinorLabels: function() {
			options.xaxis.showMinorLabels = true;
			return this;
		},
		setXAxisLabelsAngle: function(angle) {
			options.xaxis.labelsAngle = angle;
			return this;
		},
		setXAxisTitle: function(title) {
			options.xaxis.title = title;
			return this;
		},
		setXAxisTitleAngle: function(titleAngle) {
			options.xaxis.titleAngle = titleAngle;
			return this;
		},
		setXAxisTickFormatter: function(tickFormatter) {
			options.xaxis.tickFormatter = tickFormatter;
			return this;
		},
		setXAxisTickDecimals: function(tickDecimals) {
			options.xaxis.tickDecimals = tickDecimals;
			return this;
		},
		setXAxisNoTicks: function(noTicks) {
			options.xaxis.noTicks = noTicks;
			return this;
		},
		setXAxisTimeFormat: function(timeFormat) {
			options.xaxis.timeFormat = timeFormat;
			return this;
		},
		setXAxisAutoScale:function() {
			options.xaxis.autoscale = true;
			return this;
		},
		setXAxisTimeMode:function() {
			options.xaxis.mode = 'time';
			return this;
		},
		setXAxisMin: function(min) {
			options.xaxis.min = min;
			return this;
		},
		setXAxisMax: function(max) {
			options.xaxis.max = max;
			return this;
		},
		setXAxisAutoscaleMargin: function(autoscaleMargin) {
			options.xaxis.autoscaleMargin = autoscaleMargin;
			return this;
		},
		setXAxisTitleAlign: function(titleAlign) {
			options.xaxis.titleAlign = titleAlign;
			return this;
		},
		setXAxisTickDecimals: function(tickDecimals) {
			options.xaxis.tickDecimals = tickDecimals;
			return this;
		},
		
		
		
		hideYAxisLabels: function() {
			options.yaxis.showLabels = false;
			return this;
		},
		showYAxisMinorLabels: function() {
			options.yaxis.showMinorLabels = true;
			return this;
		},
		setYAxisLabelsAngle: function(angle) {
			options.yaxis.labelsAngle = angle;
			return this;
		},
		setYAxisTitle: function(title) {
			options.yaxis.title = title;
			return this;
		},
		setYAxisTitleAngle: function(titleAngle) {
			options.yaxis.titleAngle = titleAngle;
			return this;
		},
		setYAxisTickFormatter: function(tickFormatter) {
			options.yaxis.tickFormatter = tickFormatter;
			return this;
		},
		setYAxisTickDecimals: function(tickDecimals) {
			options.yaxis.tickDecimals = tickDecimals;
			return this;
		},
		setYAxisNoTicks: function(noTicks) {
			options.yaxis.noTicks = noTicks;
			return this;
		},
		setYAxisTimeFormat: function(timeFormat) {
			options.yaxis.timeFormat = timeFormat;
			return this;
		},
		setYAxisAutoScale:function() {
			options.yaxis.autoscale = true;
			return this;
		},
		setYAxisTimeMode:function() {
			options.yaxis.mode = 'time';
			return this;
		},
		setYAxisMin: function(min) {
			options.yaxis.min = min;
			return this;
		},
		setYAxisMax: function(max) {
			options.yaxis.max = max;
			return this;
		},
		setYAxisAutoscaleMargin: function(autoscaleMargin) {
			options.yaxis.autoscaleMargin = autoscaleMargin;
			return this;
		},
		setYAxisTitleAlign: function(titleAlign) {
			options.yaxis.titleAlign = titleAlign;
			return this;
		},
		setYAxisTickDecimals: function(tickDecimals) {
			options.yaxis.tickDecimals = tickDecimals;
			return this;
		},
		drawChart: function(container) {
			if (!this.chartOptionsExists) {
				this.setChartOptions({show:true});
			}
			return Flotr.draw(document.getElementById(container), getData(), options);
		},
		getOptions: function() {
			return options;
		},
		setChartOptions: function(opts) {
			this.chartOptionsExists = true;
			options[getChartKey()] = opts;
			return this;
		},
		showLegend: function() {
			options.legend.show = true;
			return this;
		},
		hideLegend: function() {
			options.legend.show = false;
			return this;
		},
		setLegendNoCols: function(cols) {
			options.legend.noColumns = cols;
			return this;
		},
		setLegendLabelFormatter: function(labelFormatter) {
			options.legend.labelFormatter = labelFormatter;
			return this;
		},
		setLegendPosition: function(position) {
			options.legend.position = position;
			return this;
		},
		hideVerticalLines: function() {
			options.grid.verticalLines = false;
			return this;
		},
		hideHorizontalLines: function() {
			options.grid.horizontalLines = false;
			return this;
		},
		getActualXPoint: function(x) {
			return xTickFormatter(x);
		},
		getActualYPoint: function(y) {
			return yTickFormatter(y);
		}
	};
};

aglite.AgChartHelper.BAR = 0;
aglite.AgChartHelper.LINE = 1;
aglite.AgChartHelper.PIE = 2;

aglite.AgChartHelper.getBarInstance = function() {
	var builder = new aglite.AgChartHelper(aglite.AgChartHelper.BAR);
	return builder;
};
aglite.AgChartHelper.getLineInstance = function() {
	var builder = new aglite.AgChartHelper(aglite.AgChartHelper.LINE);
	return builder
};
aglite.AgChartHelper.getPieInstance = function() {
	var builder = new aglite.AgChartHelper(aglite.AgChartHelper.PIE);
	return builder
};
aglite.AgChartHelper.getInstance = function(type) {
	var builder = new aglite.AgChartHelper(type);
	return builder
};
