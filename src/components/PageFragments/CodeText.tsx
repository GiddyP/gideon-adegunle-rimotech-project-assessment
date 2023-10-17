'use client';
import { useEffect, useState, useCallback } from 'react';
import style from '@styles/code-text.module.css';
import { AutoTyping } from '../reusable/AutoTyping';

const CodeText = () => {
    const useMediaQuery = (width: number) => {
        const [targetReached, setTargetReached] = useState(false);

        const updateTarget = useCallback((e: { matches: any; }) => {
            if (e.matches) {
                setTargetReached(true);
            } else {
                setTargetReached(false);
            }
        }, []);

        useEffect(() => {
            const media = window.matchMedia(`(max-width: ${ width }px)`);
            media.addListener(updateTarget);


            if (media.matches) {
                setTargetReached(true);
            }

            return () => media.removeListener(updateTarget);
        }, [targetReached]);

        return targetReached;
    };

    const isBreakpoint = useMediaQuery(518);





    useEffect(() => {
        const careerText = ['...'];
        const careerTyping = new AutoTyping('#about2', careerText, {
            typeSpeed: 150,
            deleteSpeed: 100,
            waitBeforeDelete: 2000,
            waitBetweenWords: 500,
        });

        careerTyping.start();
    }, []);

    return (
        <div id="about" className={`${ style.first_container } bg-dark dark:bg-transparent pt-16 sm:pt-4 dark:pt-0 pb-3`}>
            <div className={`absolute z-[-50] w-[50%] h-[50%] rounded-[50%] top-[683px] left-[43px] ${ style.blue__gradient }`} />
            <div className={`${ style.sec_container }`}>
                <div className={`${ style.third_container }`}>
                    <div className={`${ style.timeline, style.alt }`}></div>
                    <h3 className="text-4xl text-white font-semibold font-mono">
                        About Me<span id='about2'></span>
                    </h3>
                    <div className="mt-3">
                        <div className={`${ style.code_wrp }`}>
                            {/*  Interface */}
                            <div data-line-nr="01" className={`${ style.code_l }`}>
                                <div className={`${ style.interface }`}>interface</div>
                                <span className={`{${ style.propName }}`}> Skills</span>
                                {'{'}
                            </div>
                            <div data-line-nr="02" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>····</div>
                                <span className={`${ style.text }`}>techSkills</span>:
                                <span className={`${ style.type }`}> string</span><span className={`${ style.scope }`}>[]</span>
                            </div>
                            <div data-line-nr="03" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>····</div>
                                <span className={`${ style.text }`}>softSkills</span>:
                                <span className={`${ style.type }`}> string</span><span className={`${ style.scope }`}>[]</span>
                            </div>
                            <div data-line-nr="04" className={`${ style.code_l }`}>
                                {'}'}
                            </div>
                            {/*  Space */}
                            <div data-line-nr="05" className={`${ style.code_l }`}>
                                <span className={`${ style.bg_transparent }`}>{'}'}</span>
                            </div>

                            {/* Component */}
                            <div data-line-nr="06" className={`${ style.code_l }`}>
                                <div className={`${ style.interface }`}>const </div>
                                <div className={`${ style.methods }`}>Gideon</div>
                                <span className={`${ style.scope }`}> = </span>
                                {'() '}
                                <span className={`${ style.scope }`}>{'=> '}</span>
                                {"{"}
                            </div>
                            <div data-line-nr="07" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···</div>
                                <div className={`${ style.interface }`}>const </div>
                                <div className={`${ style.typed }`}>name</div><span className={`${ style.scope }`}>: </span>
                                <span className={`${ style.type }`}>string </span>
                                <span className={`${ style.scope }`}>= </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Gideon Gbenga Adegunle</span><span
                                    className={`${ style.methods }`}>';</span>
                            </div>
                            <div data-line-nr="08" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···</div>
                                <div className={`${ style.interface }`}>const </div>
                                <div className={`${ style.typed }`}>email</div><span className={`${ style.scope }`}>: </span>
                                <span className={`${ style.type }`}>string</span>
                                <span className={`${ style.scope }`}> = </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>giddygbenga4@gmail.com</span><span
                                    className={`${ style.methods }`}>';</span>
                            </div>
                            <div data-line-nr="09" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···</div>
                                <div className={`${ style.interface }`}>const </div>
                                <div className={`${ style.typed }`}>linkedIn</div><span className={`${ style.scope }`}>: </span>
                                <span className={`${ style.type }`}>string</span>
                                <span className={`${ style.scope }`}> = </span>
                                <span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>www.linkedin.com/in/gideon-adegunle</span><span
                                        className={`${ style.methods }`}>';</span>
                            </div>
                            <div data-line-nr="10" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···</div>
                                <div className={`${ style.interface }`}>const </div>
                                <div className={`${ style.typed }`}>repository</div><span className={`${ style.scope }`}>:</span>
                                <span className={`${ style.type }`}> string</span>
                                <span className={`${ style.scope }`}> = </span>
                                <span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>https://github.com/GiddyP?tab=repositories</span><span
                                        className={`${ style.methods }`}>';</span>
                            </div>
                            <div data-line-nr="11" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···</div>
                                <div className={`${ style.interface }`}>const </div>
                                <div className={`${ style.typed }`}>phoneNumber</div><span className={`${ style.scope }`}>:</span>
                                <span className={`${ style.type }`}> number</span>
                                <span className={`${ style.scope }`}> = </span>
                                <span className={`${ style.interface }`}>+</span><span className={`${ style.typed }`}>2347067174101</span><span
                                    className={`${ style.methods }`}>;</span>
                            </div>
                            {/*  Space */}
                            <div data-line-nr="12" className={`${ style.code_l }`}>
                                <span className={`${ style.bg_transparent }`}>{'}'}</span>
                            </div>
                            {/*  Short About Text */}
                            <div data-line-nr="13" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>····························</div>
                                <div className={`${ style.comment }`}>// I am able because I have.</div>
                            </div>
                            <div data-line-nr="14" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>····························</div>
                                <div className={`${ style.comment }`}>// I'm always adding new abilities to my arsenal.</div>
                            </div>

                            {/*  Space */}
                            <div data-line-nr="15" className={`${ style.code_l }`}>
                                <span className={`${ style.bg_transparent }`}>{'}'}</span>
                            </div>

                            <div data-line-nr="16" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···</div>
                                <div className={`${ style.interface }`}>const </div>
                                <div className={`${ style.methods }`}>workExperience</div>
                                <span className={`${ style.scope }`}> =</span>
                                <span className={`${ style.scope }`}> ()</span><span className={`${ style.scope }`}> :</span>
                                <span className={`${ style.scope }`}>{'{ '}</span>
                                <span className={`${ style.methods }`}>[</span><span className={`${ style.typed }`}>key</span><span
                                    className={`${ style.scope }`}>: </span>
                                <span className={`${ style.type }`}>string</span><span className={`${ style.methods }`}>]</span><span
                                    className={`${ style.scope }`}>: </span>
                                <span className={`${ style.type }`}>string</span><span className={`${ style.methods }`}>; </span>
                                <span className={`${ style.scope }`}>{'}'}</span><span className={`${ style.scope }`}>[]</span>
                                <span className={`${ style.scope }`}>{' => '}</span>
                                <span className={`${ style.scope }`}>{'['}</span>
                            </div>

                            <div data-line-nr="17" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2021-tillDate</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> :</span>
                                <span className={`${ style.methods }`}> '</span><span className={`{${ style.propName }}`}>Frontend
                                    Software Engineer at BIZ 301 under Pushgust Technologies – Lagos, NG</span><span
                                        className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>

                            <div data-line-nr="18" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2021-2022</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> : </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Records
                                    Officer, (Youth-Service) – University of Lagos - Lagos, NG.</span><span
                                        className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>
                            <div data-line-nr="19" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···</div>
                                <span className={`${ style.scope }`}>{']'}</span><span className={`${ style.methods }`}>;</span>
                            </div>

                            <div data-line-nr="20" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···</div>
                                <div className={`${ style.interface }`}>const </div>
                                <div className={`${ style.methods }`}>education</div>
                                <span className={`${ style.scope }`}> =</span>
                                <span className={`${ style.scope }`}> () </span><span className={`${ style.scope }`}>:</span>
                                <span className={`${ style.scope }`}>{'{ '}</span>
                                <span className={`${ style.methods }`}>[</span><span className={`${ style.typed }`}>key</span><span
                                    className={`${ style.scope }`}>:</span>
                                <span className={`${ style.type }`}> string</span><span className={`${ style.methods }`}>]</span><span
                                    className={`${ style.scope }`}>:</span>
                                <span className={`${ style.type }`}> string</span><span className={`${ style.methods }`}>; </span>
                                <span className={`${ style.scope }`}>{'}'}</span><span className={`${ style.scope }`}>[]</span>
                                <span className={`${ style.scope }`}>{' => '}</span>
                                <span className={`${ style.scope }`}>[</span>
                            </div>

                            <div data-line-nr="21" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2015-2020</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> : </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>B.Sc. Ed Bachelor’s degree, ASE
                                    (Political Science) University of Ibadan – Ibadan, NG.</span><span
                                        className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>

                            <div data-line-nr="22" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···</div>
                                <span className={`${ style.scope }`}>]</span><span className={`${ style.methods }`}>;</span>
                            </div>

                            {/*  Space */}
                            <div data-line-nr="22" className={`${ style.code_l }`}>
                                <span className={`${ style.bg_transparent }`}>{'}'}</span>
                            </div>

                            <div data-line-nr="23" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···</div>
                                <div className={`${ style.interface }`}>const </div>
                                <div className={`${ style.typed }`}>certifications</div>
                                <span className={`${ style.scope }`}> = </span>
                                <span className={`${ style.scope }`}>[</span>
                            </div>

                            <div data-line-nr="24" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2023</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> :</span>
                                <span className={`${ style.methods }`}> '</span><span className={`{${ style.propName }}`}>Meta Front-End Developer Specialization.</span><span className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>
                            <div data-line-nr="25" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2023</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> :</span>
                                <span className={`${ style.methods }`}> '</span><span className={`{${ style.propName }}`}>Coding Interview Preparation (Meta)
                                    - Cousera.</span><span className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>
                            <div data-line-nr="26" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2023</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> :</span>
                                <span className={`${ style.methods }`}> '</span><span className={`{${ style.propName }}`}>Front-End Developer Capstone (Meta)
                                    - Cousera.</span><span className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>
                            <div data-line-nr="27" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2023</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> : </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Advanced React (Meta) -
                                    Cousera.</span><span className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>
                            <div data-line-nr="28" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2023</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> :</span>
                                <span className={`${ style.methods }`}> '</span><span className={`{${ style.propName }}`}>Principles of UX/UI Design (Meta) -
                                    Cousera.</span><span className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>
                            <div data-line-nr="29" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2022</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> :</span>
                                <span className={`${ style.methods }`}> '</span><span className={`{${ style.propName }}`}>Certificate of National Service:
                                    National Youth Service Corp (NYSC).</span><span className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>
                            <div data-line-nr="30" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2022</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> : </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>HTML, CSS, and JavaScript for Web
                                    Developers (Johns Hopkins University).</span><span className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>
                            <div data-line-nr="31" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2022</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> : </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Version Control (Meta) -
                                    Cousera.</span><span className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>
                            <div data-line-nr="32" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2022</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> : </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Programming with JavaScript (Meta)
                                    - Cousera.</span><span className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>
                            <div data-line-nr="33" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2022</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> : </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Introduction to Front-End
                                    Development (Meta) - Cousera.</span><span className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>
                            <div data-line-nr="34" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2022</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> : </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>The Web Developer Boot camp -
                                    Udemy.</span><span className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>
                            <div data-line-nr="35" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2021</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> : </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Forex Algorithmic Trading Course:
                                    Code a Forex Robot - Udemy.</span><span className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>
                            <div data-line-nr="36" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2021</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> : </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Learning How to Learn -
                                    Cousera.</span><span className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>
                            <div data-line-nr="37" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.methods }`}>'</span><span
                                    className={`{${ style.propName }}`}>2020</span><span className={`${ style.methods }`}>'</span><span
                                        className={`${ style.methods }`}> : </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Communication in the 21st Century
                                    Workplace (University of California, Irvine) - Cousera.</span><span
                                        className={`${ style.methods }`}>'</span>
                                <span className={`${ style.methods }`}>{'},'}</span>
                            </div>
                            <div data-line-nr="38" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···</div>
                                <span className={`${ style.scope }`}>]</span><span className={`${ style.methods }`}>;</span>
                            </div>

                            {/*  Space */}
                            <div data-line-nr="39" className={`${ style.code_l }`}>
                                <span className={`${ style.bg_transparent }`}>{'}'}</span>
                            </div>

                            <div data-line-nr="40" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···</div>
                                <div className={`${ style.interface }`}>const </div>
                                <div className={`${ style.typed }`}>skills</div><span className={`${ style.scope }`}>:</span>
                                <span className={`{${ style.propName }}`}> Skills</span>
                                <span className={`${ style.scope }`}> = </span>
                                <span className={`${ style.scope }`}>{'{'}</span>
                            </div>

                            <div data-line-nr="41" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <div className={`${ style.interface }`}>techSkills</div><span className={`${ style.methods }`}>: </span>
                                <span className={`${ style.methods }`}>[</span>
                            </div>

                            <div data-line-nr="42" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>HTML/CSS/JS/TS</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Canva</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Motion design</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>NestJS</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Postgres/MongoDB/ORM</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Bootstrap/Tailwindcss</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Webpack/Vite</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>npm/yarn</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Firebase</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Server Side Rendering</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>NextJS/React</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>MUI/ChakraUI</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>ChatGPT-AI</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>MQL5</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Sanity.io</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Search Engine Optimization (SEO)</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>React Native</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Strapi-Dashboard</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>, </span>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Code debugging</span><span
                                    className={`${ style.methods }`}>'</span>
                            </div>

                            <div data-line-nr="43" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>],</span>
                            </div>

                            <div data-line-nr="44" className={`${ style.code_l }`}>

                                <div className={`${ style.dot }`}>·······</div>
                                <div className={`${ style.interface }`}>softSkills</div><span className={`${ style.methods }`}>: </span>
                                <span className={`${ style.methods }`}>[</span>
                            </div>

                            <div data-line-nr="45" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>'</span><span className={`{${ style.propName }}`}>Leadership</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>,</span>
                                <span className={`${ style.methods }`}> '</span><span className={`{${ style.propName }}`}>Collaboration skills</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>,</span>
                                <span className={`${ style.methods }`}> '</span><span className={`{${ style.propName }}`}>Effective communication</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>,</span>
                                <span className={`${ style.methods }`}> '</span><span className={`{${ style.propName }}`}>Proficient speaker</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>,</span>
                                <span className={`${ style.methods }`}> '</span><span className={`{${ style.propName }}`}>Call handling
                                    proficiency</span><span className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>,</span>
                                <span className={`${ style.methods }`}> '</span><span className={`{${ style.propName }}`}>Strong multitasking</span><span
                                    className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>,</span>
                                <span className={`${ style.methods }`}> '</span><span className={`{${ style.propName }}`}>Conflict resolution
                                    skills</span><span className={`${ style.methods }`}>'</span><span className={`${ style.methods }`}>,</span>
                            </div>

                            <div data-line-nr="46" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>],</span>
                            </div>

                            <div data-line-nr="47" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···</div>
                                <span className={`${ style.scope }`}>{'}'}</span><span className={`${ style.methods }`}>;</span>
                            </div>

                            {/*  Space */}
                            <div data-line-nr="48" className={`${ style.code_l }`}>
                                <span className={`${ style.bg_transparent }`}>{'}'}</span>
                            </div>

                            <div data-line-nr="49" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···</div>
                                <div className={`${ style.methods }`}>return</div>
                                <span className={`${ style.scope }`}>(</span>
                            </div>

                            <div data-line-nr="50" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>·······</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>div</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>

                            <div data-line-nr="51" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>h1</span><span className={`${ style.methods }`}>{'>'}</span><span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.text }`}>name</span><span className={`${ style.methods }`}>{'}'}</span><span
                                    className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>/</span><span className={`${ style.typed }`}>h1</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>

                            <div data-line-nr="52" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>p</span><span className={`${ style.methods }`}>{'>'}</span><span className={`${ style.text }`}>Email: </span><span className={`${ style.methods }`}>{"{"}</span><span className={`${ style.text }`}>email</span><span className={`${ style.methods }`}>{'}'}</span><span
                                    className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>/</span><span className={`${ style.typed }`}>p</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>
                            <div data-line-nr="53" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>p</span><span className={`${ style.methods }`}>{'>'}</span><span className={`${ style.text }`}>LinkedIn: </span><span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.text }`}>linkedIn</span><span className={`${ style.methods }`}>{'}'}</span><span
                                    className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>/</span><span className={`${ style.typed }`}>p</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>
                            <div data-line-nr="54" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>p</span><span className={`${ style.methods }`}>{'>'}</span><span className={`${ style.text }`}>Repository: </span><span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.text }`}>repository</span><span className={`${ style.methods }`}>{'}'}</span><span
                                    className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>/</span><span className={`${ style.typed }`}>p</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>
                            <div data-line-nr="55" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>p</span><span className={`${ style.methods }`}>{'>'}</span><span className={`${ style.text }`}>Phone Number: </span><span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.text }`}>phoneNumber</span><span className={`${ style.methods }`}>{'}'}</span><span
                                    className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>{'/'}</span><span className={`${ style.typed }`}>p</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>

                            <div data-line-nr="56" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>h2</span><span className={`${ style.methods }`}>{'>'}</span><span className={`${ style.text }`}>Work Experience:</span><span
                                    className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>{'/'}</span><span className={`${ style.typed }`}>h2</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>
                            <div data-line-nr="57" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>ul</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>
                            <div data-line-nr="58" className={`${ style.code_l }`}>
                                {isBreakpoint ? (
                                    <>
                                        <div className={`${ style.dot }`}></div>
                                        <span className={`${ style.methods }`}>{'{workExperience'}</span><span className={`{${ style.propName }}`}>()</span><span className={`${ style.methods }`}>.map</span><span className={`{${ style.propName }}`}>(</span><span className={`${ style.scope }`}>(</span><span className={`${ style.typed }`}>exper</span><span className={`${ style.methods }`}>,</span><span className={`${ style.typed }`}> index</span> <span className={`${ style.scope }`}>{') => ('}</span>
                                    </>
                                ) : (
                                    <>
                                        <div className={`${ style.dot }`}>··············</div>
                                        <span className={`${ style.methods }`}>{'{workExperience'}</span><span className={`{${ style.propName }}`}>()</span><span className={`${ style.methods }`}>.map</span><span className={`{${ style.propName }}`}>(</span><span className={`${ style.scope }`}>(</span><span className={`${ style.typed }`}>experience</span><span className={`${ style.methods }`}>,</span><span className={`${ style.typed }`}> index</span> <span className={`${ style.scope }`}>{') => ('}</span>
                                    </>
                                )}
                            </div>
                            <div data-line-nr="59" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···················</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>li</span><span className={`${ style.scope }`}> key=</span><span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.text }`}>index</span><span className={`${ style.methods }`}>{'}'}</span><span className={`${ style.methods }`}>{'>'}</span><span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.text }`}>Object</span><span className={`${ style.methods }`}>.values</span><span className={`{${ style.propName }}`}>(</span><span className={`${ style.text }`}>experience</span><span className={`{${ style.propName }}`}>{')'}</span><span className={`{${ style.propName }}`}>{'['}</span><span className={`${ style.typed }`}>0</span><span className={`{${ style.propName }}`}>{']'}</span><span className={`${ style.methods }`}>{'}'}</span><span
                                    className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>{'/'}</span><span className={`${ style.typed }`}>li</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>
                            <div data-line-nr="60" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>··············</div>
                                <span className={`${ style.scope }`}>{')'}</span><span className={`{${ style.propName }}`}>)</span><span className={`${ style.scope }`}>{'}'}</span>
                            </div>
                            <div data-line-nr="61" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>/</span><span className={`${ style.typed }`}>ul</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>

                            <div data-line-nr="62" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>h2</span><span className={`${ style.methods }`}>{'>'}</span><span className={`${ style.text }`}>Education:</span><span
                                    className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>{'/'}</span><span className={`${ style.typed }`}>h2</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>
                            <div data-line-nr="63" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>ul</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>
                            <div data-line-nr="64" className={`${ style.code_l }`}>
                                {isBreakpoint ? (
                                    <div className={`${ style.dot }`}></div>
                                ) : (
                                    <div className={`${ style.dot }`}>··············</div>
                                )}
                                <span className={`${ style.methods }`}>{'{education'}</span><span className={`{${ style.propName }}`}>()</span><span className={`${ style.methods }`}>.map</span><span className={`{${ style.propName }}`}>(</span><span className={`${ style.scope }`}>(</span><span className={`${ style.typed }`}>edu</span><span className={`${ style.methods }`}>{', '}</span><span className={`${ style.typed }`}>index</span><span className={`${ style.scope }`}>{") => ("}</span>
                            </div>
                            <div data-line-nr="65" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···················</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>li</span><span className={`${ style.scope }`}>{' key='}</span><span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.text }`}>index</span><span className={`${ style.methods }`}>{'}'}</span><span className={`${ style.methods }`}>{'>'}</span><span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.text }`}>Object</span><span className={`${ style.methods }`}>.values</span><span className={`{${ style.propName }}`}>(</span><span className={`${ style.text }`}>edu</span><span className={`{${ style.propName }}`}>)</span><span className={`{${ style.propName }}`}>{'['}</span><span className={`${ style.typed }`}>0</span><span className={`{${ style.propName }}`}>{']'}</span><span className={`${ style.methods }`}>{'}'}</span><span
                                    className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>{'/'}</span><span className={`${ style.typed }`}>li</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>
                            <div data-line-nr="66" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>··············</div>
                                <span className={`${ style.scope }`}>{')'}</span><span className={`{${ style.propName }}`}>)</span><span className={`${ style.scope }`}>{'}'}</span>
                            </div>
                            <div data-line-nr="67" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>/</span><span className={`${ style.typed }`}>ul</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>

                            <div data-line-nr="68" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>h2</span><span className={`${ style.methods }`}>{'>'}</span><span className={`${ style.text }`}>Certifications:</span><span
                                    className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>{'/'}</span><span className={`${ style.typed }`}>h2</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>
                            <div data-line-nr="69" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>ul</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>
                            <div data-line-nr="70" className={`${ style.code_l }`}>
                                {isBreakpoint ? (
                                    <>
                                        <div className={`${ style.dot }`}></div>
                                        <span className={`${ style.methods }`}>{'{certifications'}</span><span className={`${ style.methods }`}>.map</span><span className={`{${ style.propName }}`}>(</span><span className={`${ style.scope }`}>(</span><span className={`${ style.typed }`}>certif</span><span className={`${ style.methods }`}>,</span><span className={`${ style.typed }`}> index</span> <span className={`${ style.scope }`}>{') => {'}</span>
                                    </>
                                ) : (
                                    <>
                                        <div className={`${ style.dot }`}>··············</div>
                                        <span className={`${ style.methods }`}>{'{certifications'}</span><span className={`${ style.methods }`}>.map</span><span className={`{${ style.propName }}`}>(</span><span className={`${ style.scope }`}>(</span><span className={`${ style.typed }`}>certification</span><span className={`${ style.methods }`}>,</span><span className={`${ style.typed }`}> index</span> <span className={`${ style.scope }`}>{') => {'}</span>
                                    </>
                                )}
                            </div>
                            <div data-line-nr="71" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>··················</div>
                                <span className={`${ style.scope }`}>const </span>
                                <span className={`${ style.typed }`}>year</span>
                                <span className={`${ style.scope }`}> = </span>
                                <span className={`${ style.text }`}>Object</span><span className={`${ style.methods }`}>.keys(</span><span
                                    className={`${ style.text }`}>certification</span><span
                                        className={`${ style.methods }`}>)[</span><span className={`${ style.typed }`}>0</span><span className={`${ style.methods }`}>];</span>
                            </div>
                            <div data-line-nr="72" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>··················</div>
                                <span className={`${ style.scope }`}>const </span>
                                <span className={`${ style.typed }`}>title</span>
                                <span className={`${ style.scope }`}> = </span>
                                <span className={`${ style.text }`}>Object</span><span className={`${ style.methods }`}>.values(</span><span
                                    className={`${ style.text }`}>certification</span><span
                                        className={`${ style.methods }`}>)[</span><span className={`${ style.typed }`}>0</span><span className={`${ style.methods }`}>];</span>
                            </div>

                            <div data-line-nr="73" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>··················</div>
                                <div className={`${ style.methods }`}>return</div>
                                <span className={`${ style.methods }`}>(</span>
                            </div>

                            <div data-line-nr="74" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>······················</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>li</span><span className={`${ style.scope }`}>{' key='}</span><span className={`{${ style.propName }}`}>{'{'}</span><span className={`${ style.text }`}>index</span><span className={`{${ style.propName }}`}>{'}'}</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>
                            <div data-line-nr="75" className={`${ style.code_l }`}>
                                {isBreakpoint ? (
                                    <div className={`${ style.dot }`}></div>
                                ) : (
                                    <div className={`${ style.dot }`}>··························</div>
                                )}
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>strong</span><span className={`${ style.methods }`}>{'>'}</span><span className={`{${ style.propName }}`}>{'{'}</span><span className={`${ style.text }`}>year</span><span className={`{${ style.propName }}`}>{'}'}</span><span className={`${ style.text }`}>: </span>
                                <span className={`${ style.methods }`}>{'<'}</span><span
                                    className={`${ style.methods }`}>{'/'}</span><span className={`${ style.typed }`}>strong</span><span
                                        className={`${ style.methods }`}>{'>'}</span><span
                                            className={`{${ style.propName }}`}>{'{'}</span><span className={`${ style.text }`}>title</span><span className={`{${ style.propName }}`}>{'}'}</span>
                            </div>

                            <div data-line-nr="76" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>······················</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>/</span><span className={`${ style.typed }`}>li</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>

                            <div data-line-nr="77" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>··················</div>
                                <span className={`${ style.methods }`}>);</span>
                            </div>

                            <div data-line-nr="78" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···············</div>
                                <span className={`${ style.scope }`}>{')'}</span><span className={`{${ style.propName }}`}>)</span><span className={`${ style.scope }`}>{'}'}</span>
                            </div>

                            <div data-line-nr="79" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>{'/'}</span><span className={`${ style.typed }`}>ul</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>

                            <div data-line-nr="80" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>h2</span><span className={`${ style.methods }`}>{'>'}</span><span className={`${ style.text }`}>Tech Skills:</span><span
                                    className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>{'/'}</span><span className={`${ style.typed }`}>h2</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>

                            <div data-line-nr="81" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>ul</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>

                            <div data-line-nr="82" className={`${ style.code_l }`}>
                                {isBreakpoint ? (
                                    <div className={`${ style.dot }`}></div>
                                ) : (
                                    <div className={`${ style.dot }`}>··············</div>
                                )}
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.text }`}>skills</span><span className={`${ style.methods }`}>.</span><span className={`${ style.text }`}>techSkills</span><span className={`${ style.methods }`}>.map</span><span className={`{${ style.propName }}`}>{'('}</span><span className={`${ style.scope }`}>{'('}</span><span className={`${ style.typed }`}>skill</span><span className={`${ style.methods }`}>{', '}</span><span className={`${ style.typed }`}>index </span><span className={`${ style.scope }`}>{') => ('}</span>
                            </div>

                            <div data-line-nr="83" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···················</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>li</span><span className={`${ style.scope }`}>{' key='}</span><span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.text }`}>index</span><span className={`${ style.methods }`}>{'}'}</span><span className={`${ style.methods }`}>{'>'}</span><span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.text }`}>Skill</span><span className={`${ style.methods }`}>{'}'}</span><span
                                    className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>/</span><span className={`${ style.typed }`}>li</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>
                            <div data-line-nr="84" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>··············</div>
                                <span className={`${ style.scope }`}>{')'}</span><span className={`{${ style.propName }}`}>{')'}</span><span className={`${ style.scope }`}>{'}'}</span>
                            </div>
                            <div data-line-nr="85" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>{'/'}</span><span className={`${ style.typed }`}>ul</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>

                            <div data-line-nr="86" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>h2</span><span className={`${ style.methods }`}>{'>'}</span><span className={`${ style.text }`}>Soft Skills:</span><span
                                    className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>/</span><span className={`${ style.typed }`}>h2</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>
                            <div data-line-nr="87" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>ul</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>
                            <div data-line-nr="88" className={`${ style.code_l }`}>
                                {isBreakpoint ? (
                                    <div className={`${ style.dot }`}></div>
                                ) : (
                                    <div className={`${ style.dot }`}>··············</div>
                                )}
                                <span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.text }`}>skills</span><span className={`${ style.methods }`}>.</span><span className={`${ style.text }`}>softSkills</span><span className={`${ style.methods }`}>.map</span><span className={`{${ style.propName }}`}> (</span><span className={`${ style.scope }`}>{'('}</span><span className={`${ style.typed }`}>skill</span><span className={`${ style.methods }`}>, </span><span className={`${ style.typed }`}>index </span><span className={`${ style.scope }`}>{') => '}(</span>
                            </div>
                            <div data-line-nr="89" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···················</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.typed }`}>li</span><span className={`${ style.scope }`}> key=</span><span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.text }`}>index</span><span className={`${ style.methods }`}>{'}'}</span><span className={`${ style.methods }`}>{'>'}</span><span className={`${ style.methods }`}>{'{'}</span><span className={`${ style.text }`}>Skill</span><span className={`${ style.methods }`}>{'}'}</span><span
                                    className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>/</span><span className={`${ style.typed }`}>li</span><span className={`${ style.methods }`}>{'>'}</span><span className={`${ style.cursor }`} />
                            </div>
                            <div data-line-nr="90" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>··············</div>
                                <span className={`${ style.scope }`}>{')'}</span><span className={`{${ style.propName }}`}>{')'}</span><span className={`${ style.scope }`}>{'}'}</span>
                            </div>
                            <div data-line-nr="91" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···········</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>/</span><span className={`${ style.typed }`}>ul</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>
                            <div data-line-nr="92" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>······</div>
                                <span className={`${ style.methods }`}>{'<'}</span><span className={`${ style.methods }`}>/</span><span className={`${ style.typed }`}>div</span><span className={`${ style.methods }`}>{'>'}</span>
                            </div>

                            <div data-line-nr="93" className={`${ style.code_l }`}>
                                <div className={`${ style.dot }`}>···</div>
                                <span className={`${ style.scope }`}>)</span>
                            </div>

                            <div data-line-nr="94" className={`${ style.code_l }`}>
                                <span className={`${ style.method }`}>{'}'}</span>
                            </div>

                            <div data-line-nr="95" className={`${ style.code_l }`}>
                                <span className={`${ style.methods }`}>export default</span> <span
                                    className={`${ style.text }`}>Gideon</span><span className={`${ style.methods }`}>;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CodeText;