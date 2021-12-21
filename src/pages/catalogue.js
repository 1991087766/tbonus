import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
// 高亮开始
import Translate, {translate} from '@docusaurus/Translate';
import HomePageListFAQ from "../components/HomePageAnnouncement";
// 高亮结束

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">
                    <Translate
                        id="tp.home.welcome"
                        description="The homepage welcome message">
                    </Translate>
                </h1>
                <p className="hero__subtitle">
                    <Translate
                        id="tp.home.slogan"
                        description="The homepage welcome message">
                        诚信
                    </Translate>
                </p>

            </div>
        </header>
    );
}

export default function Catalogue() {
    const {siteConfig} = useDocusaurusContext();
    return (

        <Layout
            title={`TbonusPro`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                {/*<HomepageFeatures />*/}
                <HomePageListFAQ />
            </main>
        </Layout>
    );
}
