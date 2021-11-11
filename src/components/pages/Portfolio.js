import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';
import ContInfo from '../layouts/ContInfo';
import WrapTitle from '../layouts/WrapTitle';
import PortInfo from '../info/PortInfo';
import Loading from '../layouts/Loading';

import axios from 'axios';

class Portfolio extends React.Component {
    state = {
        isLoading: true,
        ports : []
    }

    getPorts = async () => {
        const {
            data: {
                data: { ports },
            },
        } = await axios.get("https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json");
        //console.log(ports);
        //console.log(ports.data.data.ports);
        this.setState({ ports, isLoading: false})
    }

    componentDidMount(){
        setTimeout(() => {
            //this.setState({isLoading: false});
            this.getPorts();
        }, 3000);  
    }

    render(){
        const { isLoading, ports } = this.state;

        return (
            <div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div>
                        <Header />
                        <Contents>
                            <section id="portCont">
                                <div className="container">
                                    <WrapTitle text={['portfolio','site']} />
                                    <div className="port__cont">
                                        {ports.map((port) => (
                                            <PortInfo 
                                                key={port.id}
                                                id={port.id}
                                                title={port.title}
                                                category={port.category}
                                                link={port.link}
                                                image={port.image}
                                            />        
                                        ))}
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


// function Portfolio() {
//     return (
//         <div>
//             <Header />
//             <Contents>
//                 <section id="portCont">
//                     <div class="container">
//                         <WrapTitle text={['portfolio','site']} />
//                         <div class="port__cont">

//                         </div>
//                     </div>
//                 </section>
//                 <ContInfo />
//             </Contents>
//             <Footer />
//         </div>
//     )
// }

export default Portfolio;