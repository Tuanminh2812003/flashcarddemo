
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
                                1. Văn bia tiến sĩ biểu tượng và niềm tự hào của Hà Nội – Thư viện Quốc gia Việt Nam 
                            </div>
                            <div className="Footer__copy__inner__text">
                                2. Bia Đề danh tiến sĩ tại Văn Miếu – Quốc Tử Giám (Hà Nội) – Cục di sản văn hóa 
                            </div>
                            <div className="Footer__copy__inner__text">
                                3. Nhật Tân (1963), Khảo thêm về bia tiến sĩ và nhà bia ở Văn Miếu – Hà Nội, Tạp chí nghiên cứu lịch sử, số 49 
                            </div>
                            <div className="Footer__copy__inner__text">
                                4. Nguyễn Du Chi (1970), Nghệ thuật trang trí trên các bia tiến sĩ đời Lê ở Văn Miếu Hà Nội, Khảo cổ học, số 7001 
                            </div>
                            <div className="Footer__copy__inner__text">
                                5. Đỗ Văn Ninh (1977), Bàn về số lượng bia Tiến sĩ ở Quốc Tử Giám Hà Nội, Khảo cổ học, số 23
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