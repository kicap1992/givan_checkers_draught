import Head from 'next/head';
import { Container, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { MainLayout } from '../components/layout/MainLayout';
import aquerqueImage from '../public/history/aquerque.jpeg';
import draughts1700sImage from '../public/history/draughts-1700s.webp';

export default function History() {
  return (
    <MainLayout>
      <Head>
        <title>Givan Dam - Main Dam</title>
      </Head>
      <VStack p={[3, 0]} spacing={6}>
        <Text>
          Penggalian arkeologi di Irak menemukan bentuk paling awal yang diketahui
          permainan Draf. Penanggalan karbon digunakan untuk menentukan umur
          permainan kuno, dan tampaknya berasal dari sekitar 3000 SM. Itu
          papan dan jumlah potongan yang digunakan berbeda dari
          Papan draf dan potongan digunakan saat ini.
        </Text>
        <Text>
          Sekitar 1400 SM, orang Mesir kuno menggunakan papan berukuran 5 x 5 untuk memainkan a
          permainan yang disebut Aquerque. Permainan ini sangat populer selama ini dan
          itu dimainkan di seluruh peradaban barat selama ribuan tahun.
        </Text>
        <Container maxW="md">
          <Image src={aquerqueImage} alt="ancient 5x5 egyption chessboard" />
        </Container>
        <Text>
          Sekitar tahun 1100 A.D., permainan Aquerque berubah ketika seorang Prancis memainkannya
          itu di papan catur menggunakan 12 buah untuk setiap pemain. Nama dari
          permainan juga berubah. Itu dikenal sebagai "Fierges."
        </Text>
        <Text>
          Evolusi Draf berikutnya terjadi ketika peraturan berubah lagi,
          membuatnya wajib untuk melompati Draf untuk maju ke seluruh papan.
          Versi yang lebih baru ini lebih menantang daripada yang lama. Versi lama
          dianggap lebih lambat dan kurang menantang, dan menjadi sosial
          permainan yang dimainkan oleh para wanita pada zaman itu dan disebut “La Jeu Pleasant De
          Dames,” (permainan wanita yang menyenangkan). Yang baru, lebih agresif
          bentuk permainan tersebut dikenal dengan nama “Jeu Force” (Play Force).
        </Text>
        <Text>
          Draf akhirnya diekspor dari Prancis ke Inggris, Spanyol, dan
          Amerika. Di Spanyol sekitar pertengahan tahun 1500-an, buku mulai ada
          ditulis tentang Draf. Pada tahun 1756, William Payne, seorang matematikawan di
          Inggris, menulis bukunya sendiri tentang Draf.
        </Text>
        <Container maxW="md">
          <Image
            src={draughts1700sImage}
            alt="draughts being played in the 1700s"
          />
        </Container>
        <Text>
          Pada tahun 1847, kejuaraan dunia Draf pertama berlangsung. Seiring waktu
          berlalu, menjadi jelas bahwa game tersebut menghadirkan bukaan yang memberi
          keuntungan satu pihak atas pihak lain. Ada dua batasan gerakan
          dibuat di mana permainan dimulai dengan gaya acak. Dua ini
          pembatasan bergerak sebagian besar digunakan oleh pemain ahli. Di zaman modern
          Turnamen draf, tiga batasan gerakan digunakan.
        </Text>
        <Text>
          Seiring kemajuan teknologi, tidak lama kemudian programmer komputer
          mulai mengembangkan game Draft yang sangat mendasar yang dapat dimainkan
          komputer. Alan Turing membuat game Draf yang belum sempurna di atas kertas
          karena komputer pada saat itu belum cukup berkembang untuk menjalankannya
          Program draf. Pada tahun 1952, Arthur L. Samuel membuat Draf pertama
          program yang sebenarnya bisa dimainkan di komputer. Dari titik itu
          maju, game Draf komputer telah meningkat dalam kecepatan dan fungsi.
        </Text>
        <Text>
          Program Draf saat ini membutuhkan perencanaan yang kurang strategis dan lebih banyak lagi
          kemampuan pencarian data komputer. Program Draf menggunakan database
          pencarian yang menampilkan semua kemungkinan kombinasi ketika ada beberapa bagian
          tertinggal di papan.
        </Text>
      </VStack>
    </MainLayout>
  );
}
