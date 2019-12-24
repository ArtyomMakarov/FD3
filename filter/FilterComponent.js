var FilterComponent = React.createClass({

    displayName: 'FilterComponent',

    propTypes: {
        strings: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    },

    getInitialState: function() {
        return {
            stringArr: this.props.strings,
            filtered: false,
            text: "",
            checked: false
        };
    },

    sortClicked: function(e) {
        this.setState({checked: e.target.checked}, this.processingList);
    },

    textChanged: function(e) {
        console.log('VotesBlock: текст свободного ответа изменён - '+e.target.value);
        this.setState({filtered: true, text: e.target.value}, this.processingList);
    },

    processingList: function () {
        let res = this.props.strings.slice();
        if (this.state.filtered) {
            res = res.filter(v => v.includes(this.state.text));
            console.log(res);
        }
        if (this.state.checked) {
            res.sort()
        }
        this.setState({stringArr: res});
    },

    filterText: function() {
        var arr = this.props.strings.filter(v => v.includes(this.state.text));
        this.setState({stringArr: arr, noSortArr: arr});
    },



    clearAll: function() {
        this.setState({text: "", stringArr: this.props.strings, checked: false});
    },

    render: function () {
        var stringOfArr = this.state.stringArr.map( (v,index) =>
            React.DOM.option({key: index}, v));

        return React.DOM.div({className: 'FilterComponent'},
            React.DOM.input({type: 'checkbox', checked: this.state.checked, name: 'filterText', onClick: this.sortClicked}),
            React.DOM.input({type: 'text', className: 'textInput', onChange: this.textChanged, value: this.state.text}),
            React.DOM.input({type:'button',value:'Сброс', onClick: this.clearAll}),
            React.DOM.div({className: 'selectBlock'},
                React.DOM.select({name: 'select', size: '6', className: 'select'}, stringOfArr)
            )
        );

    },
});