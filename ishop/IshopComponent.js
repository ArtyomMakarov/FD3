var Ishop = React.createClass({

    displayName: "Ishop",

    getDefaultProps: function () {
      
        return {name: "не задано"}
    },
    
    render: function () {

        var itemsCode = [];

        this.props.items.forEach(function (item) {
            var itemCode =
                React.DOM.div({key: item.code, className: 'item'},
                    React.DOM.img({src: item.url, alt:'image of item', className: 'itemImg'}),
                    React.DOM.div({className: 'itemInfo'},
                        React.DOM.span({className: 'itemName'}, item.name),
                        React.DOM.span({className: 'itemPrice'}, 'Цена: ' + item.price),
                        React.DOM.span({className: 'itemInStock'}, 'В наличии ' + item.inStock + ' шт.')
                    ),
                );
            itemsCode.push(itemCode);
        });

        return React.DOM.div({className: 'Ishop'},
            React.DOM.div({className: 'ShopName'}, this.props.name),
            React.DOM.div({className: 'Items'}, itemsCode),
        );
    },
});