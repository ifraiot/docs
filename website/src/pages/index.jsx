import React from 'react';
import Layout from '@theme/Layout';
function Hello() {
    return (
     <Layout title="ifra platform">
        <div className="nw" style={{ background: '#02121f' }} >
          <section className="rb nx tillustration-section-n">
            <div className="tcontainern">
                <div className="rm rd">
                    <div className="nf np">
                        <div className="split-item">
                            <div className="rg nh az">
                                <h1  style={{ color: '#ffffff', fontSize: '3rem' }} className="oe ok reveal-from-bottom is-revealed" >Ready connect every things</h1>
                                <p style={{ color: '#ffffff', fontSize: '1.3rem' }}   className="oe us reveal-from-bottom is-revealed" data-reveal-delay="300"> We help Internet of Things developers develop applications or solutions quickly and efficiently.</p>
                                <div className="reveal-from-bottom is-revealed" >
                                <a
                                        className="tbuttonn fbuttonl gbuttony" href="/docs">Get started now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <section className="if nx reveal-fade is-revealed" style={{textAlign: 'center', background: '#ffffff'}}>
            <div className="tcontainern">
                <div className="il rd i_ sk">
                <h4 style={{color: '#767676'}}> Customer & Partner </h4>
                    <ul className="st" style={{display: 'flex', justifyContent: 'center'}}>
                        <li className="reveal-from-bottom is-revealed"><img src="/img/ptt1-1.png"
                                alt="Clients 02"/></li>
                        <li className="reveal-from-top is-revealed"><img src="./img/bangjak-1.png"
                                alt="Clients 03"/></li>
                        <li className="reveal-from-bottom is-revealed"><img src="./img/cpf1-1.png"
                                alt="Clients 04"/></li>
                        <li className="reveal-from-top is-revealed"><img src="./img/factorium.png"
                                alt="Clients 05"/></li>
                        <li className="reveal-from-top is-revealed"><img src="./img/summitindustech-1.png"
                                alt="Clients 06"/></li>
                    </ul>
                </div>
            </div>
        </section>

        </div>
    
        </Layout>
  );
}
export default Hello;