/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Header extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;

    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer Header">
        <div class="background-sky hero"></div>
          <div className="wrapper homeWrapper">
            {props.children}
            </div>
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button hero-cta" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('overview')}>Get Start</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
 
  }
}

class Body extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl,docsUrl} = siteConfig;

    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const TextHeader = () => (
      <Container
      padding={[ 'top']}
      className='TextHeader'>
       <h1 class="color-blue">IFRA IIoT Documentation</h1>
       <h3>Get started with IFRA IIoT</h3>
       <p>Try our multi-part walkthrough that covers writing your first app,
          data storage, networking, and swarms, and ends with your app running on
          production servers in the cloud. Total reading time is less than an hour.
        </p>
        <h2 class="color-blue">Performent</h2>
    </Container>
    );

    const Block = props => (
      <Container
      padding={['bottom']}>
        <GridBlock
          align={props.align}
          contents={props.children}
          layout={props.layout}/>
        </Container>

    );

    const Features = () => (
      <Block layout="threeColumn" align="center">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
        ]}

      </Block>
    );

    const Button = () => (
      <Container
      padding={['bottom']}>
    
    <div className=" bnt-get-start">
        <a className="button hero-cta" href={docUrl('overview')}>
         <h2 class="color-blue"> Get start with IFRA</h2>
         <p>Start building solution with IFRA.</p>
        </a>
      </div>
    
      </Container>
    );


    return (
      <div>
      <Header siteConfig={siteConfig} language={language} />
      <TextHeader />
      <Features />
      <Button />
    </div>
      );
  }
}

module.exports = Body;
