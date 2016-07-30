var React = require('react');
var ProductBox = React.createClass({
	render() {
		return (
			<ul className="ww">
				{[1,2,3].map(function(value,index){
					console.log("hwww");
					return (<li>{value}{index}"www啊我lalalalalla"</li>);
				})}
			</ul>
		)
	}
});

module.exports = ProductBox;