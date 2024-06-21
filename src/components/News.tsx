'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillHeartbreakFill } from "react-icons/bs";
import { motion } from 'framer-motion';

interface Headline {
    title: string;
    description: string;
    url: string;
    publishedAt: string;
  }

  interface HeadlineWithDate {
    date: string;
    headline: Headline;
  }

const News: React.FC = () => {

    const [headlines, setHeadlines] = useState<HeadlineWithDate[]>([]); // Specify type for state
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const fetchTopHeadlines = async () => {
          try {
            const response = await axios.get('/api/news-proxy', {
              params: {
                country: 'in', // Country code for India
                pageSize: 100, // Increase the page size to retrieve more headlines
                apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,// Replace with your News API key
              }
            });
            const allHeadlines: Headline[] = response.data.articles;
            const headlinesForDays: HeadlineWithDate[] = [];
            const uniqueDates: Set<string> = new Set(); // Use a Set to store unique dates
            allHeadlines.forEach(headline => {
              const date = headline.publishedAt.split('T')[0]; // Extract date from publishedAt
              if (!uniqueDates.has(date)) {
                headlinesForDays.push({ date, headline });
                uniqueDates.add(date);
              }
            });
            setHeadlines(headlinesForDays);
          } catch (error) {
            console.error('Error fetching top headlines:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchTopHeadlines();
      }, []);
  return (
    <section className='sm:hidden w-full max-w-[90rem] items-center justify-center mt-[10rem]'>
      <div className='px-[1rem] flex flex-col text-zinc-900 font-pop space-y-[2rem]'>
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ y: {duration: 0.3, type: 'spring', stiffness: 200, damping: 20}, opacity: {duration: 0.3} }}
        viewport={{ once: true }}
        className='text-2xl font-bold text-center'>What happened in India, since the day Reeva promised to call</motion.h2>
      {loading ? (
        <p>Loading headlines...</p>
      ) : (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}

        transition={{ opacity: {delay: 0.3, duration: 0.3} }}
        viewport={{ once: true }}
        className='bg-red-500 rounded-3xl p-4 items-center justify-center flex flex-col space-y-[1.5rem]'>
          {headlines.length > 0 ? (
            headlines.map(({ date, headline }, index) => (
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ y: { duration: 0.2, type: 'spring', stiffness: 200, damping: 20}, opacity: { duration: 0.3} }}
                viewport={{ once: true }}
              key={index} className="headline bg-white rounded-3xl p-4 text-zinc-900 flex flex-col text-start items-center justify-center space-y-[0.5rem]">
                <h2 className='text-md font-bold'>{headline.title}</h2>
                <p className='text-sm font-medium text-gray-500'>{headline.description}</p>
                {/* <p>Date: {date}</p> */}
                <a href={headline.url} target="_blank" rel="noopener noreferrer" className='w-full py-[0.5rem] bg-red-500 rounded-3xl text-center text-white font-pop font-bold'>Read more</a>
              </motion.div>
            ))
          ) : (
            <p>No headlines found.</p>
          )}
        </motion.div>
      )}
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ y: {duration: 0.3, type: 'spring', stiffness: 200, damping: 20}, opacity: {duration: 0.3} }}
        viewport={{ once: true, margin: '-50px' }}
      className='flex justify-center items-center text-center pt-[5rem] text-sm pb-[7rem]'>
        F in the chat for Raaj <span className='pl-[0.5rem]'><BsFillHeartbreakFill /></span>
      </motion.div>
        </div>  
    </section>
  )
}


export default News