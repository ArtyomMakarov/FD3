var Ishop = React.createClass({

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
            items: this.props.items,
            style: 'item',
            index: null
        }
    },

    itemSelected: function (code) {
        this.setState({selectedItemCode: code}, this.colorChanged)
    },

    colorChanged: function () {
        this.state.items.forEach(item => {
        if(item.code == this.state.selectedItemCode) {
            this.setState({style:'itemSelect'})
        }
        })
    },

    deleteItem: function (code) {
        this.setState({selectedItemCode: code}, this.deleteElement)
    },

    deleteElement: function () {
        this.state.items.forEach((item,index)=> {
            if(item.code == this.state.selectedItemCode) {
                this.setState({index: index})
            }
        });
        this.state.items.splice(this.state.index,1)
    },
    
    render: function () {

        var itemsCode = this.state.items.map(v =>
            React.createElement(IshopItem, {key: v.code, code: v.code,
                name: v.name, price: v.price, url: v.url, inStock: v.inStock,
            cbSelected: this.itemSelected, cbDeleted: this.deleteItem, addClass: this.state.style})
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