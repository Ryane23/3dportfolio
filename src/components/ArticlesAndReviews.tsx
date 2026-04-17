"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquareQuote, Star } from "lucide-react";

const REVIEWS = [
  { name: "Alex Chen", handle: "@alexc", rating: 5, comment: "Ryan delivered our Next.js app 3 weeks early. The 3D integration was flawless." },
  { name: "Sarah M.", handle: "@smtech", rating: 5, comment: "Best UI/UX engineer we've hired. The site speed increased by 400% after the refactor." },
  { name: "David Kim", handle: "@davidk", rating: 5, comment: "It's rare to find someone who gets both high-end design and solid architecture." }
];

export default function ArticlesAndReviews() {
  return (
    <section id="articles" className="relative min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Articles Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-[#C6FF00] tracking-[0.2em] font-bold text-sm uppercase mb-3 block">Writing</span>
            <h2 className="text-4xl md:text-5xl font-black text-white heading-font">Latest <br/> Insights</h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {[1, 2, 3].map((item) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C6FF00]/50 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-white/40 text-sm">Oct 24, 2024</span>
                  <div className="p-2 rounded-full bg-white/5 text-white/50 group-hover:bg-[#C6FF00] group-hover:text-black transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 heading-font group-hover:text-[#C6FF00] transition-colors">
                  {item === 1 ? "WebGL vs CSS 3D for Modern Web" : item === 2 ? "Scaling Next.js App Router for Enterprise" : "Building Magnetic UI in React"}
                </h3>
                <p className="text-white/60 line-clamp-2">
                  Exploring the boundaries of what is possible in modern browsers without sacrificing performance or accessibility.
                </p>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Reviews Column */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex justify-between items-end"
          >
            <div>
              <span className="text-[#C6FF00] tracking-[0.2em] font-bold text-sm uppercase mb-3 block">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-black text-white heading-font">Client <br/> Feedback</h2>
            </div>
            <MessageSquareQuote size={48} className="text-white/10" />
          </motion.div>

          <div className="flex-1 flex flex-col gap-6 w-full">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
              >
                <div className="flex gap-1 text-[#C6FF00] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <p className="text-white text-lg mb-6 italic leading-relaxed">"{review.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20" />
                  <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-white/40 text-sm">{review.handle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
