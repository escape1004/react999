import React from 'react';
// import axios from 'axios';
import Loading from '../layouts/Loading';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';
import WrapTitle from '../layouts/WrapTitle';
import ReferInfo from '../info/ReferInfo';
import ContInfo from '../layouts/ContInfo';
import * as JsonData from '../../assets/json/refer.json';

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: []
    }
    
    getRefer = async () => {
        // this.setState({refers: JsonData.default.data.htmlRefer, isLoading: false});

        const {
            default: {
                data: {htmlRefer},
            },
        } = JsonData;
        this.setState({refers: htmlRefer, isLoading: false})
    }

    componentDidMount(){
        setTimeout(() => {
            this.getRefer();
        }, 2000)
    }

    render(){
        const {isLoading, refers} = this.state;
        return (
            <div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div>
                        <Header />
                        <Contents>
                            <section id="referCont">
                                <div className="container">
                                <WrapTitle text={['Reference', 'book']} />
                                    <div className="refer__cont">
                                        <div className="table">
                                            <h3>HTML</h3>
                                            <ul>
                                                {refers.map((refer) => (
                                                    <ReferInfo
                                                        key={refer.id}
                                                        link={refer.link}
                                                        id={refer.id}
                                                        title={refer.title}
                                                        desc1={refer.desc1}
                                                        desc2={refer.desc2}
                                                        element={refer.element}
                                                        tag={refer.tag}
                                                        use={refer.use}
                                                        version={refer.version}
                                                        view={refer.view}
                                                        definition={refer.definition}
                                                    />
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                 </div>
                            </section>
                            <ContInfo />
                        </Contents>
                        <Footer />
                    </div>
                )}
            </div>
        )
    }
}

export default Reference;