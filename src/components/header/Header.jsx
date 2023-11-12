import React from 'react';
import s from './Header.module.scss';
import Logo from "../logo/Logo";
import { useMediaQuery } from "react-responsive";

const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: 375 });

    return (
        <header className={s.header}>
            {!isMobile ? (
                <>
                    <Logo/>

                    <div className={s.header_block}>

                        <h1>Unlock your investment potential</h1>
                        <span>Discover proven strategies for building wealth</span>

                        <div className={s.frame_block}>

                            <div className={s.frame}>

                                <div className={s.img_div}>
                                    <img src={require('../../assets/Union.png')} draggable={false}/>
                                </div>

                                <p>
                                    Discover proven strategies for building wealth
                                </p>
                            </div>

                            <div className={s.frame}>

                                <div className={s.img_div}>
                                    <img src={require('../../assets/Union2.png')} draggable={false}/>
                                </div>

                                <p>
                                    Discover proven strategies for building wealth
                                </p>
                            </div>

                            <div className={s.frame}>

                                <div className={s.img_div}>
                                    <img src={require('../../assets/Union3.png')} draggable={false}/>
                                </div>

                                <p>
                                    Discover proven strategies for building wealth
                                </p>
                            </div>

                        </div>

                        <button onClick={() => console.log('click')}>
                            Try it now
                        </button>

                    </div>

                    <div className={s.big_frame_block}>

                        <div className={s.big_frame}>

                            <div className={s.big_frame_span_div}>
                                <span className={s.big_frame_span}>
                         Up to 170%
                                </span>
                                <span className={s.big_frame_span2}>
                            expected profit
                        </span>
                            </div>

                            <img src={require('../../assets/Vector.png')} alt="Vector" width={422} height={200} draggable={false}/>
                        </div>

                        <div className={s.big_frame2}>

                            <div className={s.big_frame_span_div}>
                                <span className={s.big_frame_span}>
                        Automated trade
                                </span>
                                <span className={s.big_frame_span}>
                           replication
                        </span>
                            </div>

                            <img src={require('../../assets/Vector2.png')} alt="Vector" width={320} height={164} draggable={false}/>

                        </div>

                        <div className={s.big_frame3}>

                            <div className={s.big_frame_span_div}>
                                <span className={s.big_frame_span}>
                        Automated trade
                                </span>
                                <span className={s.big_frame_span}>
                            replication
                        </span>
                            </div>

                            <img src={require('../../assets/Vector3.png')} alt="Vector3" width={510} height={310} draggable={false}/>

                        </div>

                        <div className={s.big_frame4}>

                            <div className={s.big_frame_span_div}>
                                <span className={s.big_frame_span}>
                       Automated trade
                                </span>
                                <span className={s.big_frame_span}>
                         replication
                        </span>
                            </div>

                            <img src={require('../../assets/Vector4.png')} alt="Vector4" width={186} height={207}/>

                        </div>
                    </div>
                </>
            ) : (
                <>


                    <div className={s.header_block}>

                        <Logo/>

                        <h1>Unlock your investment potential</h1>
                        <span>Discover proven strategies for building wealth</span>

                        <div className={s.frame_block}>

                            <div className={s.frame}>

                                <div className={s.img_div}>
                                    <img src={require('../../assets/Union.png')} draggable={false}/>
                                </div>

                                <p>
                                    Discover proven strategies for building wealth
                                </p>
                            </div>

                            <div className={s.frame}>

                                <div className={s.img_div}>
                                    <img src={require('../../assets/Union2.png')} draggable={false}/>
                                </div>

                                <p>
                                    Discover proven strategies for building wealth
                                </p>
                            </div>

                            <div className={s.frame}>

                                <div className={s.img_div}>
                                    <img src={require('../../assets/Union3.png')} draggable={false}/>
                                </div>

                                <p>
                                    Discover proven strategies for building wealth
                                </p>
                            </div>

                        </div>

                        <button onClick={() => console.log('click')}>
                            Try it now
                        </button>

                    </div>

                    <div className={s.big_frame_block}>

                        <div className={s.big_frame}>

                            <div className={s.big_frame_span_div}>
                                <span className={s.big_frame_span}>
                         Up to 170%
                                </span>
                                <span className={s.big_frame_span2}>
                            expected profit
                        </span>
                            </div>

                            <img src={require('../../assets/Vector.png')} alt="Vector" width={243}  draggable={false}/>
                        </div>

                        <div className={s.big_frame2}>

                            <div className={s.big_frame_span_div}>
                                <span className={s.big_frame_span}>
                        Automated trade
                                </span>
                                <span className={s.big_frame_span}>
                           replication
                        </span>
                            </div>

                            <img src={require('../../assets/Vector2.png')} alt="Vector" width={184} height={94} draggable={false}/>

                        </div>

                        <div className={s.big_frame3}>

                            <div className={s.big_frame_span_div}>
                                <span className={s.big_frame_span}>
                        Automated trade
                                </span>
                                <span className={s.big_frame_span}>
                            replication
                        </span>
                            </div>

                            <img src={require('../../assets/Vector3.png')} alt="Vector3" width={306} height={178} draggable={false}/>

                        </div>

                        <div className={s.big_frame4}>

                            <div className={s.big_frame_span_div}>
                                <span className={s.big_frame_span}>
                       Automated trade
                                </span>
                                <span className={s.big_frame_span}>
                         replication
                        </span>
                            </div>

                            <img src={require('../../assets/Vector4.png')} alt="Vector4" width={107} height={119}/>

                        </div>
                    </div>
                </>
            )}
        </header>
    );
};

export default Header;
