var React = require('react');
var isArray = require('lodash/fp/isArray');
var isEmpty = require('lodash/fp/isEmpty');
var PieChart = ReactDashboard.CoreWidgetList['PieChart'];

var CustomWidget = React.createClass({

  statics: {
    getTemplate: function() {
      return {colSpan:"6", type:"CustomWidget", title:"Custom Widget", url:"testdata/PieChart.json", params:[{name:"project", type:"string", value:"abcabc", configurable:true}], changeParamName:false};
    }
  },

  getInitialState: function(){
    return {};
  },

  componentDidMount: function(){
  },
  
  componentDidUpdate: function(){
  },

  render: function() {

    //prepare valid data

    return (
      <PieChart data={this.props.data.data} options={this.props.data.options} onClick={this.props.onClick}></PieChart>
    );
  }

});

CustomWidget.defaultProps = {
  data      : {data:[], options:{}},
  onClick   : undefined
};

module.exports = CustomWidget;
