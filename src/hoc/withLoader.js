import React, {Component, Fragment} from 'react';
import Backdrop from "../components/UI/Backdrop/Backdrop";

const WithLoader = (WrappedComponent, axios) => {
    return class Loader extends Component{
        constructor(props) {
            super(props);
            this.state = {
                loader: false,
            };
            this.state.interceptorReqId = axios.interceptors.request.use(req => {
                this.setState({loader: true});
                return req;
            });
            this.state.interceptorResId = axios.interceptors.response.use(res => {
                this.setState({loader: false});
                return res;
            }, error => {
                this.setState({loader: false});
                throw error;
            })
        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.state.interceptorReqId);
            axios.interceptors.response.eject(this.state.interceptorResId);
        }
        render() {
            return(
                <Fragment>
                    <WrappedComponent {...this.props}/>
                    <Backdrop loading={this.state.loader} show={this.state.loader}/>
                </Fragment>
            );
        }
    }
};

export default WithLoader;
