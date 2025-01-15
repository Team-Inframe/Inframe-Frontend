import Footer from "@/components/layout/Footer";
import "/icons/frame.png";
import Header from "@/components/layout/Header";

export const SaveHotFrame = () => {
  return (
    <div>
      <div className="pl-5 pt-8">
        <Header title="지브리st.프레임" />
      </div>
      <div>
        <div className="flex items-center justify-center pt-20">
          <img src="icons/frame.png" />
        </div>
        <div className="">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
