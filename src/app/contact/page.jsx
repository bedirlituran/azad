import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="bg-white">
        <Navbar/>
      {/* Başlıq */}
      <div className="text-center py-16 bg-gray-100">
        <h1 className="text-4xl font-bold">Bizimlə Əlaqə</h1>
        <p className="mt-2 text-gray-600">Əgər suallarınız varsa bizimlə əlaqə saxlaya bilərsiniz.</p>
      </div>

      {/* Əlaqə Detalları */}
      <div className="max-w-4xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="font-semibold text-gray-800">Ünvanımız</h3>
          <p className="text-gray-600">Koroğlu Rəhimov küçəsi 52A</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Telefon Nömrəsi</h3>
          <p className="text-gray-600">+994 12 404 23 23</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">E-poçt ünvanı</h3>
          <p className="text-gray-600">info@volt.az</p>
        </div>
      </div>

      {/* Xəritə */}
      <div className="w-full h-96">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.7828644556804!2d49.86709271539142!3d40.40926197936448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d7350f5cbcb%3A0xf1681c2b04e4c2a5!2zNTJBIETEsHRmYXIgUsOnaGltb3YgxZ5zZXNpLCBCYWt1!5e0!3m2!1sen!2saz!4v1632922812824!5m2!1sen!2saz"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Əlaqə Formu */}
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-center text-2xl font-semibold mb-6">Bizə Mesaj Yazın</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" placeholder="Adınız" className="border p-2 w-full rounded" />
            <input type="text" placeholder="Telefon" className="border p-2 w-full rounded" />
            <input type="email" placeholder="E-poçt" className="border p-2 w-full rounded" />
          </div>
          <textarea placeholder="Mesajınız" className="border p-2 w-full rounded h-32 resize-none"></textarea>
          <div className="text-center">
            <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded">
              Göndər
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
