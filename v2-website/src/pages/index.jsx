import React from 'react';
import Layout from '@theme/Layout';
function Hello() {
    return (
     <Layout title="Hello">
        <div class="nw" style={{ background: '#02121f' }} >
          <section class="rb nx tillustration-section-n">
            <div class="tcontainern">
                <div class="rm rd">
                    <div class="nf np">
                        <div class="split-item">
                            <div class="rg nh az">
                                <h1 class="oe ok reveal-from-bottom is-revealed" >Ready connect every things</h1>
                                <p style={{ color: '#ffffff' }}   class="oe us reveal-from-bottom is-revealed" data-reveal-delay="300"> We help Internet of Things developers develop applications or solutions quickly and efficiently.</p>
                                <div class="reveal-from-bottom is-revealed" ><a
                                        class="tbuttonn fbuttonl gbuttony" href="/docs">Get started now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <section class="if nx reveal-fade is-revealed" style={{textAlign: 'center'}}>
            <div class="tcontainern">
                <div class="il rd i_ sk">
                <h4 style={{color: '#767676'}}> Customer & Partner </h4>
                    <ul class="st">
                        <li class="reveal-from-bottom is-revealed"><img src="/img/ptt1-1.png"
                                alt="Clients 02"/></li>
                        <li class="reveal-from-top is-revealed"><img src="./img/bangjak-1.png"
                                alt="Clients 03"/></li>
                        <li class="reveal-from-bottom is-revealed"><img src="./img/cpf1-1.png"
                                alt="Clients 04"/></li>
                        <li class="reveal-from-top is-revealed"><img src="./img/factorium.png"
                                alt="Clients 05"/></li>
                        <li class="reveal-from-top is-revealed"><img src="./img/summitindustech-1.png"
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