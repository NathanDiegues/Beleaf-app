const React = require('react');
const fetch = require('node-fetch');

class Home extends React.Component {


    state = {
        data: [],
    }

    componentDidMount(){
        this.getApi();
    }
   
    getApi = _ => {
        fetch('http://localhost:3000/api')
        //.then(response => response.json())
        .then(response => this.setState({data: response.data}))
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    renderApi = ({id , author, text}) => <div id={id} >{author} | {text}</div>


  render() {
        const data = this.state.data;
        return (
        <div>
            {data.map(this.renderApi)}
            <p>Olá, essa página está usando o express-react-views</p>
        </div>
        );
  }
}
module.exports = Home;