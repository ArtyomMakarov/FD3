var IshopItem = React.createClass({

    displayName: "IshopItem",

    propTypes: {
        code: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        inStock: React.PropTypes.number.isRequired,
        cbSelected: React.PropTypes.func.isRequired,
        cbDeleted:  React.PropTypes.func.isRequired,
        isSelected: React.PropTypes.bool.isRequired
    },

    itemClicked: function () {
        this.props.cbSelected(this.props.code);
    },

    deleteItem: function() {
        this.props.cbDeleted(this.props.code)
    },

    render: function () {

        return React.DOM.tr({key: this.props.code, className: 'item',
                onClick: this.itemClicked, style: {background: this.props.isSelected ? 'yellow' : 'white'}},
            React.DOM.td({className: 'cell'}, this.props.name),
            React.DOM.td({className: 'cell'}, this.props.price),
            React.DOM.td({className: 'cell'}, this.props.url),
            React.DOM.td({className: 'cell'}, this.props.inStock),
            React.DOM.td({className: 'cell'},
                React.DOM.input({type:'button',value:'Delete', onClick: this.deleteItem})
            ),
        );

    },
}) ;

