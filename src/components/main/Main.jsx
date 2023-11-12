import React from 'react';
import s from './main.module.scss'
import Table from "../table/Table";
import {useMediaQuery} from "react-responsive";


const Main = () => {

    const isMobile = useMediaQuery({ maxWidth: 375 });

    return (
        <main>
            {!isMobile ? (
                <>
            <div className={s.index_list_block}>

                <h2>
                    Popular strategies
                </h2>

                <Table/>

                <button>
                    Invest now
                </button>
            </div>

            <div className={s.experts}>

                <h2>
                    Our experts
                </h2>

                <div className={s.experts_photos}>

                    <div className={s.photo_block}>

                        <img src={require('../../assets/person.png')} width={328} height={328} draggable={false}/>

                        <span className={s.expert_name}>
                            Priya Sharma
                        </span>

                        <p className={s.about}>
                            Discover Proven Strategies for Building Wealth
                        </p>
                    </div>

                    <div className={s.photo_block}>

                        <img src={require('../../assets/person2.png')} width={328} height={328} draggable={false}/>

                        <span className={s.expert_name}>
                          Deepak Gupta
                        </span>

                        <span className={s.about}>
                            Discover Proven Strategies for Building Wealth
                        </span>
                    </div>


                    <div className={s.photo_block}>

                        <img src={require('../../assets/person3.png')} width={328} height={328} draggable={false}/>

                        <span className={s.expert_name}>
                          Rohan Patel
                        </span>

                        <span className={s.about}>
                            Discover Proven Strategies for Building Wealth
                        </span>
                    </div>

                </div>
            </div>

            <div className={s.questions}>

                <h2>
                    Frequently questions
                </h2>

                <div className={s.questions_block}>
                    <div>
                        <h4>Can I use technical analysis in my trading strategy?</h4>
                        <p>Yes, technical analysis can be a valuable tool in your trading strategy. It involves studying charts and historical price data to identify patterns and make predictions about future price movements.</p>
                    </div>

                    <div>
                        <h4>How do I determine the best trading strategy for me?</h4>
                        <p>The best trading strategy for you will depend on your personal financial goals, risk tolerance, and investment horizon. It is important to thoroughly research and test different strategies before committing to one.</p>
                    </div>

                    <div>
                        <h4>How do I manage risk in my trading strategy?</h4>
                        <p>Risk management is an important aspect of any trading strategy. Techniques for managing risk include diversifying your portfolio, setting stop-loss orders, and using a position sizing strategy.</p>
                    </div>

                    <div>
                        <h4>Can I backtest a trading strategy?</h4>
                        <p>Yes, backtesting allows you to simulate how a trading strategy would have performed in the past using historical data. This can help you identify the strengths and weaknesses of a particular strategy and make adjustments as necessary.</p>
                    </div>

                </div>
        </div>
                </>
            ) : (
                <>

                    <div className={s.index_list_block}>

                        <h2>
                            Popular strategies
                        </h2>

                        <Table/>

                        <button>
                            Invest now
                        </button>
                    </div>

                    <div className={s.experts}>

                        <h2>
                            Our experts
                        </h2>

                        <div className={s.experts_photos}>

                            <div className={s.photo_block}>

                                <img src={require('../../assets/person.png')} width={180} height={180} draggable={false}/>

                                <span className={s.expert_name}>
                            Priya Sharma
                        </span>

                                <p className={s.about}>
                                    Discover Proven Strategies for Building Wealth
                                </p>
                            </div>

                            <div className={s.photo_block}>

                                <img src={require('../../assets/person2.png')} width={180} height={180} draggable={false}/>

                                <span className={s.expert_name}>
                          Deepak Gupta
                        </span>

                                <span className={s.about}>
                            Discover Proven Strategies for Building Wealth
                        </span>
                            </div>


                            <div className={s.photo_block}>

                                <img src={require('../../assets/person3.png')} width={180} height={180} draggable={false}/>

                                <span className={s.expert_name}>
                          Rohan Patel
                        </span>

                                <span className={s.about}>
                            Discover Proven Strategies for Building Wealth
                        </span>
                            </div>

                        </div>
                    </div>

                    <div className={s.questions}>

                        <h2>
                            Frequently questions
                        </h2>

                        <div className={s.questions_block}>
                            <div>
                                <h4>Can I use technical analysis in my trading strategy?</h4>
                                <p>Yes, technical analysis can be a valuable tool in your trading strategy. It involves studying charts and historical price data to identify patterns and make predictions about future price movements.</p>
                            </div>

                            <div>
                                <h4>How do I determine the best trading strategy for me?</h4>
                                <p>The best trading strategy for you will depend on your personal financial goals, risk tolerance, and investment horizon. It is important to thoroughly research and test different strategies before committing to one.</p>
                            </div>

                            <div>
                                <h4>How do I manage risk in my trading strategy?</h4>
                                <p>Risk management is an important aspect of any trading strategy. Techniques for managing risk include diversifying your portfolio, setting stop-loss orders, and using a position sizing strategy.</p>
                            </div>

                            <div>
                                <h4>Can I backtest a trading strategy?</h4>
                                <p>Yes, backtesting allows you to simulate how a trading strategy would have performed in the past using historical data. This can help you identify the strengths and weaknesses of a particular strategy and make adjustments as necessary.</p>
                            </div>

                        </div>
                    </div>
                </>
            )}
        </main>
    );
};

export default Main;