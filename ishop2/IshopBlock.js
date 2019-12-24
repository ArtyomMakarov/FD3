var IshopBlock = React.createClass({

    displayName: "IshopBlock",

    propTypes: {
        name: React.PropTypes.string.isRequired,
        items: React.PropTypes.array.isRequired

    },

    getDefaultProps: function () {
        return {name: "не задано"}
    },

    getInitialState: function() {
        return {
            selectedItemCode: null,
            items: this.props.items
        }
    },

    itemSelected: function (code) {
        this.setState({selectedItemCode: code})
    },

    setDeleteCode: function (code) {
        this.setState({selectedItemCode: code}, this.deleteElement)
    },

    deleteElement: function () {
        let answer = confirm('Delete?');
        if (answer) {
            var filterArr = this.state.items.filter(item =>
                item.code !== this.state.selectedItemCode
            );
            this.setState({items: filterArr});
        }
    },
    
    render: function () {

        var itemsCode = this.state.items.map(v =>
            React.createElement(IshopItem, {key: v.code, code: v.code,
                name: v.name, price: v.price, url: v.url, inStock: v.inStock,
                cbSelected: this.itemSelected, cbDeleted: this.setDeleteCode,
                isSelected: (v.code == this.state.selectedItemCode)})
        );

        return React.DOM.div({className: 'Ishop'},
            React.DOM.div({className: 'ShopName'}, this.props.name),
            React.DOM.table({className: 'table'},
                React.DOM.thead(null,
                    React.DOM.tr(null,
                        React.DOM.th({className: 'cell'}, 'Name'),
                        React.DOM.th({className: 'cell'}, 'Price'),
                        React.DOM.th({className: 'cell'}, 'URL'),
                        React.DOM.th({className: 'cell'}, 'Quantity'),
                        React.DOM.th({className: 'cell'}, 'Control')
                    )
                ),
                React.DOM.tbody({className: 'body'}, itemsCode)
            ),

        );
    },
});