import '@styles/Minion.module.css';

const MinionCss = () => {
    
    return (
        <main className="minion ml-8 xl:ml-0 sm:left-0 sm:right-0 xs:left-[-60px] xl:left-[150px] xl:pt-16 px-32 mb-28 flex sm:hidden">
            <section className="shadow">
                <div className="minion-body">
                    <section className="minion-eye">
                        <div className="left-eye"></div>
                        <div className="right-eye"></div>

                        <div className="right-glass-rubber-band"></div>
                        <div className="right-glass"></div>

                        <div className="left-glass-rubber-band"></div>
                        <div className="left-glass"></div>
                    </section>

                    <section className="mouth"></section>
                    <section className="hands">
                        <section className="left-hand">
                            <div className="l-palm"></div>
                            <div className="f1"></div>
                            <div className="f2"></div>
                            <div className="f3"></div>
                        </section>
                        <section className="right-hand">
                            <div className="r-palm"></div>
                            <div className="f1"></div>
                            <div className="f2"></div>
                            <div className="f3"></div>
                        </section>
                    </section>

                    <section className="cloths">
                        <div className="left-pocket"></div>
                        <div className="middle-pocket"></div>
                        <div className="right-pocket"></div>
                        <div className="buttons"></div>
                    </section>

                    <section className="leg">
                        <div className="l-leg"></div>
                        <div className="r-leg"></div>
                    </section>

                    <section className="shoes">
                        <div className="l-shoe"></div>
                        <div className="r-shoe"></div>
                    </section>
                </div>
            </section>
        </main>
    );
};

export default MinionCss;