import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const App = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hover, setHover] = useState({
    logo: false,
    navLinks: false,
    text: false,
  });

  const size = hover.logo ? 40 : hover.navLinks ? 30 : hover.text ? 100 : 20;

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);

  return (
    <>
      {/* header */}
      <header className="fixed top-0 left-0 w-full h-[60px] flex items-center justify-between px-[40px]">
        {/* logo */}
        <div>
          <h1
            className="text-[20px] font-semibold text-[#000]"
            onMouseEnter={() => setHover((prev) => ({ ...prev, logo: true }))}
            onMouseLeave={() => setHover((prev) => ({ ...prev, logo: false }))}
          >
            Logo
          </h1>
        </div>

        {/* navlinks */}
        <ul className="flex items-center justify-center gap-[10px]">
          <li
            className="text-[13px] font-semibold text-[#000] cursor-pointer"
            onMouseEnter={() =>
              setHover((prev) => ({ ...prev, navLinks: true }))
            }
            onMouseLeave={() =>
              setHover((prev) => ({ ...prev, navLinks: false }))
            }
          >
            Home
          </li>
          <li
            className="text-[13px] font-semibold text-[#000] cursor-pointer"
            onMouseEnter={() =>
              setHover((prev) => ({ ...prev, navLinks: true }))
            }
            onMouseLeave={() =>
              setHover((prev) => ({ ...prev, navLinks: false }))
            }
          >
            About
          </li>
          <li
            className="text-[13px] font-semibold text-[#000] cursor-pointer"
            onMouseEnter={() =>
              setHover((prev) => ({ ...prev, navLinks: true }))
            }
            onMouseLeave={() =>
              setHover((prev) => ({ ...prev, navLinks: false }))
            }
          >
            Work
          </li>
          <li
            className="text-[13px] font-semibold text-[#000] cursor-pointer"
            onMouseEnter={() =>
              setHover((prev) => ({ ...prev, navLinks: true }))
            }
            onMouseLeave={() =>
              setHover((prev) => ({ ...prev, navLinks: false }))
            }
          >
            Contact
          </li>
        </ul>
      </header>
      {/* main */}
      <section className="w-full h-screen pt-[60px] px-[40px]">
        {/* animated text */}
        <div className="overflow-hidden w-fit bg-[#eee] rounded-[5px]">
          <motion.h1
            className="text-[40px] font-bold"
            initial={{ x: -400 }}
            animate={{ x: 200 }}
            transition={{
              type: "tween",
              ease: "linear",
              duration: 3.2,
              repeat: Infinity,
            }}
            onMouseEnter={() => setHover((prev) => ({ ...prev, text: true }))}
            onMouseLeave={() => setHover((prev) => ({ ...prev, text: false }))}
          >
            Welcome
          </motion.h1>
        </div>
        {/* cursor */}
        <motion.div
          className="fixed top-0 left-0 pointer-events-none bg-[#fff] rounded-full mix-blend-difference"
          animate={{
            width: size,
            height: size,
            x: position.x - size / 2,
            y: position.y - size / 2,
          }}
          transition={{
            type: "tween",
            ease: "backOut",
          }}
        ></motion.div>
      </section>
    </>
  );
};

export default App;
