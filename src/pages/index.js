import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/products">
            📦 Product Releases
          </Link>
          <Link className="button button--primary button--lg" to="/docs/intro">
            📒 Software Docs
          </Link>
          <Link className="button button--primary button--lg" to="https://www.jpl.nasa.gov/go/opera">
            ℹ️ About OPERA
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProjectDescription() {
  return (
    <section className={styles.projectDescription}>
      <div className="container">
        <h2 className="sectionTitle">Introduction</h2>
        <p>
          Welcome to the software docs website for Observational Products for End-Users from Remote Sensing Analysis (OPERA) project, from the Jet Propulsion Laboratory. 
        </p>
        <ul>
          <li>Learn more about OPERA at <a href="https://www.jpl.nasa.gov/go/opera">our official homepage</a></li>
          <li>View <a href="/docs/products">our product release table</a> illustrating relationships between OPERA products and our software</li>
          <li>Browse our <a href="/docs/intro">software documentation</a></li>
        </ul>
      </div>
    </section>
  );
}


function CustomerLogos() {
  return (
    <section className={styles.customerLogos}>
      <div className="container">
        <h2 className="sectionTitle">(Optional) Used By</h2>
        <div className={styles.logos}>
          <img src="/img/200x200.png" alt="Customer 1" />
          <img src="/img/200x200.png" alt="Customer 2" />
          <img src="/img/200x200.png" alt="Customer 3" />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2 className="sectionTitle">(Optional) What People Say</h2>
        <div className={styles.quotes}>
          <blockquote>
            <p>"This product is amazing!"</p>
            <cite>- Happy Customer</cite>
          </blockquote>
          <blockquote>
            <p>"It has transformed the way we work."</p>
            <cite>- Satisfied Client</cite>
          </blockquote>
          <blockquote>
            <p>"Incredible support and features."</p>
            <cite>- Loyal User</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function ProductVideo() {
  return (
    <section className={styles.productVideo}>
      <div className="container">
        <h2 className="sectionTitle">See It in Action</h2>
        <div className={styles.videoWrapper}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/your-video-id"
            title="Product Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function GetStarted() {
  return (
    <section className={styles.getStarted}>
      <div className="container">
        <h2 className="sectionTitle">Get Started</h2>
        <div className={styles.getStartedContent}>
          <div>
            <h3>For Users</h3>
            <Link to="/docs/products" className={styles.link}>
              See our products
            </Link>
          </div>
          <div>
            <h3>For Developers</h3>
            <Link to="/docs/intro" className={styles.link}>
              Documentation for our software
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function LearnMore() {
  return (
    <section className={styles.learnMore}>
      <div className="container">
        <h2 className="sectionTitle">Learn More</h2>
        <ul className={styles.learnMoreList}>
          <li>
            <Link to="https://slack.yourdomain.com" className={styles.link}>
              Team Communication (Slack)
            </Link>
          </li>
          <li>
            <Link to="https://github.com/your-org/your-repo/discussions" className={styles.link}>
              Discussion Thread (GitHub)
            </Link>
          </li>
          <li>
            <Link to="/blog" className={styles.link}>
              News and Updates
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Sponsors() {
  return (
    <section className={styles.sponsors}>
      <div className="container">
        <h2 className="sectionTitle">Sponsorship</h2>
        <div className={styles.logos}>
          <p>The project is sponsored by NASA in response to the needs identified by the Satellite Needs Working Group (SNWG). SNWG was chartered in response to the joint Office of Management and Budget (OMB) and Office of Science and Technology Policy (OSTP) request to address challenges faced by US federal data-providing agencies in obtaining and aggregating space-based observations to meet the needs of their users. Every two years, the SNWG conducts an agency survey to identify gaps in the current NASA program of record and/or data sets that meet agency needs. In the 2018 biennial agency survey, surface water extent, surface disturbance, and surface displacement were identified among the top ten inter-agency needs.</p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Welcome to ${siteConfig.title}`} description="Product tag line - one sentence description">
      <HomepageHeader />
      <main>
        <ProjectDescription />
        {/* <CustomerLogos />
        <Testimonials />
        <ProductVideo />
        <HomepageFeatures />
        <GetStarted />
        <LearnMore />
        <Sponsors /> */}
      </main>
    </Layout>
  );
}
