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
            <Button href={docUrl('overview')}>เริ่มต้นใช้งาน</Button>
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
       <h1 class="color-blue">การใช้งาน IFRA IIoT</h1>
       <h3>เริ่มต้นใช้งานกับแพลตฟอร์ม IFRA IIoT</h3>
       <p  style={{textIndent: '50px'}}>IFRA IIoT เป็นแพลตฟอร์มสำหรับโรงงานอุตสาหกรรม ที่จะช่วยให้โรงงานสามารถนำ IoT มาใช้ใภายในโรงงาน
       ได้อย่างมีประสิทธิภาพสูงสุด โดยแพลตฟอร์มนั้นถูกออกแบบให้สามารถใช้งานง่ายต่อการสร้างวิธีการแก้ปัญหาที่เกิดขึ้นภายในโรงงาน
        </p>
        <h2 class="color-blue">ลักษณะเฉพาะ</h2>
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
            content: 'สามารถสร้าง Dashborad เพื่อดูข้อมูลได้แบบ real time ',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'ข้อมูลแบบ Real time',
          },
          {
            content: 'สร้าง Solution ง่ายๆในการแก้ปัญหาโรงงานด้วย Drag and drop',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'แก้ปัญหาด้วย Drag and drop',
          },
          {
            content: 'การรับข้อมูลแบบ Strmaing ที่สามารถจัดการกับ Big data ได้ง่ายๆ',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'จัดการข้อมูลแบบ Straming',
          },
        ]}

      </Block>
    );

    const Button = () => (
      <Container
      padding={['bottom']}>
    <div className=" bnt-get-start">
        <a className="button hero-cta" href={docUrl('overview')}>
         <h2 class="color-blue"> เริ่มต้นใช้งานกับ IFRA</h2>
         <p style={{marginTop: '10px'}}>สร้างวิธีการแก้ปัญหาด้วยแพลตฟอร์ม IFRA.</p>
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
