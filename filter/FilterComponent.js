var FilterComponent = React.createClass({

    displayName: 'FilterComponent',

    propTypes: {
        strings: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    },

    getInitialState: function() {
        return {
            stringArr: this.props.strings,
            noSortArr: null,
            text: null,
            checked: null
        };
    },

    textChanged: function(e) {
        console.log('VotesBlock: текст свободного ответа изменён - '+e.target.value);
        this.setState({text: e.target.value}, this.filterText);
    },

    filterText: function() {
        var arr = this.state.stringArr.filter(v => v.includes(this.state.text));
        this.setState({stringArr: arr, noSortArr: arr});
    },

    sortClicked: function(e) {
        var sortArr=[];
        if(e.target.checked) {
            sortArr = this.state.stringArr;
            this.setState({stringArr: sortArr.sort()});
        } else {

            if(this.state.noSortArr) {
                this.setState({stringArr: this.state.noSortArr}, this.render);
            } else {
                this.setState({stringArr: this.props.strings}, this.render)
            }

        }
    },

    clearAll: function() {
        this.setState({text: null, stringArr: this.props.strings}, this.render);
    },

    render: function () {

        var stringOfArr = this.state.stringArr.map(v =>
            React.DOM.option({key: Math.random()}, v));

        return React.DOM.div({className: 'FilterComponent'},
            React.DOM.input({type: 'checkbox', name: 'filterText', onClick: this.sortClicked}),
            React.DOM.input({type: 'text', className: 'textInput', onChange: this.textChanged, defaultValue: this.state.text}),
            React.DOM.input({type:'button',value:'Сброс', onClick: this.clearAll}),
            React.DOM.div({className: 'selectBlock'},
                React.DOM.select({name: 'select', size: '6', className: 'select'}, stringOfArr)
            )
        );

    },
});