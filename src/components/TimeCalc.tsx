"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, scroll } from "framer-motion";
import { differenceInMinutes, parse } from "date-fns";
import globeEmoji from "../../public/globeEmoji.png";
import hourglassEmoji from "../../public/hourglassEmoji.png";
import watchEmoji from "../../public/watchEmoji.png";
import sadEmoji from "../../public/sadEmoji.png";

const TimeCalc: React.FC = () => {
  const [timeDifference, setTimeDifference] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const [selectedMetric, setSelectedMetric] = useState("days");

  

  useEffect(() => {
    const targetDate = parse(
      "06/12/2024 11:28AM",
      "MM/dd/yyyy hh:mma",
      new Date()
    );

    const updateDifference = () => {
      const now = new Date();
      const diffInMinutes = differenceInMinutes(now, targetDate);
      const days = Math.floor(diffInMinutes / (60 * 24));
      const hours = Math.floor(diffInMinutes / 60);
      const minutes = diffInMinutes;

      setTimeDifference({ days, hours, minutes });
    };

    updateDifference();
    const interval = setInterval(updateDifference, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMetric(event.target.value);
  };

  return (
    <section className=" sm:hidden max-w-[90rem] relative flex w-full mt-[12rem] justify-center items-center text-zinc-900">
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ y: {type: 'spring', stiffness: 100, damping: 25, duration: 0.4}, opacity: {duration: 0.4} }}
        viewport={{ margin: '-300px', once: true,  }}
      className="absolute top-[0] bg-white border-solid border-t-2 border-x-2 border-red-500 left-[50] z-[5] px-[1.5rem] py-[1.5rem] rounded-[1.2rem] shadow-xl font-bold font-pop text-2xl lowercase text-center items-center justify-center">
        Quantify the Misery
      </motion.div>
      <motion.img 
      initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ y: {delay: 0.5, type: 'spring', stiffness: 100, damping: 25, duration: 0.4}, opacity: {delay: 0.5, duration: 0.4} }}
        viewport={{ margin: '-350px', once: true  }}
      className="absolute top-[-2rem] right-[2.4rem] w-[3rem] h-auto z-[3] rotate-[15deg]" src={sadEmoji.src}>
      </motion.img>
      <motion.div 
      initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ opacity: { delay: 0.2, duration: 0.6} }}
        viewport={{ margin: '-350px', once: true }}
      className="timeContainer text-white flex px-[2.5rem] pt-[6rem] pb-[4rem] mt-[2.5rem] w-full flex-col rounded-[1.2rem] mx-[2rem] z-[1] bg-red-500">
        <select
          className="rounded-2xl py-[1.2rem] font-pop text-lg font-black uppercase text-center shadow-xl bg-white text-zinc-900"
          value={selectedMetric}
          onChange={handleSelectChange as any}
        >
          <option value="days">Days</option>
          <option value="hours">Hours</option>
          <option value="minutes">Minutes</option>
        </select>

        <div className="mt-[4rem] relative flex items-center justify-center">
        <img className={`${selectedMetric === "days" ? 'absolute' : 'hidden'} top-5 right-[4rem] w-[4rem] h-auto z-[1]`} src={globeEmoji.src}>
            </img>
            <img className={`${selectedMetric === "hours" ? 'absolute' : 'hidden'} bottom-[1rem] left-[0rem] rotate-[-30deg] w-[4rem] h-auto z-[5]`} src={hourglassEmoji.src}>
            </img>
            <img className={`${selectedMetric === "minutes" ? 'absolute' : 'hidden'} top-[0rem] left-[5rem] rotate-[30deg] w-[4rem] h-auto z-[1]`} src={watchEmoji.src}>
            </img>
            {selectedMetric === "days" && 
            <p className="text-center font-black text-[10rem] z-[5]">{timeDifference.days}</p>}
            {selectedMetric === "hours" && 
            <p className="text-center font-black text-[8rem] z-[1]">{timeDifference.hours}</p>}
            {selectedMetric === "minutes" && (
                <p className="text-center font-black text-[5.5rem] z-[5]">{timeDifference.minutes}</p>
            )}
        </div>
      </motion.div>
    </section>
  );
};

export default TimeCalc;
