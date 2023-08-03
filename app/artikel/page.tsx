import { Metadata } from 'next'
import React from 'react'
import styles from './artikel.module.css'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Makanan Pemicu Kanker',
    description: 'Makanan Pemicu Kanker',
}

const Artikel = () => {
  return (
    <div className='pt-[35px] pb-[75px] px-[30px]'>
      <p className={styles.artikel_title}>5 Makanan Pemicu Kanker yang Harus Dihindari Anak</p>

      <center>
        <Image alt='asdadasd' src={'/image.webp'} width={700} height={0} className='my-[50px]'/>
      </center>

      <div className={`${styles.artikel_content_1} grid gap-y-[15px] mb-[35px]`}>
        <p>
          Halodoc, Jakarta – Kanker adalah penyakit yang kompleks, tapi ada beberapa makanan yang bisa jadi pemicu, meski secara tidak langsung. Seperti makanan yang dapat memicu peradangan dan stres oksidatif dalam tubuh. 
          Meski kanker pada anak agak berbeda dengan orang dewasa, tidak ada salahnya untuk memastikan anak menghindari makanan tidak sehat. Sebab, pembentukan pola makan yang baik sejak kecil sangat penting untuk jangka panjang.
        </p>
        <p>
          Meski kanker pada anak agak berbeda dengan orang dewasa, tidak ada salahnya untuk memastikan anak menghindari makanan tidak sehat. Sebab, pembentukan pola makan yang baik sejak kecil sangat penting untuk jangka panjang.
        </p>
      </div>

      <div className={`${styles.artikel_content_2} grid gap-y-[15px]`}>
        <p className={styles.artikel_title}>
          Berbagai Makanan Pemicu Kanker
        </p>
        <p>
          Beberapa makanan dapat meningkatkan risiko diabetes tipe 2 dan obesitas, yang berhubungan dengan jenis kanker tertentu. Makanan lain mengandung karsinogen, yaitu zat berbahaya yang berpotensi menyebabkan kanker.
        </p>
        <p>
          Paparan karsinogen sebenarnya tidak selalu langsung menyebabkan kanker. Itu tergantung pada genetika, serta tingkat dan durasi paparan karsinogen. Oleh karena itu, penting untuk membiasakan anak menghindari makanan yang bisa jadi pemicu kanker, seperti:
        </p>

        <ul className={styles.ul}>
          <li>
            <div>
              <strong>Daging Olahan</strong>
              <p>
              Pengolahan daging dengan pengasapan, pengasinan, pengawetan, atau pengalengan memang membuatnya semakin awet. Namun, ini bisa jadi pemicu kanker jika kamu mengonsumsinya berlebihan.
              </p>
              <p>
              Beberapa contoh daging olahan adalah sosis, kornet, salami, dan masih banyak lagi. Metode untuk membuat daging olahan dapat menciptakan karsinogen. 
              </p>
            </div>
          </li>
          <li>
            <div>
              <strong>Gorengan</strong>
              <p>
                Makanan lain yang juga jadi pemicu kanker adalah gorengan. Saat memasak makanan bertepung pada suhu tinggi, senyawa bernama akrilamida terbentuk. Ini bisa terjadi selama proses menggoreng, memanggang, dan membakar.
              </p>
              <p>
                Makanan bertepung goreng sangat tinggi akrilamida. Akrilamida berpotensi merusak DNA dan menginduksi apoptosis, atau kematian sel. Makan banyak gorengan juga meningkatkan risiko untuk diabetes tipe 2 dan obesitas. Kondisi ini dapat meningkatkan stres oksidatif dan peradangan, yang selanjutnya meningkatkan risiko kanker.
              </p>
            </div>
          </li>
          <li>
            <div>
              <strong>Makanan yang Terlalu Matang</strong>
              <p>
                Makanan pemicu kanker lainnya adalah yang terlalu matang atau gosong, terutama daging-dagingan. Proses memasak makanan hingga ada bagian yang gosong (seperti memanggang atau membakar) dapat menghasilkan karsinogen. 
              </p>
              <p>
                Zat ini dapat meningkatkan risiko kanker dengan mengubah DNA sel. Oleh karena itu, untuk mengurangi risiko karsinogen akibat memasak dengan panas tinggi, coba gunakan metode memasak yang lebih sehat seperti memanggang pada suhu yang lebih rendah, atau memasak lambat dalam slow cooker.
              </p>
            </div>
          </li>
          <li>
            <div>
              <strong>Produk Susu</strong>
              <p>
                Berbagai produk susu sapi dapat meningkatkan risiko beberapa jenis kanker, termasuk kanker prostat. Karena susu dapat meningkatkan kadar faktor pertumbuhan seperti insulin 1 (IGF-1). Ini dapat meningkatkan proliferasi, atau produksi, sel kanker prostat.
              </p>
            </div>
          </li>
          <li>
            <div>
              <strong>Gula dan Karbohidrat Olahan</strong>
              <p>
                Mengonsumsi makanan bergula dan bertepung dengan konsentrasi tinggi dapat meningkatkan risiko diabetes tipe 2 dan obesitas. Kedua kondisi ini meningkatkan peradangan dan stres oksidatif, yang bisa memicu jenis kanker tertentu.
              </p>
              <p>
                Asupan gula dan karbohidrat olahan yang tinggi juga dapat menyebabkan kadar glukosa darah tinggi, yang meningkatkan risiko kanker kolorektal. Untuk membatasi efek kesehatan dari karbohidrat olahan, cobalah untuk menggantinya dengan alternatif yang lebih sehat seperti:
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Artikel
