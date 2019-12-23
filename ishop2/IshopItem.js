var IshopItem = React.createClass({

    displayName: "IshopItem",

    propTypes: {
        code: React.PropTypes.string.isRequired,
        style:  React.PropTypes.any,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        inStock: React.PropTypes.number.isRequired,
        cbSelected: React.PropTypes.func.isRequired,
        cbDeleted:  React.PropTypes.func.isRequired,
        isSelected: React.PropTypes.bool.isRequired
    },

    getInitialState: function () {
        return {
            items: this.props.items,
        };
    },

    itemClicked: function (e) {
        console.log(this.props.isSelected);
        this.props.cbSelected(this.props.code);

        if (this.props.isSelected) {
                    e.target.parentNode.style = 'background: orange';
        } else {
            e.target.parentNode.style = 'background: white';
        }

    },

    deleteItem: function() {
        this.props.cbDeleted(this.props.code)
    },

    render: function () {

        return React.DOM.tr({key: this.props.code, className: 'item',
                onClick: this.itemClicked},
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

