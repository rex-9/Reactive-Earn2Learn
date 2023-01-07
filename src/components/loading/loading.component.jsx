// import Lottie from "react-lottie";

import loading from "../../assets/loading.json";
const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="border-2 border-[#4E46CE] w-80 h-40 ml-12 mr-12 mt-5 mb-5 rounded-lg p-3 overflow-hidden leading-relaxed">
      {/* <Lottie options={defaultOptions} height={150} width={150} /> */}
    </div>
  );
};
export default Loading;
