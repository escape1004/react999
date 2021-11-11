import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';
import { Link } from 'react-router-dom';
// import ReferInfo from '../info/ReferInfo';
import ContInfo from '../layouts/ContInfo';

// function ReferDetail(props) {
//     console.log(props);
//     return <span>ddd</span>
// }

class ReferDetail extends React.Component {
    
    componentDidMount() {
        const { location, history } = this.props;
        if( location.state === undefined ) {
            history.push('/reference');
        }
        console.log(location.state);
    }

    render() {
        const {location} = this.props;
        if( location.state ) {
            return (
                <div>
                    <Header />
                    <Contents>
                        <main id="main">
                            <section id="referCont">
                                <div className="container">
                                    <div className="refer__detail pt200">
                                        <h3>{location.state.title}</h3>
                                        <p>{location.state.desc1}</p>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>특징</th>
                                                    <th>{location.state.desc2}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>요소</th>
                                                    <td>{location.state.element}</td>
                                                </tr>
                                                <tr>
                                                    <th>닫는 태그</th>
                                                    <td>{location.state.tag}</td>
                                                </tr>
                                                <tr>
                                                    <th>버전</th>
                                                    <td>{location.state.version}</td>
                                                </tr>
                                                <tr>
                                                    <th>시각적 표현</th>
                                                    <td>{location.state.view}</td>
                                                </tr>
                                                <tr>
                                                    <th>사용성</th>
                                                    <td>{location.state.use}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <h4>정의(Definition)</h4>
                                        <ul>
                                            {location.state.definition.map((defer) => (
                                                <li key={defer.toString()}>{defer}</li>
                                            ))}
                                        </ul>
                                        <Link to="/reference" className="list-btn">목록보기</Link>
                                    </div>
                                </div>
                            </section>
                        </main>
                        <ContInfo />
                    </Contents>
                    <Footer />
                </div>
            )
        } else {
            return null;
        }
    }
}

export default ReferDetail;