import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/vuonquocgia/6.1.png",
        "/vuonquocgia/6.2.png",
        "/vuonquocgia/6.3.png",
        "/vuonquocgia/6.4.png",
        "/vuonquocgia/6.5.png",
        "/vuonquocgia/6.6.png",
        "/vuonquocgia/6.7.png",
    ];

    const handleNextClick = () => {
            setCurrentSlide((prev) => {
            const nextSlide = (prev + 1) % slides.length; // Xử lý chỉ số vòng lặp
            console.log("Next Slide Index:", nextSlide, "Next Slide Image:", slides[nextSlide]);
            return nextSlide;
        });
    };

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="Section4">
            <div className="Section4__title">
                KHÔNG GIAN KINH TẾ - DU LỊCH 
            </div>
            <div className="Section4__slider">
                {slides.map((slide, index) => (
                    <div
                    key={index}
                    className="Section4__slider__image"
                    style={{
                        backgroundImage: `url('${slide}')`,
                        transform: `translateX(-${currentSlide * 100}%)`, // Chỉ dịch chuyển toàn bộ slider
                    }}
                >

                </div>
                ))}
            </div>
            <div className="Section4__pagi">
                {slides.map((_, index) => (
                    <div
                    key={index}
                    className={`Section4__pagi__dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => handleDotClick(index)} // Khi nhấn vào dot, cập nhật slide hiện tại
                    ></div>
                ))}
            </div>
            <div className="Section4__text">
                {slides.map((_, index) =>
                    index === currentSlide ? (
                    <div key={index} className="Section4__text__inner">
                        {index === 0 &&
                        `Vườn Quốc gia Phong Nha - Kẻ Bàng được mệnh danh là “Vương quốc hang động”, nơi tiềm ẩn nhiều điều kỳ lạ hấp dẫn, là thiên đường cho các nhà khoa học, các nhà thám hiểm và khách du lịch. Cho đến nay, đã có hơn 170 hang động với tổng chiều dài hàng trăm km. Cùng với hệ thống hang động kỳ diệu: sông Troóc, sông Chày, sông Son trong khu vực Phong Nha - Kẻ Bàng với dòng nước trong xanh chảy giữa vùng núi đá có rừng tạo nên cảnh đẹp thơ mộng như bức tranh thuỷ mặc quyến rũ du khách.`}
                        {index === 1 &&
                        `Vườn Quốc gia Phong Nha - Kẻ Bàng được mệnh danh là “Vương quốc hang động”, nơi tiềm ẩn nhiều điều kỳ lạ hấp dẫn, là thiên đường cho các nhà khoa học, các nhà thám hiểm và khách du lịch. Cho đến nay, đã có hơn 170 hang động với tổng chiều dài hàng trăm km. Cùng với hệ thống hang động kỳ diệu: sông Troóc, sông Chày, sông Son trong khu vực Phong Nha - Kẻ Bàng với dòng nước trong xanh chảy giữa vùng núi đá có rừng tạo nên cảnh đẹp thơ mộng như bức tranh thuỷ mặc quyến rũ du khách.`}
                        {index === 2 &&
                        `Vườn Quốc gia Phong Nha - Kẻ Bàng được mệnh danh là “Vương quốc hang động”, nơi tiềm ẩn nhiều điều kỳ lạ hấp dẫn, là thiên đường cho các nhà khoa học, các nhà thám hiểm và khách du lịch. Cho đến nay, đã có hơn 170 hang động với tổng chiều dài hàng trăm km. Cùng với hệ thống hang động kỳ diệu: sông Troóc, sông Chày, sông Son trong khu vực Phong Nha - Kẻ Bàng với dòng nước trong xanh chảy giữa vùng núi đá có rừng tạo nên cảnh đẹp thơ mộng như bức tranh thuỷ mặc quyến rũ du khách.`}
                        {index === 3 &&
                        `Trong Vườn quốc gia Phong Nha - Kẻ Bàng còn tồn tại một khu rừng nhiệt đới nguyên sinh ít bị tác động và có tính đa dạng sinh học cao. Động vật và thực vật ở đây lên đến hàng trăm loài trong số đó có những loài được ghi vào sách đỏ Việt Nam.`}
                        {index === 4 &&
                        `Trong Vườn quốc gia Phong Nha - Kẻ Bàng còn tồn tại một khu rừng nhiệt đới nguyên sinh ít bị tác động và có tính đa dạng sinh học cao. Động vật và thực vật ở đây lên đến hàng trăm loài trong số đó có những loài được ghi vào sách đỏ Việt Nam.`}
                        {index === 5 &&
                        `Trong Vườn quốc gia Phong Nha - Kẻ Bàng còn tồn tại một khu rừng nhiệt đới nguyên sinh ít bị tác động và có tính đa dạng sinh học cao. Động vật và thực vật ở đây lên đến hàng trăm loài trong số đó có những loài được ghi vào sách đỏ Việt Nam.`}
                        {index === 6 &&
                        `Trong Vườn quốc gia Phong Nha - Kẻ Bàng còn tồn tại một khu rừng nhiệt đới nguyên sinh ít bị tác động và có tính đa dạng sinh học cao. Động vật và thực vật ở đây lên đến hàng trăm loài trong số đó có những loài được ghi vào sách đỏ Việt Nam.`}
                    </div>
                    ) : null
                )}
            </div>
            <div className="Section4__next" onClick={handleNextClick}>
                <MdNavigateNext />
            </div>
        </div>
    );
}

export default Section4;
