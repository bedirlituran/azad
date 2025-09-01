"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const About = () => {
  return (
    <div className="w-full bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <Image
          src="/images/about2.jpg"
          alt="Yükləmə Stansiyası"
          fill
          className="object-contain"
          priority
        />
        <div className="relative text-center px-6 z-10">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Haqqımızda
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg opacity-80"
          >
            Biz müasir elektrik nəqliyyat vasitələri üçün innovativ yükləmə
            həlləri təqdim edirik. Müştərilərimizə davamlı gələcək üçün
            texnologiyaların istifadəsini təmin edirik.
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Missiyamız */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Image */}
        <div className="relative w-full h-[400px] md:h-[450px]">
          <Image
            src="/images/about.jpg"
            alt="Yükləmə Stansiyası"
            fill
            className="rounded-lg object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-yellow-400 p-6 rounded-xl shadow-xl max-w-xs">
            <h3 className="text-lg font-semibold mb-2">Missiyamız</h3>
            <p className="text-sm text-gray-800">
              Elektrikli nəqliyyatı əlçatan, sürətli və etibarlı etmək, hər bir
              müştəri üçün rahatlıq yaratmaqdır.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Elektrikli Nəqliyyatın Ən Yüksək Səltənətini Yaradılırıq
          </h2>
          <p className="text-lg mb-6 text-gray-700">
            Biz elektrik nəqliyyatı üçün davamlı həllər təqdim edirik. Enerji
            səmərəliliyini artıraraq, müasir cəmiyyət üçün daha təmiz və yaşıl
            gələcək qurmaq məqsədi daşıyırıq.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>✔ Ən müasir texnologiyalardan istifadə edirik</li>
            <li>✔ İstifadəçi rahatlığını və təhlükəsizliyi ön planda tuturuq</li>
            <li>✔ Təhlükəsiz və dayanıqlı enerji yükləmə sistemləri</li>
          </ul>
          <button className="mt-8 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
            Daha ətraflı
          </button>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        className="bg-gray-50 py-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Sizin Üçün Unikal Yükləmə Həlləri
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
            Biz enerji yükləmə sahəsində ən son texnologiyaları təqdim edərək
            müştərilərimizə etibarlı və sürətli xidmət göstəririk. Məqsədimiz
            daha dayanıqlı və təmiz gələcək yaratmaqdır.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "95%", label: "Məmnun Müştərilər" },
              { value: "15+", label: "Peşəkar Mütəxəssis" },
              { value: "45+", label: "Ölkə və şəhərlərdə" },
              { value: "98+", label: "Fərqli enerji mənbəyi" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-4xl font-bold text-yellow-500">
                  {stat.value}
                </h3>
                <p className="mt-2 text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default About;
