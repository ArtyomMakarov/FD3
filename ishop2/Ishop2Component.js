var Ishop = React.createClass({

    displayName: "Ishop",

    getDefaultProps: function () {
      
        return {name: "не задано"}
    },

    trClicked: function (e) {
        if(e.target.parentNode.style.backgroundColor =='orange') {
            e.target.parentNode.style.backgroundColor='white'
        } else {
            e.target.parentNode.style.backgroundColor='orange'
        }
    },

    deleteTr: function (e) {
        e.parentElement.remove();
        console.log(e.parentElement.key);
    },
    
    render: function () {

        var itemsCode = [];

        this.props.items.forEach(function (item) {
            var itemCode =
                React.DOM.tr({key: item.code, className: 'item'},
                    React.DOM.td({className: 'cell'}, item.name),
                    React.DOM.td({className: 'cell'}, item.price),
                    React.DOM.td({className: 'cell'}, item.url),
                    React.DOM.td({className: 'cell'}, item.inStock),
                    React.DOM.td({className: 'cell'},
                        React.DOM.input({type:'button',value:'Delete',onClick:this.deleteTr}) // не срабатывает onClick
                    ),
                );
            itemsCode.push(itemCode);
        });

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
                React.DOM.tbody({onClick: this.trClicked, className: 'body'}, itemsCode)
            ),

        );
    },
});