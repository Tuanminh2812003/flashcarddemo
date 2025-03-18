
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer(){
    return(
        <>
            <div className="Footer">
                <div className="container">
                    <div className="Footer__inner">
                        <div className="Footer__inner__row">
                            <div className="Footer__inner__title">
                                Dự án HERITAGE FLASH XR
                            </div>
                            <img src="/Logo.png" alt="logo"/>
                        </div>
                        <div className="Footer__inner__row">
                            <div className="Footer__inner__title">
                                Chuyên gia cố vấn
                            </div>
                            <div className="Footer__inner__disc">
                                GS.TS.NGND Đỗ Thanh Bình
                            </div>
                            <div className="Footer__inner__disc">
                                PGS.TS Nguyễn Mạnh Hường
                            </div>
                            <div className="Footer__inner__disc">
                                TS. Nguyễn Văn Ninh
                            </div>
                            <div className="Footer__inner__disc">
                                TS. Vũ Đức Liêm
                            </div>
                        </div>
                        <div className="Footer__inner__row r2">
                            <div className="Footer__inner__title">
                                Đơn vị bảo trợ và tài trợ
                            </div>
                            <div className="Footer__inner__disc">
                                Hội Di sản Văn hoá Việt Nam
                            </div>
                            <Link to="https://www.youtube.com/watch?v=mZ_Y6QkbSy4&feature=youtu.be">
                                <div className="Footer__inner__disc">
                                    Quỹ Hỗ trợ bảo tồn di sản văn hoá Việt Nam
                                </div>
                            </Link>
                            <div className="Footer__inner__disc">
                                Công ty Cổ phần Công nghệ Giáo dục AES
                            </div>
                        </div>
                        <div className="Footer__inner__row r3">
                            <div className="Footer__inner__title">
                                Liên hệ
                            </div>
                            <div className="Footer__inner__icon">
                                <Link to="">
                                    <FaFacebook />
                                </Link>
                                <Link to="">
                                    <FaInstagram />
                                </Link>
                                <Link to="https://www.youtube.com/watch?v=mZ_Y6QkbSy4&feature=youtu.be">
                                    <FaYoutube />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer__copy">
                    <div className="container">
                        <div className="Footer__copy__inner">
                            <div className="Footer__copy__inner__text">
                                1. Tạp chí Cố Đô Huế Xưa và Nay
                            </div>
                            <div className="Footer__copy__inner__text">
                                2. B.A.V.H, Bộ sách Những người bạn cố đô Huế, NXB Thuận Hóa
                            </div>
                            <div className="Footer__copy__inner__text">
                                3. Phan Thuận An, Kiến trúc Cố đô Huế, NXB Đà Nẵng
                            </div>
                            <div className="Footer__copy__inner__text">
                                4. Hồ Vĩnh, Cố đô Huế dấu ấn thời gian, NXB Đại học Huế
                            </div>
                            <div className="Footer__copy__inner__text">
                                5. Phan Thanh Hải, Huế còn lại với di sản, NXB Hà Nội
                            </div>
                            <div className="Footer__copy__inner__aes">
                                © Copyright 2024 AES, All rights reserved
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;