import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import hpn from './HomePageNavigation.css';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const FeatureList = [
    {
        title: "tp.home.type.Beginner_Guide",
        Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
        url: "/docs/about/TbonusPro",
    },
];

function Feature({title,Svg, url}) {
    return (
        <div className={clsx('col col--12')}>
            <div className="text--center home_type_background home_type_faq_bg">
                <div className={clsx('col ')}>

                </div>
                <div className="text--center padding-horiz--md home_type_faq">
                    <h4 className="home_text">
                        <Link to={url}>
                            <Translate
                                id={title}
                                description="The homepage welcome message">
                            </Translate>
                        </Link>
                    </h4>
                </div>
                <div className="text--center padding-horiz--md home_type_faq home_type_faq_r">
                    <Link to={url}>
                        <Svg className="home_type_icon"/>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default function HomePageAnnouncement() {
    return (
        <div>
            <h3 className="container">
                <Translate
                    id="tp.home.Announcement"
                    description="The homepage welcome message">
                </Translate>
            </h3>
            <section className={styles.features}>
                <div className="container">
                    <div className="row">
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        </div>

    );
}
