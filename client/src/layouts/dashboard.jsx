import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            {/* <!-- ***** Preloader Start ***** --> */}
            <div id="js-preloader" className="js-preloader">
                <div className="preloader-inner">
                    <span className="dot"></span>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Preloader End ***** --> */}

            {/* <!-- ***** Header Area Start ***** --> */}
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">

                                {/* <!-- ***** Logo Start ***** --> */}
                                <a href="/index.html" className="logo">
                                    <h1>EDUCATION</h1>
                                </a>
                                {/* <!-- ***** Logo End ***** --> */}

                                {/* <!-- ***** Serach Start ***** --> */}
                                <div className="search-input">
                                    <form id="search" action="#">
                                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword"/>
                                        <i className="fa fa-search"></i>
                                    </form>
                                </div>
                                {/* <!-- ***** Serach Start ***** --> */}

                                {/* <!-- ***** Menu Start ***** --> */}
                                <ul className="nav">
                                    <li className="scroll-to-section"><a href="#top" className="active">Trang chủ</a></li>
                                    <li className="scroll-to-section"><a href="#services">Dịch vụ</a></li>
                                    <li className="scroll-to-section"><a href="#courses">Khóa học</a></li>
                                    <li className="scroll-to-section"><a href="#events">Lịch học</a></li>
                                    <li className="scroll-to-section"><a href="#contact">Đăng nhập</a></li>
                                    <li className="scroll-to-section dropdown">
                                        <a href="#" className="dropdown-toggle">Quản lý</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Service</a></li>
                                            <li><a href="#">Course</a></li>
                                            <li><a href="#">abc</a></li>
                                            <li><a href="#">ádasdsa</a></li>
                                            <li><a href="#">ádsadsad</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                                {/* <!-- ***** Menu End ***** --> */}

                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ***** Header Area End ***** --> */}

            {/* <!-- ***** Content Area Start ***** --> */}
            <main>
                <Outlet />
            </main>
            {/* <!-- ***** Content Area End ***** --> */}

            {/* <!-- ***** Footer Area Start ***** --> */}
            <footer>
                <div className="container">
                    <div className="col-lg-12">
                        <p>Được phát triển bởi các thành viên của <strong>EDUCATION</strong></p>
                    </div>
                </div>
            </footer>
            {/* <!-- ***** Footer Area End ***** --> */}
        </>
    );
};

export default Dashboard;