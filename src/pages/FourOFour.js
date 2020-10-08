import React, { Component } from 'react'

import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

export default class FourOFour extends Component {
    render() {
        return (
            <section className="FourOFour" style={{ 
                marginTop: '10vh'
             }}>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={
                        <Link to="/"><Button>Back Home</Button></Link>
                    }
                />
            </section>
        )
    }
}
