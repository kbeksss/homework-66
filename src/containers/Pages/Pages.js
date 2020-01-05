import React, {Component} from 'react';
import axiosAPI from "../../axios-page";
import {Button, Card, CardText, CardTitle, Col, Row} from "reactstrap";

class Pages extends Component {
    state = {
        description: '',
        title: '',
        data: null,
    };
    getData = async name => {
        const response = await axiosAPI.get('pages/' +name+ '.json');
        if(response.data){
            this.setState({description: response.data.description, title: response.data.title, data: response.data.data});
        }
    };
    componentDidMount() {
        return this.getData(this.props.match.params.name);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.name !== this.props.match.params.name){
            return this.getData(this.props.match.params.name);
        }
    }

    render() {
        let data = this.state.data ?
            <Row>
                {Object.keys(this.state.data).map(contact => (
                    <Col sm="6" key={contact}>
                        <Card body>
                            <CardTitle>{contact}</CardTitle>
                            <CardText>{this.state.data[contact]}</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                ))}
            </Row> : null;

        return (
            <div className='mt-5'>
                <h2>{this.state.title}</h2>
                <p className='pt-4'>{this.state.description}</p>
                {data}
            </div>
        );
    }
}

export default Pages;